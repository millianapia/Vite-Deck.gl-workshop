import { ColumnLayer } from 'deck.gl/typed';
import sykler from '../data/bysykler.json';

type ColumnTypes = {
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

export const Column = () => {
  return new ColumnLayer<ColumnTypes>({
    id: 'column-layer',
    data: sykler.data.stations,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    lineWidthMinPixels: 1,
    elevationScale: 10,
    radius: 15,
    getPosition: (stationData) => [stationData.lon, stationData.lat],
    getFillColor: (d) => [255, 140, 0],
    getLineColor: (d) => [0, 0, 0],
    getElevation: (d) => d.capacity,
  });
};
