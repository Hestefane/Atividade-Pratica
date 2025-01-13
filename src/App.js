import React, { useEffect, useState } from 'react';
import { Map as OLMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { LineString } from 'ol/geom';
import { Feature } from 'ol';
import { Style, Stroke } from 'ol/style';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';

const ORS_API_KEY = 'SUA_CHAVE_ORS'; // Substitua pela sua chave do OpenRouteService

function App() {
  const [map, setMap] = useState(null);
  const [view, setView] = useState(null);
  const [vectorLayer, setVectorLayer] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  useEffect(() => {
    const initialView = new View({
      center: fromLonLat([-43.5033, -20.3833]), // Coordenadas iniciais (Ouro Preto)
      zoom: 13,
    });

    const initialMap = new OLMap({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: initialView,
    });

    const vectorSource = new VectorSource();
    const vectorLayerInstance = new VectorLayer({
      source: vectorSource,
      style: new Style({
        stroke: new Stroke({
          color: '#007BFF',
          width: 3,
        }),
      }),
    });

    initialMap.addLayer(vectorLayerInstance);
    setMap(initialMap);
    setView(initialView);
    setVectorLayer(vectorLayerInstance);

    return () => initialMap.setTarget(null);
  }, []);

  const fetchCoordinates = async (query) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      if (data.features.length > 0) {
        const { coordinates } = data.features[0].geometry;
        return coordinates;
      }
      throw new Error('Localização não encontrada');
    } catch (error) {
      console.error('Erro ao buscar coordenadas:', error);
      return null;
    }
  };

  const fetchRoute = async (start, end) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${start[0]},${start[1]}&end=${end[0]},${end[1]}`
      );
      const data = await response.json();
      const coordinates = data.features[0].geometry.coordinates.map((coord) =>
        fromLonLat(coord)
      );
      return coordinates;
    } catch (error) {
      console.error('Erro ao buscar rota:', error);
      return null;
    }
  };

  useEffect(() => {
    const getRoute = async () => {
      if (origin && destination) {
        const [start, end] = await Promise.all([
          fetchCoordinates(origin),
          fetchCoordinates(destination),
        ]);

        if (start && end) {
          const route = await fetchRoute(start, end);

          if (route) {
            const vectorSource = vectorLayer.getSource();
            vectorSource.clear();

            const lineFeature = new Feature({
              geometry: new LineString(route),
            });

            vectorSource.addFeature(lineFeature);
            view.fit(lineFeature.getGeometry().getExtent(), {
              padding: [50, 50, 50, 50],
            });
          } else {
            alert('Não foi possível traçar a rota.');
          }
        } else {
          alert('Não foi possível encontrar as coordenadas.');
        }
      }
    };

    getRoute();
  }, [origin, destination, vectorLayer, view]);

  return (
    <div className="App">
      <div style={styles.searchBar}>
        <div style={styles.field}>
          <label style={styles.label}><b>Origem</b></label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Digite a origem"
            style={styles.input}
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}><b>Destino</b></label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Digite o destino"
            style={styles.input}
          />
        </div>
      </div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
}

export default App;

const styles = {
  searchBar: {
    position: 'absolute',
    top: '72px', // Aumentado para ficar abaixo dos botões de zoom
    left: '16px',
    width: '220px', // Menor largura
    padding: '8px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
  field: {
    marginBottom: '8px',
  },
  label: {
    display: 'block',
    marginBottom: '4px',
    fontSize: '12px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '4px', // Caixa de resposta menor
    fontSize: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};
