import { useContext, useEffect } from 'react';
import { FullScreen } from 'ol/control';
import { MapContext } from '../components/Map/MapContext';

const FullScreenControl = () => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    if (!map) return;

    const control = new FullScreen({});
    map.addControl(control);

    return () => {
      map.removeControl(control);
    };
  }, [map]);

  return null;
};

export default FullScreenControl;
