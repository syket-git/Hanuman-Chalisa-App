/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/hanumanji.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}> শ্রী রাম জয় রাম </Text>
        <Text style={styles.text}> জয় জয় রাম</Text>
        <View style={{alignItems: 'center', paddingBottom: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Read')}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>পড়া শুরু করুন </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'tirobangla_regular',
    color: '#f25309',
    fontSize: 30,
    // fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    borderRadius: 2,
    width: 200,
    backgroundColor: '#f25309',
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'tirobangla_regular',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default Home;
