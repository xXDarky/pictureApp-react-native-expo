import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";


export default function Display({route, navigation}) {
    const { imgUri} = route.params;
    
    return(
        <View style={styles.container}>
         <LinearGradient
                colors={['rgba(0,0,0,0.8)', '#666']}
                style={styles.background}
         />
            <Image
                source={{ uri: imgUri}}
                style={styles.thumbnail}
                
             />
      </View>


        
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        padding: 15,
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    container:{
        flex: 1,
        //backgroundColor: '#1b1c1b',
     },
     background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
  
})

