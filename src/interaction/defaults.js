// interaction/defaults.js
import {defaults} from 'ol/interaction/defaults';

/**
 * Configuração das interações padrão para o mapa.
 * Modifique as interações conforme a necessidade.
 */
export const defaultInteractions = (options) => {
  return defaults({
    altShiftDragRotate: options.altShiftDragRotate ?? true,
    onFocusOnly: options.onFocusOnly ?? false,
    doubleClickZoom: options.doubleClickZoom ?? true,
    keyboard: options.keyboard ?? true,
    mouseWheelZoom: options.mouseWheelZoom ?? true,
    shiftDragZoom: options.shiftDragZoom ?? true,
    dragPan: options.dragPan ?? true,
    pinchRotate: options.pinchRotate ?? true,
    pinchZoom: options.pinchZoom ?? true,
    zoomDelta: options.zoomDelta,
    zoomDuration: options.zoomDuration,
  });
};
