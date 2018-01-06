import React, { Component } from 'react';
import {View, Text, TouchableHighlight, StyleSheet,ScrollView} from 'react-native';

import TopSection from '../components/dashboard/top_section';
import DashboardPanel from '../components/dashboard/dashboard_panel';
class Dashboard extends Component {

  render() {
    return (
      <ScrollView contentContainerstyle={styles.dashboardHome}>
        <TopSection />
        <DashboardPanel title="Star Wars Is Back" img={'http://tenect.com/img/it.jpg'}/>
        <DashboardPanel title="Local Deals" img={'http://tenect.com/img/local-deals.png'}/>

      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  dashboardHome:{
    flex:1,
  }
})

export default Dashboard;
