import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
        source={{
          uri: props.gambar,
        }}
      />
      <Text style={{maxWidth: 50}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis Dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Ilham Pambudi"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
          <Story
            judul="Youtube"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
          <Story
            judul="Instagram"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
          <Story
            judul="Facebook"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
          <Story
            judul="Linkedin"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
          <Story
            judul="Linkedin"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
          <Story
            judul="Linkedin"
            gambar="https://instagram.fcgk33-1.fna.fbcdn.net/v/t51.2885-15/301862745_5263405210433670_8627448351470179891_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fcgk33-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=f5-xhS04bM8AX9IId1V&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MjkxNjI5MTEzMDA5ODY0NzA3OA%3D%3D.2-ccb7-5&oh=00_AfB5zBlqir1NRKNOXNoBCcrQxd422H9B8yDIuFbtvoD60w&oe=648C6F16&_nc_sid=640168"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;
