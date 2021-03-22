import React from 'react'
import { StyleSheet, Text, View, PermissionsAndroid,
    Image,
    Platform, AppState} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, FAB } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";



export default function Display({route, navigation}) {
    const { imgUri} = route.params;
    
    return(
        <View style={styles.container}>
         <LinearGradient
                colors={['rgba(23,23,23,1) 16%', 'rgba(0,0,0,1) 67%', 'rgba(69,70,70,1) 100%']}
                style={styles.background}
         />
            <Image
                source={{ uri: imgUri}}
                style={styles.thumbnail}
                
             />

            <FAB
                style={styles.fab}
                small
                icon="arrow-collapse-down"
                
            />
      </View>


        
    )
}

const styles = StyleSheet.create({
    thumbnail: {
        padding: 15,
        width: '90%',
        height: '90%',
        resizeMode: "contain",
        position: 'relative',
        top: 20,
        alignSelf:'center'
    },
    container:{
        flex: 1,
        //backgroundColor: '#1b1c1b',
        //alignSelf: 'center',
     },
     background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#666'
      },
  
})

