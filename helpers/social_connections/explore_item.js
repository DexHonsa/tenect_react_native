import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import AppText from '../app_text';


class ExploreItem extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image indicator={Progress.Circle} indicatorProps={{size:50}} style={styles.exploreImg} source={{ uri: this.props.img }}/>
        <View style={{padding:15}}>
        <AppText style={styles.header} weight="bold">{this.props.title}</AppText>
        <AppText style={styles.desc} weight="regular">Light activity yoga classes for all levels of people.  Beginners are very welcome and are encouraged to participate!</AppText>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.14,
    margin:10,
    overflow:'hidden',
    borderColor:'#dfdfdf',
    borderWidth:1,
  },
  exploreImg:{
    width:'100%',
    padding:5,
    height:200,
  },
  header:{
    fontSize:25,
    marginBottom:15
  },
  desc:{
    fontSize:15,
  }
})
export default ExploreItem;
