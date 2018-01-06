import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TextInput, Button,KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import Logo from '../img/logo_1.png';
import axios from 'axios';
import validateInput from '../validators/login_validator';
import {connect} from 'react-redux';
import { userLogin, logout } from '../actions/auth_actions';
import dismissKeyboard from 'react-native-dismiss-keyboard';
import { Font } from 'expo';


class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    username:'',
    password:'',
    errors:'',
    isLoading:false,
    fontLoaded: false,
  }
}

showId(){
  console.log(this.props.auth.user.id);
}
async componentDidMount(){
  await Font.loadAsync({
    'quicksand-bold': require('../fonts/Quicksand-Bold.ttf'),
    'quicksand-regular': require('../fonts/Quicksand-Regular.ttf'),
    'quicksand-medium': require('../fonts/Quicksand-Medium.ttf'),
    'quicksand-light': require('../fonts/Quicksand-Light.ttf'),
    });

    this.setState({ fontLoaded: true });

  console.log(this.props.auth.user.id);
  if(this.props.auth.user.id !== undefined){
    this.props.navigation.navigate('MainStack');
    //console.log('hello World');
  }else{

  }
}
isValid(){
  const { errors, isValid } = validateInput(this.state);
  if(!isValid){
    this.setState({
      errors : errors
    })
  }
  return isValid;
}
onChange(e){
  this.setState({
    [e.target.name] : e.target.value
  })
}
onSubmit(e){
  this.props.logout();
  dismissKeyboard();
  if(this.isValid()){
    var data = this.state;
    var that = this;

    e.preventDefault();
     this.setState({errors: {}, isLoading: true});
    this.props.userLogin(this.state).then(
      (res) => {
        this.props.navigation.navigate('MainStack');
        this.setState({isLoading:false})
      },

      (err) => {

        if(err.data == undefined){
          return this.setState({errors: err.response.data.errors, isLoading: false});
        }else{
          return this.setState({errors: err.data.errors, isLoading: false});
        }

      }
      );
  }
}
  render() {
    const {username, password, errors, isLoading} = this.state;
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View pointerEvents={this.state.isLoading ? "auto" : "none" } style={this.state.isLoading ? [styles.loadingBox,styles.visable] : styles.loadingBox }>
      <Image style={styles.loadingGif} source={require('../img/loading.gif')}></Image>
    </View>
      <View style={styles.loginBox}>
      <Image style={styles.image} source={require('../img/logo_1.png')} />
      <View style={styles.inputItem}>
        <TextInput

        style={styles.inputInput}
        underlineColorAndroid="transparent"
        placeholder="Username"
        onChangeText={(text) => this.setState({username:text})}
        value={this.state.username}
        />
      </View>
      <View style={styles.inputItem}>
        <TextInput

        style={styles.inputInput}
        underlineColorAndroid="transparent"
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => this.setState({password:text})}
        value={this.state.password}
        />
      </View>
      <TouchableHighlight underlayColor="#163f53" style={styles.loginBtn} onPress={this.onSubmit.bind(this)}>
        {this.state.fontLoaded ? (<Text style={styles.loginBtnText}>LOGIN</Text>) : <Text></Text> }
      </TouchableHighlight>

      {errors.form && <View style={styles.alertContainer}><Text  style={styles.alertMessage}>{errors.form}</Text></View>}
      </View>
      </KeyboardAvoidingView>
    );
  }

}
var darkColor = '#1d4a5f';
var lightColor = '#45b5ba';
const styles = StyleSheet.create({

  loadingBox:{
    flex:1,
    width:'100%',
    position:'absolute',
    zIndex:10,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f8f8f8',
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
  inputItem:{
    width:'80%',
    marginTop:10,
  },
  alertContainer:{
    backgroundColor:'#f8d7da',
    borderColor:'#f5c6cb',
    width:'80%',
    marginTop:15,
    borderRadius: 3,

  },
  alertMessage:{
    padding:15,
  	color:'#721c24',
  	fontSize: 12,
    textAlign:'center'
  },
  loginBtn:{
    backgroundColor:darkColor,
    padding:15,
    width:'80%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:3,
    marginTop:15
  },
  loginBtnText:{
    color:'#fff',
    fontSize:15,
    letterSpacing:2,
    fontFamily:'quicksand-medium'
  },
  image: {
    width: '80%',
    height: 60,
    resizeMode: 'contain',
    marginBottom:15
  },
  inputInput:{
    padding:10,
    borderWidth:1,
    borderColor:'#eaeaea',
    backgroundColor:'#fff',
    borderRadius:3,
    color:darkColor
  },
  loginBox:{
    width:'100%',
    height:'100%',
    display:'flex',
    backgroundColor:'#f8f8f8',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
  }
})

function mapStateToProps(state){
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, {userLogin, logout})(Login);
