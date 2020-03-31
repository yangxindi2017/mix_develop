import React,{useEffect, useState} from 'react';
import {StyleSheet,View,BackHandler,ToastAndroid, AsyncStorage} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import {Router,Scene,Tabs, Lightbox, Overlay, Modal, Actions} from 'react-native-router-flux';
import {Icon} from '@ant-design/react-native';
import Home from './src/home/Serves';
import Goods from './src/goods/List';
import Userinfor from './src/userinfor/My';
import Login from './src/common/Login';
import Flash from './src/common/Flash';
import Register from './src/common/Register';
import Publish from './src/userinfor/Publish';
import Mybox from './components/Mybox';

/**
 * 只要是以后还需要跳转到的页面，都放到Router中
 * 其他不需要跳转到的，可以放到Router外面
 */
console.disableYellowBox = true;
const styles = StyleSheet.create({

});

const App =() =>  {
  let now =0;

  //初始化，是否显示引导及登录页面
    let [isLogin,setLogin] =useState(false);
    let [isFirst,setFirst] =useState(true);

      let init = ()=>{
        AsyncStorage.getItem('isFirst')
        .then(res=>{
          if(res){
            setFirst(false);
          }
        })
        // AsyncStorage.removeItem('user')
        AsyncStorage.getItem('user')
        .then(res=>{
          let user = JSON.parse(res)
          // console.log('app',user)
          if(!user){
            SplashScreen.hide();
          }
          if(user&&user.token){
            setLogin(true);
            SplashScreen.hide();
          }
        })
      }
    
    useEffect(()=>{
      init();
    },[])

    //通过事件调子组件的属性
    let afterInstall = ()=>{
      setFirst(false)
      // console.log(isFirst);
    }
    if(isFirst){
      return<View style={{flex:1}}>
              <Flash afterInstall={afterInstall}/>
            </View>
    }
  
  return (
    <Router
      backAndroidHandler={()=>{
        if(Actions.currentScene == 'home' || Actions.currentScene == 'login'){
          if(new Date().getTime()-now<2000){
            BackHandler.exitApp();
          }else{
            ToastAndroid.show('确定要退出吗',100);
            now = new Date().getTime();
            return true;
          }
        }else{
          Actions.pop();
          return true;
        }
      }}
    >
      <Overlay>
      <Modal key ="modal" hideNavBar>
        <Lightbox key="lightbox">
            <Scene key="root">
              <Tabs key='tabbar'
                  hideNavBar
                  activeTintColor="black"
                  inactiveTintColor="#7b7979"
                  tabBarStyle={{backgroundColor:'#ccc'}}
              >
                  {/* 首页 */}
               {/* 首页 */}
               <Scene key='homePage'
                hideNavBar
                icon={
                  ({focused})=>
                      <Icon 
                          color={focused?'#f23030':'#7b7979'}
                          name="home"       
                      />
                  }
                    title='首页'>
                    <Scene key='home' component={Home}/>
                </Scene>

                  {/* 商品分类*/}
                  <Scene key='goodspage'
                    hideNavBar
                    hideDrawerButton
                    icon={
                      ({focused})=>
                          <Icon 
                              color={focused?'#f23030':'#7b7979'}
                              name="appstore"       
                          />
                      }
                    title='商品分类'>
                    <Scene key='goods'  component={Goods}/>
                  </Scene>

                  {/* 个人中心 */}
                  <Scene key='userpage'
                    hideNavBar
                    title='个人中心'
                    hideDrawerButton
                    icon={
                      ({focused})=>
                          <Icon color={focused?'#f23030':'#7b7979'}
                              name="crown"       
                          />
                      }
                    >
                    <Scene key='userinfor' component={Userinfor}/>
                  </Scene>
              </Tabs>
              <Scene key="publish" 
                title="我的发布"
                component={Publish}
                backButtonTintColor='white'
                titleStyle={{flex:1,textAlign:'center',color:'white'}}
                navigationBarStyle ={{ backgroundColor:'#f23030'}}
                renderRightButton = {<Icon name="ellipsis"/>}
                backButtonTextStyle={{color:'white'}}
              />
            </Scene> 
            <Scene key='light' component={Mybox}/>
          </Lightbox>
          <Scene initial={!isLogin} key="login" component={Login}/>
          <Scene key="register" component={Register}/>
      
      </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
               