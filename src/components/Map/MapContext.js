// src/components/Map/MapContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Map as OLMap, View } from 'ol'; // Importação do OpenLayers
import 'ol/ol.css'; // Importação dos estilos do OpenLayers

// Criação do contexto
const MapContext = createContext();

const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Inicializa o mapa OpenLayers
    const initialMap = new OLMap({
      target: 'map', // ID do elemento HTML onde o mapa será renderizado
      layers: [], // Camadas do mapa (serão adicionadas depois)
      view: new View({
        center: [0, 0], // Coordenadas iniciais (em projecção EPSG:3857)
        zoom: 2, // Nível de zoom inicial
      }),
    });

    setMap(initialMap);

    // Limpeza ao desmontar o componente
    return () => initialMap.setTarget(null);
  }, []);

  return (
    <MapContext.Provider value={{ map }}>
      {children}
    </MapContext.Provider>
  );
};

export { MapProvider, MapContext };
