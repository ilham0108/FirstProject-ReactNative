import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#2ed573'}} />
      <Text>React Native App</Text>
      <Home />
      <Photo />
      <TextInput style={{borderWidth: 1, marginTop: 5}} />

      <BoxGreen />
      <Profile />
    </View>
  );
};

const Home = () => {
  return <Text> Home Screen</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://picsum.photos/100/100'}}
      style={{width: 100, height: 100}}
    />
  );
};

// ini adalah class component
class BoxGreen extends Component {
  render() {
    return <Text>Class Component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://picsum.photos/200/300'}}
          style={{width: 100, height: 100}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>
          Ini Gambar Dari Class Component
        </Text>
      </View>
    );
  }
}

export default SampleComponent;
