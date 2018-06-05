import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Text } from 'react-native-svg';

class PieChartCom extends React.PureComponent {
  render() {
    var data = [
      {
        key: 1,
        amount: 45,
        svg: { fill: 'rgb(76, 132, 255)' },
        label: '45%',
      },
      {
        key: 2,
        amount: 30,
        svg: { fill: 'rgb(55, 229, 193)' },
        label: '30%',
      },
      {
        key: 3,
        amount: 20,
        svg: { fill: 'rgb(178, 90, 255)' },
        label: '20%',
      },
      {
        key: 4,
        amount: 5,
        svg: { fill: 'rgb(255, 190, 82)' },
        label: '5%',
      }
    ];

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[ 0 ]}
            y={pieCentroid[ 1 ]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={8}
            stroke={'white'}
            strokeWidth={0.05} >
            {data.label}
          </Text>
        )
      })
    }

    return (
      <PieChart
        style={ { height: 130, width: 130 } }
        valueAccessor={({ item }) => item.amount}
        data={data}
        outerRadius={'95%'}>
        <Labels/>
      </PieChart>
    )
  }
}

export default PieChartCom;
