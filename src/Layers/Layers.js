import React, { useEffect } from 'react';
import { Tile as TileLayer } from 'ol/layer';
import { OSM } from 'ol/source';
import 'ol/ol.css';

const Layers = ({ map }) => {
  useEffect(() => {
    if (map) {
      const osmLayer = new TileLayer({
        source: new OSM(),
      });

      map.addLayer(osmLayer);
    }
  }, [map]);

  return null;
};

export default Layers;
