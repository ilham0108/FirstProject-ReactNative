import React, {Component, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import MateriFlexbox from './pages/FlexBox';
import StylingComponent from './pages/StylingComponent';

//
import Clock from '../Clock';
import ButtonAbsen from '../ButtonAbsen';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import Position from './pages/Position';
import Product from './component/Product';

// ini adalah fungsional component
const App = () => {
  const [isShow, setIsShow] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
  }, []);

  return (
    <View>
      <ScrollView>
        {/* <MateriFlexbox />
         <Clock />
         <ButtonAbsen /> 
        <SampleComponent />*/}
        {/* <StylingComponent /> */}
        {/* <Position /> */}
        {/*<PropsDinamis />
        <StateDinamis />*/}
        <Communication />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#red',
  },
});

export default App;
