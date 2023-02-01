import { ScatterplotLayer } from 'deck.gl/typed';
import sykler from '../data/bysykler.json';

type ScatterTypes = {
  station_id: string;
  name: string;
  address: string;
  rental_uris: {
    android: string;
    ios: string;
  };
  lat: number;
  lon: number;
  capacity: number;
};

export const ScatterPlot = () => {
  return new ScatterplotLayer<ScatterTypes>({
    id: 'scatter-layer',
    data: sykler.data.stations,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: (stationData) => [stationData.lon, stationData.lat],
    getRadius: (stationData) => Math.sqrt(stationData.capacity),
    getFillColor: (d) => [255, 140, 0],
    getLineColor: (d) => [0, 0, 0],
  });
};
