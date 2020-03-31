import React, { Component } from 'react'
import {  
    View,
    Text,
    Dimensions,
    StatusBar,
    ScrollView,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
    
} from "react-native";
import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
const {width,height} = Dimensions.get('window');
const s = width/640;

export default class Serve extends Component {
    render() {
        return (
            <View>
                <StatusBar hidden={false} translucent={false} backgroundColor="#ccc"/>
                <ScrollView>
                    {/* 头部搜索框 */}
                    <View style={{backgroundColor:'#f23030',height:80*s,flexDirection:'row'}}>
                        <View style={styles.search}>
                            <Icon 
                                name="search"
                                color="white"
                                style={{marginRight:5}}
                            />
                            <TextInput
                                placeholder="请输入您要搜索的关键字"
                                style={{fontWeight:'100', paddingBottom:5,paddingTop:8}}
                                placeholderTextColor='#fff'
                                
                            />
                        </View>
                        <TouchableOpacity>
                            <Icon name="shopping-cart"style={{color:'white',marginTop:17*s}}/>
                        </TouchableOpacity>
                    </View>

                    {/* 轮播图 */}
                    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} activeDotColor='red' dotColor='white' >
                        <View style={styles.slide1}>
                            <Image style={{width:width,height:270*s}} source={require('../../assets/sale0.jpg')}/>
                        </View>
                        <View style={styles.slide2}>
                            <Image style={{width:width,height:270*s}} source={require('../../assets/sale.jpg')}/>

                        </View>
                        <View style={styles.slide3}>
                            <Image style={{width:width,height:270*s}} source={require('../../assets/sale1.jpg')}/>
                        </View>
                    </Swiper>
                    
                    {/* 服务 */}
                    <View style={{borderTopWidth:10,borderTopColor:'#f5f5f5'}}>
                        <View style={styles.serve}>
                            <Image 
                                style={styles.image_s}
                                source={require('../../assets/images/serve.png')}
                            />
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text style={{fontSize:22*s,paddingRight:220*s}}>居家维修保养</Text>
                                <Icon  
                                    style={{
                                    position:'absolute',
                                    left:300}} 
                                    name='right'
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serve}>
                            <Image 
                                style={styles.image_s}
                                source={require('../../assets/images/serve1.png')}
                            />
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text style={{fontSize:22*s,paddingRight:220*s}}>住宿优惠</Text>
                                <Icon  
                                    style={{
                                    position:'absolute',
                                    left:300}} 
                                    name='right'
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serve}>
                            <Image 
                                style={styles.image_s}
                                source={require('../../assets/images/serve2.png')}
                            />
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text style={{fontSize:22*s,paddingRight:220*s}}>出行接送</Text>
                                <Icon  
                                    style={{
                                    position:'absolute',
                                    left:300}} 
                                    name='right'
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.serve}>
                            <Image 
                                style={styles.image_s}
                                source={require('../../assets/images/serve3.png')}
                            />
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text style={{fontSize:22*s,paddingRight:220*s}}>E族活动</Text>
                                <Icon  
                                    style={{
                                    position:'absolute',
                                    left:300}} 
                                    name='right'
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bottom}>
                            <TouchableOpacity style={styles.publish}>
                                <Text style={{color:'#fff',fontSize:22*s}}>发布需求</Text>
                            </TouchableOpacity>
                            <Text style={{fontSize:16*s,color:'#7b7979'}}>©E族之家 版权所有</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles =StyleSheet.create({
    search:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:50*s,
        paddingLeft:24*s,
        width:520*s,
        backgroundColor:'#fbb8b8',
        height:50*s,
        marginLeft:20*s,
        marginRight:20*s,
        marginTop:15*s
    },
    wrapper: {
        height:270*s,
       
    },
    slide1: {
        justifyContent: 'center',
        alignItems: 'center',
        height:270*s
    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        height:270*s
    },
    slide3: {
        justifyContent: 'center',
        alignItems: 'center',
        height:275*s
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    serve:{
        flexDirection:'row',
        height:150*s,
        borderBottomWidth:10*s,
        borderBottomColor:'#f5f5f5',
        backgroundColor:'#fff',
        paddingLeft:20*s,
        alignItems:'center'
    },
    image_s:{
        width:100*s,
        height:100*s,
        marginRight:50*s
    },
    bottom:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:50*s
    },
    publish:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f23030',
        borderRadius:5,
        width:540*s,
        height:70*s,
        marginBottom:60*s
    }
})