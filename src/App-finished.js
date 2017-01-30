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


const dataWithLabel = csvData.map((row) => {
  return {
    // ...row,
    y: row.close,
    x: getTime(parse(row.date)),
    label: row.close
  }
})

class App extends Component {
  render() {

    return (
      <div className="App">
        {/*<VictoryZoom>*/}
        <VictoryChart
          theme={sthlmJs}
          //domain={{y: [0, 640]}}
          domainPadding={{y: [20, 0]}}
          containerComponent={<VictoryContainer responsive={false} />}
        >
          <VictoryGroup
            data={dataWithLabel}
            /*y="close"
             x={(datum) => {
             return getTime(parse(datum.date))
             }}*/
          >
            <VictoryLine
              animate={
                {
                  easing: 'bounceInOut',
                  onLoad: {
                    duration: 2000,

                  },
                  onEnter: { duration: 500 }
                }
              }
            />
            {<VictoryScatter />}
            <VictoryVoronoiTooltip style={sthlmJs.voronoi.style} />
          </VictoryGroup>
          <VictoryAxis
            tickCount={19}
            tickFormat={(value) => {
              return format(parse(value), 'ddd DD')
            }}
          />
          <VictoryAxis
            dependentAxis
            tickCount={10}
            style={{
              tickLabels: {
                padding: 3,
              }
            }}
          />
        </VictoryChart>
        {/*</VictoryZoom>*/}
      </div>
    );
  }
}

export default App;
