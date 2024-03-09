import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Flower from '../assets/svgs/flower.svg';
import {Colors, Fonts} from '.';

// icon
import Brain from '../assets/svgs/brain.svg';
import Pencil from '../assets/svgs/pencil.svg';
import Sun from '../assets/svgs/sun.svg';

const App = () => {
  return (
    <LinearGradient
      colors={['#222229', '#334141']}
      start={{x: 0.5, y: 0.6}}
      end={{x: 1, y: 0}}
      style={styles.box}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.ContainerHade}>
            <View style={styles.HadeFlower}>
              <Flower width={31} height={31} fill={Colors.AX_Green_Light} />
              <Text style={styles.leftText}>mindmate</Text>
            </View>
            <Text style={styles.rightText}>skip</Text>
          </View>
          <View style={styles.line}></View>

          <View style={styles.TextContainer}>
            <Text style={styles.contText}>Explore</Text>
            <Text style={styles.contText}>infinite</Text>
            <Text
              style={[
                styles.contText,
                {lineHeight: 68, color: Colors.AX_Green_Light},
              ]}>
              capabilities
            </Text>
            <Text style={[styles.contText, {lineHeight: 63}]}>of writing</Text>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.listData}>
              <View style={styles.listIcon}>
                <Brain width={17} height={17} fill={Colors.AX_White} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  box: {
    height: '100%',
  },
  mainContainer: {
    padding: 20,
    marginTop: 30,
  },
  ContainerHade: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  HadeFlower: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },

  leftText: {
    fontFamily: Fonts.Font_700,
    textTransform: 'capitalize',
    fontSize: 13,
    marginLeft: 8,
    color: Colors.AX_White,
  },
  rightText: {
    fontFamily: Fonts.Font_400,
    textTransform: 'capitalize',
  },
  line: {
    borderTopWidth: 0.5,
    borderColor: '#AAAAAA',
    // marginTop: 18,
    marginVertical: 18,
  },
  contText: {
    fontFamily: Fonts.Font_300,
    // textTransform: 'capitalize',
    fontSize: 60,
    lineHeight: 72,
  },
  TextContainer: {},
  listData: {
    backgroundColor: '#787B7C',
    height: 80,
    borderRadius: 30,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  listIcon: {
    width: 70,
    height: 70,
    backgroundColor: '#242424',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
