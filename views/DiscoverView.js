import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { Card } from 'react-native-elements';
import PieChart from './PieChart';
import LineChart from './LineChart';
import MonthlySegmentationView from './MonthlySegmentationView';


class OverviewScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 23, marginBottom: 20 }}>
          <Text style={{color: 'rgb(119, 130, 171)', fontSize: 14, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>--------------------------- Current Income ---------------------------</Text>
          <Text style={{color: 'rgb(55, 229, 193)', fontSize: 55, marginTop: 2, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>$1,230</Text>
          <Card containerStyle={{width: '90%', height: 160, marginTop: 13}}>
            <View>
              <PieChart/>
            </View>
          </Card>
          <Card containerStyle={{width: '90%', height: 160, marginTop: 6}}>
            <View>
              <LineChart/>
            </View>
          </Card>
          <Card containerStyle={{width: '90%', height: 160, marginTop: 6}}>
            <View style={{}}>
              <Text style={{textAlign: 'center', fontSize: 12, color: 'rgb(119, 130, 171)', fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400'}}>Monthly order segmentation</Text>
              <MonthlySegmentationView/>
            </View>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details</Text>
      </View>
    );
  }
}

class ManageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Manage</Text>
      </View>
    );
  }
}

export default createMaterialTopTabNavigator({
  Overview: OverviewScreen,
  Details: DetailsScreen,
  Manage: ManageScreen,
},
{ tabBarOptions: {
  activeTintColor: 'rgb(76, 132, 255)',
  inactiveTintColor: 'rgb(150, 158, 183)',
  labelStyles: {
    fontSize: 16,
    fontFamily: 'sofia-pro, sans-serif',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  style: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  indicatorStyle: {
    backgroundColor: 'rgb(76, 132, 255)',
  },
  upperCaseLabel: false,
}});
