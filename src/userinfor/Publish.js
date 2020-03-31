import React, { Component } from 'react'
import { Text, View ,StyleSheet, TouchableOpacity,ToastAndroid,Dimensions} from 'react-native'

const {width,scale}  = Dimensions.get('window');
console.log(width)
const s =width/480;

const styles = StyleSheet.create({
    content:{
        height:'100%',
        flex:1,
        backgroundColor:'white',
        paddingLeft:10,
        paddingRight:10,
    },
    tex:{
        color:'grey',
        width:200*s,
        height:30*s,
        margin:5*s,
        fontSize:15
    },
    date:{
        color:'grey',
        margin:5*s,
        fontSize:15,
    },
    page:{
        position:'absolute',
        bottom:15*s,
        left:5*s,
        flexDirection:'row'
    },
    add:{
        width:150*s,
        height:40*s,
        borderRadius:20*s,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f23030',
    },
  
})

export default class Publish extends Component {
    constructor(){
        super();
        this.state={
            arr:[],
            replay:[],
            page:1
        }

    }
    componentDidMount(){
      
        fetch('https://cnodejs.org/api/v1/topics?limit=15')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                arr:res.data
            })
        })        
      
    }
    add = ()=>{
        this.setState({
            page:this.state.page+1
        },()=>{
            fetch('https://cnodejs.org/api/v1/topics?limit=15'+'&page='+this.state.page)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    arr:res.data
                })
            })
        })

    }
    substr = ()=>{
        if(this.state.page === 1){
            ToastAndroid.show("已经是第一页了哦!", ToastAndroid.SHORT);
        }else{
            this.setState({
                page:this.state.page-1
            },()=>{
                fetch('https://cnodejs.org/api/v1/topics?limit=15'+'&page='+this.state.page)
                .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        arr:res.data
                    })
                })
            })
        }
    }

    render() {
        return (
            <View style={styles.content}>
                <View>
                    {
                        this.state.arr.map((item,idx)=>{
                            let ran = Math.random();
                            return(

                                <View style={{marginTop:5,flexDirection:'row'}} key={item.idx}>
                                    <Text style={styles.tex} numberOfLines={1} ellipsizeMode={'tail'} key={idx}>{item.title.substr(0, 15) }...</Text>
                                    <Text style={[styles.date,{marginLeft:80*s,marginRight:10*s}]}>{item.create_at.slice(0,10)}</Text>
                                    <Text style ={{color:ran>0.5?'grey':'red',margin:5*s}}>
                                        {
                                            ran>0.5?'已回复':'未回复'
                                        }
                                    </Text>
                                 
                                </View>
                            )
                        })
                      
                        
                    }
                </View>
           
                <View style={styles.page}>
                    <TouchableOpacity style={styles.add} onPress={this.substr}>
                        <Text style={{color:'white'}}>上一页</Text>
                    </TouchableOpacity>
                    <Text style={{paddingTop:10*s,marginLeft:70*s}}>第{this.state.page}页</Text>
                    <TouchableOpacity style={[styles.add,{position:'relative',left:50*s}]} onPress={this.add}>
                        <Text style={{color:'white'}}>下一页</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
