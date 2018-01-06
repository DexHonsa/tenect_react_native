import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator, NavigationActions} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import SocialConnections from '../screens/social_connections';
import UserProfile from '../screens/user_profile';
import Friends from '../screens/friends';
import Notifications from '../screens/notifications';
import MarketPlace from '../screens/marketplace';
import BestOf from '../screens/best_of';
import FoodDelivery from '../screens/food_delivery';
import TravelDestinations from '../screens/travel_destinations';

const backAction = NavigationActions.back({})

export const Stack = TabNavigator({
  Login: {
    screen: Login,
    title: 'Login',
    navigationOptions: {
      title: 'Login'
    }
  },
  Main: {
    screen: StackNavigator({
      MainStack: {
        screen: DrawerNavigator({
          Dashboard: {

            screen: StackNavigator({
              DashboardInner: {
                screen: Dashboard
              }
            }, {
              navigationOptions: ({navigation}) => ({
                title: 'Dashboard',
                headerStyle: {
                  backgroundColor: '#1d4a5f'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="bars" size={18} containerStyle={{
                    marginLeft: 15,
                    padding: 10,
                    borderRadius: 3
                  }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.navigate('DrawerOpen')}>Menu</Icon>,
                headerRight: <Icon name="user" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.navigate('UserStack')}></Icon>
              })
            })
          },
          SocialConnections: {
            screen: StackNavigator({
              SocialConnectionsInner: {
                screen: SocialConnections
              }
            }, {
              navigationOptions: ({navigation}) => ({
                title: 'Social Connections',
                headerStyle: {
                  backgroundColor: '#1d4a5f'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="bars" size={18} containerStyle={{
                    marginLeft: 15,
                    padding: 10,
                    borderRadius: 3
                  }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.navigate('DrawerOpen')}>Menu</Icon>,
                headerRight: <Icon name="user" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.navigate('UserStack')}></Icon>
              })
            })
          },
          MarketPlace: {
            screen: StackNavigator({
              MarketPlaceInner: {
                screen: MarketPlace
              }
            }, {
              navigationOptions: ({navigation}) => ({
                title: 'Market Place',
                headerStyle: {
                  backgroundColor: '#1d4a5f'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="bars" size={18} containerStyle={{
                    marginLeft: 15,
                    padding: 10,
                    borderRadius: 3
                  }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.navigate('DrawerOpen')}>Menu</Icon>,
                headerRight: <Icon name="user" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.navigate('UserStack')}></Icon>
              })
            })
          }
        }, {

          drawerPosition: 'left',
          drawerBackgroundColor: '#255368',
          contentOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#45b5ba'

          }
        })
      },
      UserStack: {
        screen: TabNavigator({
          Profile: {

            screen: StackNavigator({
              ProfileInner: {
                screen: UserProfile
              }
            }, {

              navigationOptions: ({navigation}) => ({
                title: 'Profile',
                headerStyle: {
                  backgroundColor: '#1d4a5f'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="angle-left" size={28} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.dispatch(backAction)}></Icon>
              })
            }),

            navigationOptions: ({navigation}) => ({
              title: 'Profile',
              tabBarIcon: ({tintColor}) => (<Icon name="user" type="font-awesome" color={tintColor} size={20}/>),

              headerStyle: {
                backgroundColor: '#1d4a5f'
              }
            })
          },
          Friends: {

            screen: StackNavigator({
              FriendsInner: {
                screen: Friends
              }
            }, {

              navigationOptions: ({navigation}) => ({
                title: 'Friends',
                headerStyle: {
                  backgroundColor: '#1d4a5f'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="angle-left" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.dispatch(backAction)}></Icon>
              })
            }),

            navigationOptions: ({navigation}) => ({
              tabBarIcon: ({tintColor}) => (<Icon name="users" color={tintColor} type="font-awesome" size={20}/>),
              tabBarOptions: {
                activeTintColor: '#103b4e'
              },
              title: 'Friends',
              headerStyle: {
                backgroundColor: '#1d4a5f'
              }
            })
          },
          Notifications: {

            screen: StackNavigator({
              NotificationsInner: {
                screen: Notifications
              }
            }, {

              navigationOptions: ({navigation}) => ({
                title: 'Notifications',
                headerStyle: {
                  backgroundColor: '#1d4a5f'
                },
                headerTintColor: 'white',
                headerLeft: <Icon name="angle-left" size={18} containerStyle={{
                      marginLeft: 15,
                      padding: 10,
                      borderRadius: 3
                    }} color="#fff" underlayColor="#103b4e" type="font-awesome" onPress={() => navigation.dispatch(backAction)}></Icon>
              })
            }),

            navigationOptions: ({navigation}) => ({
              tabBarIcon: ({tintColor}) => (<Icon name="globe" color={tintColor} type="font-awesome" size={25}/>),
              tabBarOptions: {
                activeTintColor: '#103b4e'
              },
              title: 'Notifications',
              headerStyle: {
                backgroundColor: '#1d4a5f'
              }
            })
          }

        }, {

          headerMode: 'none',
          tabBarPosition: 'bottom',
          tabBarOptions: {
            showIcon: true,
            activeTintColor: '#33b2b9'
          }
        })
      }
    }, {
      headerMode: 'none',
      mode: 'modal',

      navigationOptions: ({navigation}) => ({})
    })

  }

}, {
  navigationOptions: {
    tabBarVisible:false,
    title: 'Main'
  },



});

export const NewStack = StackNavigator({
  Tabs: {
    screen: TabNavigator({
      Login: {
        screen: Login
      },
      Main: {
        screen: DrawerNavigator({
          Dashboard: {
            screen: Dashboard
          },
          SocialConnections: {
            screen: SocialConnections
          }
        })
      }
    })
  }
}, {headerMode: 'none'})
