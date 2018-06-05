import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import DiscoverView from './DiscoverView';
import SvgUri from 'react-native-svg-uri';

class DiscoverScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{ flexDirection: 'row', marginLeft: 15, backgroundColor: 'white', height: 116 }}>
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={{fontSize: 25, color: 'rgb(36, 50, 101)', fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400', marginTop: 32}}>Hi Omri</Text>
            <Text style={{fontSize: 25, color: 'rgb(36, 50, 101)', fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '400', marginTop: 10}}>Good Morning</Text>
          </View>
          <Image
            style={{width: 80, height: 80, marginTop: 30, marginRight: 15, borderRadius: 100}}
            source={{uri: 'https://scontent.fhfa2-1.fna.fbcdn.net/v/t1.0-9/12572986_10208757398712792_887687085671838322_n.jpg?_nc_cat=0&oh=10a198337d3dd3b65505c80e2267c450&oe=5BBC5935'}}
          />
        </View>
        <DiscoverView style={{ flex: 1}}/>
      </View>
    );
  }
}

class TrainingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Add Training</Text>
      </View>
    );
  }
}

class AgendaScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Agenda</Text>
      </View>
    );
  }
}

class InboxScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inbox</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

/*
Using svg located on server instead of local file to avoid android bugs.
 */
export default createBottomTabNavigator({
  Discover: DiscoverScreen,
  Training: TrainingScreen,
  Agenda: AgendaScreen,
  Inbox: InboxScreen,
  Profile: ProfileScreen,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let svgUri;
      if (routeName === 'Discover') {
        svgUri = require('../assets/explore-tool.svg');
      } else if (routeName === 'Training') {
        svgUri = require('../assets/add.svg');
      } else if (routeName === 'Inbox') {
        svgUri = require('../assets/inbox.svg');
      } else if (routeName === 'Profile') {
        svgUri = require('../assets/profile.svg');
      }

      return <View>
        <SvgUri
          width="24"
          height="24"
          source={svgUri}
        />
      </View>;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#088edf',
    inactiveTintColor: 'rgb(150, 158, 183)',
  },
});
