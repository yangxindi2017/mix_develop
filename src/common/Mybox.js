import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressBarAndroid,
    Modal,
    StyleSheet
} from 'react-native';

StyleSheet.create({
    loadingBox: { // Loading居中
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    }
});
export default class Mybox extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {

        return(
            <Modal
                // transparent = {true}
                onRequestClose={()=> this.onRequestClose()}
            >
                <View style={styles.loadingBox}>
                    <ProgressBarAndroid styleAttr='Inverse' color='#FF4500' />
                </View>
            </Modal>
        );
    }

}