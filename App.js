import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import BottomTabNavigator from './views/BottomTabNavigator';
import LinearGradient from 'react-native-linear-gradient';
import SvgUri from 'react-native-svg-uri';

export default class MainScreen extends React.Component {

  render() {
      return (
        <View style={{flex:1}}>
          <BottomTabNavigator style={{ flex: 1}}/>
          <View style={{alignItems: 'center'}}>
            <LinearGradient colors={['rgb(131, 186, 255)', 'rgb(76, 132, 255)']} style={styles.lgBlue} >
              <TouchableOpacity>
                <View>
                  <SvgUri
                    width="24"
                    height="24"
                    source={require('./assets/padnote.svg')}/>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        );
      }
  }

  const styles = StyleSheet.create({

    lgBlue: {
      position: 'absolute',
      bottom: 20,
      height: 56,
      width: 56,
      padding: 10,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#303838',
      shadowOffset: { width: 5, height: 5 },
      shadowRadius: 10,
      shadowOpacity: 0.95
    }
  });
