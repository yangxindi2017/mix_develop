//引导页

import React, { Component } from 'react'
import { Text, View, StyleSheet,Image, AsyncStorage, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';

export default class Flash extends Component {
    start=()=>{
        AsyncStorage.setItem('isFirst','true',()=>{
            this.props.afterInstall();
        });
    }
    render() {
        return (
            <Swiper autoplay={false} activeDotColor='yellow' dotColor='white' >
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/ai.jpg')}/>
                    
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/bg.jpg')}/>
                </View>
                <View style={styles.slide1}>
                    <Image style={styles.img} source={require('../../assets/wangzi.jpg')}/>
                    <TouchableOpacity onPress={this.start} style={styles.start}>
                        <Text style={styles.txt}>立即体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
   
    img:{
        width: '100%',
        height: '100%'
    },
    slide1: {
      flex: 1,
      height: '100%',
      alignItems: 'center',

    },
    start: {
      bottom: 130,
      width: 200,
      height: 40,
      textAlignVertical: 'center',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor: '#ccc',
      borderRadius: 10,
    },
    txt:{
        color:'#085df8',
        fontSize:18,
        fontWeight:'bold'
    }
})