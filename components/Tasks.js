import React from "react";
import {View, Text, StyleSheet} from 'react-native';

const Tasks = (props) => {
    return (
        <View style = {styles.items}>
          <View style = {styles.leftItmes}>
          <View style ={styles.square}></View>
        <Text style ={styles.textItem}>{props.text}</Text>
          </View>

        <View style = {styles.circular}></View>

        </View>
    )
}

export default Tasks

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
        
          
    },
    leftItmes:{
       flexDirection: 'row',
       alignItems: 'center',
       flexWrap: 'wrap'

    },
    square: { 
        width: 24,
        height: 24,
        opacity: 0.4,
        backgroundColor: '#FF6347',
        borderRadius: 5,
        marginRight: 15
    },
    textItem: {
        maxWidth: '80%'

    },
    circular: {
        width: 12,
        height: 12,
        borderWidth: 2,
        borderRadius:5,
        // borderColor: '#063971',
        borderColor: 'green',
        
    },

})