import DeckGL, { LayersList } from 'deck.gl/typed';
import { SolidPolygon, Line, ScatterPlot, Tile, Column } from '../src/Layers';

const initViewState = {
  longitude: 5.313,
  latitude: 60.382,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

function App() {
  const layers: LayersList = [
    Line(),
    SolidPolygon(),
    Tile(),
    ScatterPlot(),
    Column(),
  ];
  return <DeckGL controller layers={layers} initialViewState={initViewState} />;
}

export default App;
