import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import laptop from '../../assets/images/laptop.jpeg';

const StylingComponent = () => {
  return (
    <View>
      <View>
        <View
          style={{
            padding: 12,
            width: 212,
            backgroundColor: '#ecf0f1',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Image
            source={laptop}
            style={{width: 130, height: 107, borderRadius: 10}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            New Macbook 2022
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: '#f2994a'}}>
            Rp. 16.000.000
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
            Jakarta Barat
          </Text>
          <View
            style={{
              backgroundColor: '#6fcf97',
              paddingVertical: 6,
              borderRadius: 25,
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              Beli
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginTop: 40,
    marginLeft: 20,
  },
});

export default StylingComponent;
