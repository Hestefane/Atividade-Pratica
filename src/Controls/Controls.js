import React, { useEffect } from 'react';
import { Map as OLMap } from 'ol';
import { defaults as defaultControls } from 'ol/control';

const Controls = ({ map }) => {
  useEffect(() => {
    if (map) {
      // Adiciona controles padrão ao mapa
      map.setControls(defaultControls());
    }
  }, [map]);

  return null;
};

export default Controls;
