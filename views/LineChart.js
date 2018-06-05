import React from 'react';
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts';
import { View } from 'react-native';
import { Circle, Path } from 'react-native-svg';

class Axes extends React.PureComponent {

  render() {

    const data = [ 5, 16, 8, 8, 6, 22, 9, 25];
    const datab = [ 5, 16, 11, 21, 10, 10, 4, 11 ];

    const yData = [5, 10, 15, 20, 25, 30, 35, 40];
    const xData = [19, 10, 10, 11, 12, 13, 14, 15 ];

    const Decorator = ({ x, y, data }) => {
      return data.map((value, index) => (
        <Circle
          key={ index }
          cx={ x(index) }
          cy={ y(value) }
          r={ 2 }
          stroke={ 'rgb(134, 65, 244)' }
          fill={ 'white' }
        />
      ))
    }

    const DecoratorB = ({ x, y, data }) => {
      return data.map((value, index) => (
        <Circle
          key={ index }
          cx={ x(index) }
          cy={ y(value) }
          r={ 2 }
          stroke={ 'rgb(55, 229, 193)' }
          fill={ 'white' }
        />
      ))
    }

    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 12;

    return (
      <View style={{ height: 140, flexDirection: 'row' }}>
        <YAxis
          data={yData}
          style={{ marginBottom: xAxisHeight }}
          contentInset={verticalContentInset}
          svg={axesSvg}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <LineChart
            style={{ flex: 1 }}
            data={data}
            contentInset={verticalContentInset}
            svg={{ stroke: 'rgb(76, 132, 255)' }}
            >
              <Decorator/>
            </LineChart>
            <LineChart
              style={{ flex: 1, marginTop: -80 }}
              data={datab}
              contentInset={verticalContentInset}
              svg={{ stroke: 'rgb(55, 229, 193)' }}
              >
                <DecoratorB/>
              </LineChart>
              <XAxis
                style={{ marginHorizontal: -10, height: xAxisHeight }}
                data={xData}
                formatLabel={(value, index) => `${index}/05`}
                contentInset={{ left: 20, right: 20 }}
                svg={axesSvg}
              />
            </View>
          </View>
        )
      }
    }

    export default Axes;
