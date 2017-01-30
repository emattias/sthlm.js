import React, { Component } from 'react';
import {
  VictoryLine,
  VictoryChart,
  VictoryContainer,
  VictoryScatter,
  VictoryGroup,
  VictoryAxis,
  VictoryVoronoiTooltip,
  VictoryZoom,
} from 'victory'
import { getTime, format, parse } from 'date-fns'

import csvData from '../public/data.csv'
import './App.css';
import sthlmJs from './sthlm'


class App extends Component {
  render() {

    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
