import React, { Component } from 'react';
import {View,
  Text,
  TextInput,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ToastAndroid,
  ActivityIndicator
  } from 'react-native';
import {Actions,BackHandler} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import {myFetch} from '../utils'

export default class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'',
      pwd:'',
      isLoad:false
    }
  }
  componentDidMount(){
    AsyncStorage.getItem('user')
    .then(res=>{
      let user = JSON.parse(res)
      console.log('login',user)
    })
  }
  
  userhandle = (text)=>{
      this.setState({username:text})
  }

  pwdhandle = (text)=>{
    this.setState({
      pwd:text
    })
  }

  login =()=>{
    myFetch.post('/login',{
      username:this.state.username,
      pwd:this.state.pwd
    })
    .then(res=>{
      ToastAndroid.showWithGravity(res.data.data,2000,ToastAndroid.CENTER)
      if(res.data.code === 0 ){
        AsyncStorage.setItem('user',JSON.stringify(res.data))
        Actions.homePage()
      }
    })
  }

    render() {
        return (
          <ImageBackground style={{flex:1}}
            source={require('../../assets/bg.jpg')}>
          <View style={{flex:1,justifyContent:'center'}}>
              <View style={{ alignItems:'center'}}> 
                  <View
                      style={styles.user}>
                      <Icon name='user' style={{color:'white'}}/>
                      <TextInput 
                        onChangeText={this.userhandle} 
                        placeholder='请输入用户名'
                      />
                  </View>
                  <View
                      style={styles.user}>
                      <Icon name='lock' style={{color:'white'}}/>
                      <TextInput
                        onChangeText={this.pwdhandle}
                        secureTextEntry
                        placeholder='请输入密码'/>
                  </View>
                  <View style={styles.btn}>
                    <TouchableOpacity 
                      style={styles.login}
                      onPress={Actions.register}
                    >
                      <Text style={styles.txt}>注册</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={[styles.login,{marginLeft:30}]}
                      onPress={this.login}
                    >
                      <Text style={styles.txt}>登录</Text>
                    </TouchableOpacity>
                  </View>

              </View>
              
            </View> 
          </ImageBackground>
        )
        
    }
}


const styles = StyleSheet.create({
  btn:{
    flexDirection:'row'
  },
  user:{
    width:'70%',
    marginRight:10,
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20
  },
  login:{
    width:'30%',
    height:40,
    marginTop:100,
    alignItems:"center",
    justifyContent:'center',//内容居中
    borderColor:'#ccc',
    borderRadius:10,
    backgroundColor: '#ccc',
  },
  txt:{
    color:'#085df8',
    fontSize:18,
  },
  bg:{
    flex:1,
    justifyContent:'center'
  },
  tex:{
    color:'blue',
  },
  size:{
    fontSize:20
  },
  search:{
    backgroundColor:'#ccc',
    borderRadius:20,
    width:200,
    height:40,
    flexDirection:'row',
    alignItems:'center',
    marginRight:15
    
  },
  img:{
    width:20,
    height:20,
    marginLeft:15,
    marginRight:10,
  }
});