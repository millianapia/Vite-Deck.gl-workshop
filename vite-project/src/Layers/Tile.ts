import { BitmapLayer, TileLayer } from 'deck.gl/typed';

export const Tile = () => {
  return new TileLayer({
    id: 'base-map',
    data: `https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}`,
    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,
    renderSubLayers: (layerProps) => {
      const {
        //@ts-ignore
        bbox: { west, south, east, north },
      } = layerProps.tile;
      return new BitmapLayer(layerProps, {
        data: null,
        image: layerProps.data,
        bounds: [west, south, east, north],
      });
    },
  });
};
