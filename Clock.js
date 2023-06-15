import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View>
      <Text style={styles.text}>{currentTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: 15,
  },
});
export default Clock;
