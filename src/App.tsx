import DeckGL, { LayersList } from 'deck.gl/typed';
import { SolidPolygon, Line, ScatterPlot, Tile, Column } from '../src/Layers';
import style_bonn from './styles/bonn_style.json';
import StaticMap from 'react-map-gl';

const initViewState = {
  longitude: 5.313,
  latitude: 60.382,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

const initBonnViewState = {
  longitude: 7.1003,
  latitude: 50.741,
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
  return (
    <DeckGL controller layers={layers} initialViewState={initBonnViewState}>
      <StaticMap mapStyle={style_bonn} />
    </DeckGL>
  );
}

export default App;
