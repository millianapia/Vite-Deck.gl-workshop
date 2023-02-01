import { LineLayer } from 'deck.gl/typed';

type LineType = {
  sourcePosition: number[];
  targetPosition: number[];
};

const data: LineType[] = [
  { sourcePosition: [5.313, 60.382], targetPosition: [5.313, 60.392] },
  { sourcePosition: [5.313, 60.392], targetPosition: [5.32, 60.382] },
  { sourcePosition: [5.32, 60.382], targetPosition: [5.313, 60.382] },
];

export const Line = () => {
  return new LineLayer({
    id: 'line-Layer',
    data,
    getColor: [255, 0, 0],
  });
};
