/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  chopai,
  doha,
  dohaExplanation,
  lastDoha,
  lsatDohaExplanation,
} from '../constants/hanuman-chalisa-bangla';

const Read = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/hanumanji.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{padding: 20, paddingBottom: 70, zIndex: 999}}>
          <View style={{paddingBottom: 30}}>
            <Text
              style={{
                ...styles.text,
                textDecorationLine: 'underline',
              }}>
              দোহা{' '}
            </Text>
            {doha.map((item, index) => (
              <Text key={index} style={styles.text}>
                {item}
              </Text>
            ))}

            <Text style={styles.titleText}>অর্থ:</Text>
            <Text style={styles.normalText}>{dohaExplanation}</Text>
          </View>

          <View style={{paddingVertical: 30}}>
            <Text style={{...styles.text, textDecorationLine: 'underline'}}>
              চৌপাঈ
            </Text>

            {chopai.map((item, index) => (
              <View style={{paddingVertical: 15}} key={index}>
                {item?.text?.map((text, i) => (
                  <Text style={styles.text} key={i}>
                    {text}
                  </Text>
                ))}
                <Text style={styles.titleText}>বাংলা অনুবাদ : </Text>
                <Text style={styles.normalText}>{item?.onubad}</Text>
              </View>
            ))}
          </View>
          <View style={{paddingBottom: 30}}>
            <Text
              style={{
                ...styles.text,
                textDecorationLine: 'underline',
              }}>
              দোহা{' '}
            </Text>
            {lastDoha.map((item, index) => (
              <Text key={index} style={styles.text}>
                {item}
              </Text>
            ))}

            <Text style={styles.titleText}>অর্থ:</Text>
            <Text style={styles.normalText}>{lsatDohaExplanation}</Text>
          </View>
        </ScrollView>
        <View style={styles.overlay} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    flex: 1,
  },
  titleText: {
    fontFamily: 'tirobangla_regular',
    color: 'white',
    fontSize: 20,
    textDecorationLine: 'underline',
    paddingBottom: 15,
  },
  normalText: {
    fontFamily: 'tirobangla_regular',
    lineHeight: 27,
    color: 'white',
    fontSize: 18,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    fontFamily: 'tirobangla_regular',
    color: 'white',
    fontSize: 27,
    lineHeight: 42,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  buttonContainer: {
    borderRadius: 2,
    width: 200,
    backgroundColor: '#f25309',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Read;
