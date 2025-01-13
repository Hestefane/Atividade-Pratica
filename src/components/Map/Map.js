import React, { useRef, useState, useEffect } from 'react'; 
import MapContext from './MapContext';
import * as ol from 'ol';
import './Map.css';
import { defaultInteractions } from './interaction/defaults'; // Importe a função de interações

const Map = ({ children, zoom, center, interactionsOptions }) => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  useEffect(() => {
    const options = {
      view: new ol.View({ zoom, center }),
      layers: [],
      controls: [],
      overlays: [],
      interactions: defaultInteractions(interactionsOptions), // Use a função para configurar as interações
    };

    const mapObject = new ol.Map(options);
    mapObject.setTarget(mapRef.current);
    setMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, [zoom, center, interactionsOptions]); // Adiciona dependências de `interactionsOptions` para atualizar as interações quando mudar

  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (!map) return;
    map.getView().setCenter(center);
  }, [center]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} className="ol-map">
        {children}
      </div>
    </MapContext.Provider>
  );
};

export default Map;

