import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Button, TouchableOpacity, Image} from 'react-native';

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 23,
          textAlign: 'center',
          color: 'black',
          fontWeight: 'bold',
        }}>
        Concrete Mix Design as per IS 10262:2019
      </Text>
      <Image source={require('../images/pes_logo.jpeg')} />
      <Text style={{fontSize: 17, color: 'black'}}>
        Concrete Mix App from Civil Department
      </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('InputScreen');
        }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: 'white',
            padding: 10,
            margin: 20,
            backgroundColor: '#00c04b',
            borderRadius: 10,
          }}>
          Next {'>'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
