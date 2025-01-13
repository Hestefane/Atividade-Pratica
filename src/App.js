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

const ORS_API_KEY = '5b3ce3597851110001cf6248f67747ad343946d3aeb4905b0748c291';

function App() {
  const [map, setMap] = useState(null);
  const [view, setView] = useState(null);
  const [vectorLayer, setVectorLayer] = useState(null);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [routeError, setRouteError] = useState('');

  useEffect(() => {
    const initialView = new View({
      center: fromLonLat([-43.5033, -20.3833]),
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
      if (!query.trim()) throw new Error('Campo vazio.');

      const response = await fetch(
        `https://api.openrouteservice.org/geocode/search?api_key=${ORS_API_KEY}&text=${encodeURIComponent(query)}&boundary.country=BR`
      );

      if (!response.ok) {
        throw new Error(`Erro na API de geocodificação: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.features && data.features.length > 0) {
        // Retorna as coordenadas do resultado mais relevante
        return data.features[0].geometry.coordinates;
      } else {
        throw new Error('Localização não encontrada.');
      }
    } catch (error) {
      console.error(error.message);

      // Fallback para coordenadas genéricas da cidade, caso necessário
      if (query.toLowerCase().includes('bairro')) {
        console.warn('Usando fallback para coordenadas genéricas.');
        return null; // Insira aqui as coordenadas padrão da cidade, se for aplicável.
      }

      setRouteError(error.message);
      return null;
    }
  };

  const fetchRoute = async (start, end) => {
    try {
      const response = await fetch(
        `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${ORS_API_KEY}&start=${start[0]},${start[1]}&end=${end[0]},${end[1]}`
      );

      if (!response.ok) {
        throw new Error(`Erro na API de rotas: ${response.statusText}`);
      }

      const data = await response.json();
      const coordinates = data.features[0].geometry.coordinates.map((coord) =>
        fromLonLat(coord)
      );
      return coordinates;
    } catch (error) {
      console.error(error.message);
      setRouteError(error.message);
      return null;
    }
  };

  useEffect(() => {
    const getRoute = async () => {
      if (origin.trim() && destination.trim()) {
        setRouteError('');

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
            setRouteError('Não foi possível traçar a rota.');
          }
        } else {
          setRouteError(
            'Não foi possível encontrar as coordenadas de origem ou destino. Verifique os locais e tente novamente.'
          );
        }
      }
    };

    getRoute();
  }, [origin, destination, vectorLayer, view]);

  return (
    <div className="App">
      <div style={styles.searchBar}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Origem:</label>
          <input
            type="text"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Digite o local de origem"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Destino:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Digite o local de destino"
            style={styles.input}
          />
        </div>
        {routeError && <p style={styles.error}>{routeError}</p>}
      </div>
      <div id="map" style={{ width: '100%', height: '100vh' }}></div>
    </div>
  );
}

export default App;

const styles = {
  searchBar: {
    position: 'absolute',
    top: '80px',
    left: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '250px',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  error: {
    color: 'red',
    fontSize: '0.9em',
  },
};
