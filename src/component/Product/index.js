import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import laptop from '../../assets/images/laptop.jpeg';

const Product = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={laptop} style={styles.imageProduct} />
      <Text style={styles.productName}>New Macbook 2022</Text>
      <Text style={styles.productPrice}>Rp. 16.000.000</Text>
      <Text style={styles.location}>Jakarta Barat</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonBuy}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    width: 212,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    marginTop: 20,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f2994a',
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  buttonWrapper: {
    backgroundColor: '#6fcf97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonBuy: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
