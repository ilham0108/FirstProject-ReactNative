import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ProfilePicture from '../../assets/images/profile.jpg';

// class Flexbox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> constructor');
//   }

//   componentDidMount() {
//     console.log('==> componentDidMount');
//   }

//   componentDidUpdate() {
//     console.log('==> componentDidUpdate');
//   }

//render() {
//console.log('==> render');
//return (
// <View>
//   <View
//     style={{
//       flexDirection: 'row',
//       backgroundColor: '#c8d6e5',
//       alignItems: 'flex-start',
//       justifyContent: 'space-between',
//     }}>
//     <View style={{backgroundColor: '#1abc9c', width: 50, height: 50}} />
//     <View style={{backgroundColor: '#3498db', width: 50, height: 50}} />
//     <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
//     <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
//   </View>
//   <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//     <Text>Beranda</Text>
//     <Text>Video</Text>
//     <Text>Playlist</Text>
//     <Text>Komunitas</Text>
//     <Text>Chanel</Text>
//     <Text>Tentang</Text>
//   </View>
//   <View style={{flexDirection: 'row', alignItems: 'center'}}>
//     <Image
//       source={ProfilePicture}
//       style={{
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         marginTop: 20,
//         marginRight: 14,
//       }}
//     />
//     <View>
//       <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//         Ilham Pambudi
//       </Text>
//       <Text>200 ribu subscriber</Text>
//     </View>
//   </View>
// </View>
//);
// }
//}

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);
  return (
    <View>
      <Text style={styles.text}>Flexbox</Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#c8d6e5',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: '#1abc9c', width: 50, height: 50}} />
        <View style={{backgroundColor: '#3498db', width: 50, height: 50}} />
        <View style={{backgroundColor: '#f1c40f', width: 50, height: 50}} />
        <View style={{backgroundColor: '#e74c3c', width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Chanel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={ProfilePicture}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginTop: 20,
            marginRight: 14,
          }}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Ilham Pambudi</Text>
          <Text>{subscriber} ribu subscriber</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
  },
});

export default FlexBox;
