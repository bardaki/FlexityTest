import React from 'react';
import { Text, View } from 'react-native';
import Chart from './PieChartComponent';

class PieChart extends React.PureComponent {
  render() {
    return (
      <View style={{ flexDirection: 'row', marginLeft: 11, marginTop: 0}}>
        <Chart/>
        <View style={{flex:1}}>
          <Text style={{marginLeft: 25, marginTop: 8, color: 'rgb(119, 130, 171)', fontSize: 14,  fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>Analysis by service</Text>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 16, marginLeft: 25}}>
            <Text style={{width: 17, height: 17, backgroundColor: 'rgb(76, 132, 255)', borderRadius: 5}}></Text>
            <Text style={{marginLeft: 5, color: 'rgb(119, 130, 171)', fontSize: 14, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>Running - $610</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginLeft: 25}}>
            <Text style={{width: 17, height: 17, backgroundColor: 'rgb(55, 229, 193)', borderRadius: 5}}></Text>
            <Text style={{marginLeft: 5, color: 'rgb(119, 130, 171)', fontSize: 14, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>Aerobic - $369</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginLeft: 25}}>
            <Text style={{width: 17, height: 17, backgroundColor: 'rgb(178, 90, 255)', borderRadius: 5}}></Text>
            <Text style={{marginLeft: 5, color: 'rgb(119, 130, 171)', fontSize: 14, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>Bicycle - $246</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 4, marginLeft: 25}}>
            <Text style={{width: 17, height: 17, backgroundColor: 'rgb(255, 190, 82)', borderRadius: 5}}></Text>
            <Text style={{marginLeft: 5, color: 'rgb(119, 130, 171)', fontSize: 14, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>Swiming - $5</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default PieChart;
