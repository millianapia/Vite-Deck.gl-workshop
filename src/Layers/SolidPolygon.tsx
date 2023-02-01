import { SolidPolygonLayer } from 'deck.gl/typed';

const data: any = [
  {
    polygon: [
      [5.313, 60.382],
      [5.313, 60.392],
      [5.32, 60.382],
      [5.313, 60.382],
    ],
  },
];

export const SolidPolygon = () => {
  return new SolidPolygonLayer({
    id: 'SP-layer',
    data,
    getPolygon: (d) => d.polygon,
    getColor: [0, 0, 255],
    getFillColor: [0, 0, 255],
    extruded: false,
  });
};
