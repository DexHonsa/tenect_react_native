import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Font} from 'expo';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';


class DashboardPanel extends Component {
  constructor(props){
    super(props);
    this.state ={
      fontLoaded:false,
      isLoading:true,
    }
  }
  async componentDidMount(){
    this.setState({ fontLoaded: false, isLoading:true });
    await Font.loadAsync({
      'quicksand-bold': require('../../fonts/Quicksand-Bold.ttf'),
      'quicksand-regular': require('../../fonts/Quicksand-Regular.ttf'),
      'quicksand-medium': require('../../fonts/Quicksand-Medium.ttf'),
      'quicksand-light': require('../../fonts/Quicksand-Light.ttf'),
      });
      this.setState({ fontLoaded: true, isLoading:false });

  }

  render() {
    var imgStr = '../../img/' + this.props.img;
    return (
      <View style={styles.panel}>

        <Image indicator={Progress.Circle} indicatorProps={{
    size: 80,
    borderWidth: 0,
    color: 'rgba(150, 150, 150, 1)',
    unfilledColor: 'rgba(200, 200, 200, 0.2)'
  }} style={styles.panelImg} source={{uri:this.props.img}} />
        <View style={styles.panelContent}>
        {this.state.fontLoaded ? (<View><Text style={styles.panelHeader}>{this.props.title}</Text>
        <Text style={styles.panelDesc}>An older design pre-dating the Rebel Alliance, these low-altitude, high power ski speeders use a stabilizer strut to keep balance when zipping across alien terrain.</Text></View>) : null }
        </View>
        <View style={styles.panelIcons}>
        <View style={{display:'flex',alignItems:'center',flexDirection:'row', }}>
          {this.state.fontLoaded ? (
            <Text style={{color:'#d0d0d0',fontFamily:'quicksand-medium'}}>25 </Text>
            ):null}
            <Icon name="heart" color="#d0d0d0" type="font-awesome" size={15} />
          </View>
          <View style={{display:'flex',alignItems:'center',flexDirection:'row', }}>
            {this.state.fontLoaded ? (
              <Text style={{color:'#d0d0d0',fontFamily:'quicksand-medium'}}>25 </Text>
              ):null}
              <Icon name="reply" color="#d0d0d0" type="font-awesome" size={15} />
            </View>
            <View style={{display:'flex',alignItems:'center',flexDirection:'row', }}>
              {this.state.fontLoaded ? (
                <Text style={{color:'#d0d0d0',fontFamily:'quicksand-medium'}}>25 </Text>
                ):null}
                <Icon name="retweet" color="#d0d0d0" type="font-awesome" size={15} />
              </View>

        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  loadingBox:{
    width:'100%',
    position:'absolute',
    zIndex:10,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ff9900',
    opacity:0
  },
  loadingGif:{
    width: '60%',
    resizeMode: 'contain',
    flex:1
  },
  visable:{
    opacity:1
  },
  panelIcons:{
    marginTop:15,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:10,
    borderTopColor:'#eaeaea',
    borderTopWidth:1
  },
  panel:{
    margin:10,
    backgroundColor:'#fff',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.14,
  },
  panelContent:{
    padding:10
  },
  panelImg:{
    
    width:'100%',
    height:200
  },
  panelHeader:{
    color:'#000',
    fontSize:20,
    marginBottom:10,
    fontFamily:'quicksand-bold',
  },
  panelDesc:{
    color:'#000',
    fontSize:15,
    fontFamily:'quicksand-regular'
  }
})

export default DashboardPanel;
