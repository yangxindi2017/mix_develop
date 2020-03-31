import React, { Component } from 'react'
import { Text, View ,BackHandler,ToastAndroid} from 'react-native'


const Index =() =>  {
    let now =0;
    BackHandler.addEventListener('back',()=>{
        console.log('back')
        if(new Date().getTime()-now<2000){
        BackHandler.exitApp();
        }else{
        ToastAndroid.show('确定要退出吗',100)
        now = new Date().getTime();
        }
        return true;
    })
    return(
        <Text>home index</Text>

    )
}
export default Index;