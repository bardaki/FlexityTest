import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SvgUri from 'react-native-svg-uri';

export default class MonthlySegmentationView extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{marginLeft: 23, justifyContent: 'flex-end', alignItems: 'center'}}>
          <LinearGradient colors={['rgb(131, 186, 255)', 'rgb(76, 132, 255)']} style={styles.lgBlue} >
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 12, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>100</Text>
          </LinearGradient>
          <LinearGradient colors={['rgb(209, 113, 255)', 'rgb(165, 62, 255)']} style={styles.lgPurple} >
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 12, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>10</Text>
          </LinearGradient>
          <Text style={{marginTop: 11, color: 'rgb(85, 96, 128)', fontSize: 10, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>Groups</Text>
        </View>
        <View style={{marginLeft: 22, justifyContent: 'flex-end', alignItems: 'center'}}>
          <LinearGradient colors={['rgb(209, 113, 255)', 'rgb(165, 62, 255)']} style={styles.lgPurpleb} >
            <Text style={{color: '#ffffff', textAlign: 'center', fontSize: 12, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>10</Text>
          </LinearGradient>
          <Text style={{marginTop: 11, color: 'rgb(85, 96, 128)', fontSize: 10, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>1ON1</Text>
        </View>
        <View style={{marginLeft: 74, marginTop: 23, justifyContent: 'flex-end', alignItems: 'center'}}>
          <Text style={{color: 'rgb(144, 19, 254)', fontSize: 12, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>80%</Text>
          <Image
            style={{width: 26, height: 38, marginTop: 11}}
            source={require('../assets/womens.png')}/>
            <Text style={{marginTop: 11, color: 'rgb(85, 96, 128)', fontSize: 10, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>Women's</Text>
          </View>
          <View style={{marginLeft: 63, marginTop: 23, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={{color: 'rgb(76, 132, 255)', fontSize: 12, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>20%</Text>
            <Image
              style={{width: 26, height: 38, marginTop: 11}}
              source={require('../assets/mens.png')}/>
              <Text style={{marginTop: 11, color: 'rgb(85, 96, 128)', fontSize: 10, fontFamily: 'sofia-pro, sans-serif', fontStyle: 'normal', fontWeight: '600'}}>Men's</Text>
            </View>
          </View>

        );
      }
    }

    const styles = StyleSheet.create({

      lgBlue: {
        padding:4,
        width: 35,
        height: 101,
        borderRadius: 17
      },
      lgPurple:{
        padding:4,
        marginTop: -54,
        width: 35,
        height: 54,
        borderRadius: 17
      },
      lgPurpleb:{
        padding:4,
        width: 35,
        height: 54,
        borderRadius: 17,
      }
    });
