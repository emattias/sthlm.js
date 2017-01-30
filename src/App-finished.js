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
  VictoryArea
} from 'victory'
import { getTime, format, parse } from 'date-fns'
import _ from 'lodash'

import csvData from '../public/data.csv'
import './App.css';
import sthlmJs from './sthlm'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData()
    }
  }
  // componentDidMount() {
  //   this.setStateInterval = window.setInterval(() => {
  //     this.setState({
  //       data: this.getData()
  //     });
  //   }, 3000);
  // }
  //
  // componentWillUnmount() {
  //   window.clearInterval(this.setStateInterval);
  // }

  getData() {
    return csvData.map((row) => {
      return {
        // y: _.random(0,600),
        y: row.close,
        x: getTime(parse(row.date)),
        label: row.close
      }
    })
  }

  render() {
    const { state: { data } } = this

    return (
      <div className="App">
        {/*<VictoryZoom>*/}
        <VictoryChart
          theme={sthlmJs}
          //domain={{y: [0, 640]}}
          width={960}
          height={500}
          domainPadding={{y: [20, 0]}}
          containerComponent={<VictoryContainer responsive={false} />}
        >
          <VictoryGroup
            {...{data}}
            /*y="close"
             x={(datum) => {
             return getTime(parse(datum.date))
             }}*/
          >
            <VictoryLine
              data={data}
              animate={
                {
                  easing: 'bounceInOut',
                  onLoad: {
                    duration: 2000,
                  },
                }
              }
            />
            {/*<VictoryArea/>*/}
            {/*<VictoryScatter />*/}

            {/* A Voronoi diagram is a partitioning of a plane into regions based on distance to points. It's math, it works! */}
            <VictoryVoronoiTooltip
              style={sthlmJs.voronoi.style}
              /*events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onClick: () => {
                      return [{
                        target: 'data',
                        mutation: ({ style }) => {
                          return {
                            style: {
                              ...style,
                              stroke: '#333',
                            }
                          }
                        }
                      }];
                    }
                  }
                }
              ]}*/
            />
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
