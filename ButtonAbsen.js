import React from 'react';
import {Text, View, Button, Image, StyleSheet} from 'react-native';

const ButtonAbsen = () => {
  return (
    <View>
      <Button
        title="Check In"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
};

export default ButtonAbsen;
