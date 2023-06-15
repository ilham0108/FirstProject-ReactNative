import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';
import Cart from '../../component/Cart';
import Product from '../../component/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Komunikasi antar Component</Text>
      <Cart quantity={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
