import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, ScrollView} from 'react-native';
import ExploreItem from '../helpers/social_connections/explore_item';
class SocialConnections extends Component {

  render() {
    return (
      <ScrollView>
        <View>
          <ExploreItem img='http://tenect.com/img/yoga.jpg' title="Yoga" />
          <ExploreItem img='http://tenect.com/img/running.jpg' title="Running" />
          <ExploreItem img='http://tenect.com/img/sports.jpg' title="Sports" />
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  dashboardHome:{
    flex:1,
  }
})

export default SocialConnections;
