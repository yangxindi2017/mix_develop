import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Dimensions,
    Image,
    ScrollView,
    TouchableOpacity,
    AsyncStorage

}from 'react-native';
import {Actions} from 'react-native-router-flux'
import{Icon} from '@ant-design/react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

const {width} = Dimensions.get('window');
const s = width/640;
//照相
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

// AsyncStorage.removeItem('url') 


export default class My extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:require('../../assets/person.png')
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('url')
        .then(res=>{
            if(res === null){
                this.setState({
                    imageUrl:require('../../assets/person.png')
                })
            }else{
                AsyncStorage.getItem('url')
                .then(res=>JSON.parse(res))
                .then((res)=>{
                this.setState({
                    imageUrl: res,
                    });
                })
            }
        })
    }
    takePhoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            let jsonstr = JSON.stringify({uri:image.path});
            AsyncStorage.setItem('url',jsonstr,
            ()=>{console.log('存储成功')}) 

            AsyncStorage.getItem('url')
            .then(res=>JSON.parse(res))
            .then((res)=>{
            this.setState({
                imageUrl: res,
                });
            })
         
          });
    }
    exit=()=>{
        AsyncStorage.removeItem('user');
        Actions.login();
    }

    render() {
        return (
            <View>
                <StatusBar  backgroundColor="#f23030" />
                <ScrollView>

                    <View style={styles.person}> 
                        <TouchableOpacity onPress={()=>{this.takePhoto()}}>
                            <Image style={styles.image} source={this.state.imageUrl}/>
                        </TouchableOpacity>
                            
                        <Text style={{fontSize:19.5,color:'white'}}>BINNU DHILlON</Text>
                    </View>
                    <View style={{backgroundColor:"white"}}>
                    
                    {/* 个人中心 */}
                    <View style={styles.top}>
                        <Icon name="bell"/>
                        <Text  style={{fonSize:'17',marginLeft:10,color:'#4f4e4e'}}>我的个人中心</Text>
                    </View>
                    <View style={[styles.center]}>
                        <View style={{margin:0,paddingTop:15*s}}>
                            <View style={{alignItems:'center',justifyContent:'space-around',flex:1,flexDirection:'row'}}>
                                <TouchableOpacity onPress={()=>Actions.publish()} style={{alignItems:'center'}}>
                                    <Icon name='setting'/>
                                    <Text style={styles.text_s}>账户管理</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  style={{alignItems:'center'}}>
                                    <Icon name='environment' />
                                    <Text style={styles.text_s}>收获地址</Text>
                                </TouchableOpacity>
                                <TouchableOpacity  style={{alignItems:'center'}}>
                                    <Icon name='idcard' />
                                    <Text style={styles.text_s}>我的信息</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{margin:0,paddingTop:15*s}}>
                                <View style={{alignItems:'center',justifyContent:'space-around',flex:1,flexDirection:'row'}}>
                                    <TouchableOpacity  style={{alignItems:'center'}}>
                                        <Icon name='file-text'/>
                                        <Text style={styles.text_s}>我的订单</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={{alignItems:'center'}}>
                                        <Icon name='qrcode' />
                                        <Text style={styles.text_s}>我的二维码</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity  style={{alignItems:'center'}}>
                                        <Icon name='bell' />
                                        <Text style={styles.text_s}>我的积分</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{width:100*s,marginLeft:55*s}}>
                            <TouchableOpacity style={{alignItems:'center'}}>
                                <Icon name="star" />
                                <Text style={[styles.text_s,{marginTop:10*s}]}>我的收藏</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                    {/* E族活动 */}
                    <View style={styles.top}>
                        <Icon name="bell" />
                        <Text  style={{fontSize:17,marginLeft:10,color:'#4f4e4e'}}>E族活动</Text>
                    </View>
                    <View style={{margin:0,paddingTop:15*s}}>
                        <View style={{alignItems:'center',justifyContent:'space-around',flex:1,flexDirection:'row'}}>
                            <TouchableOpacity  style={{alignItems:'center'}}>
                                <Icon name='scissor' />
                                <Text style={styles.text_s}>居家维修保养</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{alignItems:'center'}}>
                                <Icon name='car' />
                                <Text style={styles.text_s}>出行接送</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{alignItems:'center'}}>
                                <Icon name='user' />
                                <Text style={styles.text_s}>我的受赠人</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{margin:0,paddingTop:15*s}}>
                        <View style={{alignItems:'center',justifyContent:'space-around',flex:1,flexDirection:'row'}}>
                            <TouchableOpacity  style={{alignItems:'center'}}>
                                <Icon name='laptop'/>
                                <Text style={styles.text_s}>我的住宿优惠</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  style={{alignItems:'center'}}>
                                <Icon name='environment'/>
                                <Text style={styles.text_s}>我的活动</Text>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={()=>Actions.publish()} style={{alignItems:'center'}}>
                                <Icon name='form'/>
                                <Text style={styles.text_s}>我的发布</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                <TouchableOpacity onPress={this.exit}>
                    <View style={{height:90*s,backgroundColor:'#f23030',alignItems:'center',justifyContent:'center'}}>
                        <Text style={styles.text_foot}>BINNU DHILlON | 退出</Text>
                    </View>
                </TouchableOpacity>
                </View>
                </ScrollView>
                    
            </View>
        )
    }
}
const styles = StyleSheet.create({
    person:{
        height:370*s,
        backgroundColor:'#f23030',
        alignItems:'center'
    },
    image:{
        width:156*s,
        height:156*s,
        marginTop:58*s,
        marginBottom:18*s,
        borderRadius:78*s
    },
    top:{
        alignItems:'center',
        flexDirection:'row',
        height:73*s,
        marginTop:20,
        marginLeft:15*s,
        paddingBottom:20,
        borderBottomWidth:0.5,
        borderBottomColor:'#eeeeee',

    },
    center:{
        borderBottomWidth:10,
        borderBottomColor:'#eeeeee',
    },
    text_s:{
        marginTop:15*s,
        marginBottom:35*s,
        color:'#4f4e4e'
    },
    text_foot:{
        fontSize:13.5,
        color:'white',
        fontWeight:'200'
    }
})