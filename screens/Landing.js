
import 'react-native-gesture-handler';
import React, { useState, useEffect, Component, Fragment } from 'react';
import {Image,StyleSheet, Text, View, TouchableOpacity, Dimensions,
    TouchableHighlight} from 'react-native'
import Take from './Take'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Battery from 'expo-battery';
import styled from "styled-components/native";
import { Video, AVPlaybackStatus } from 'expo-av';
const { width, height } = Dimensions.get("window");
import { LinearGradient } from 'expo-linear-gradient';
import NetInfo from '@react-native-community/netinfo';
import { StatusBar } from 'expo-status-bar';


export default function Landing({navigation}) {
    const video = React.useRef(null);
    let battery;
    const [batteryLevel, setBattery] = React.useState('0');
    const [network, setNet] = React.useState(null);
    
       useEffect(() => {
        
            //__subscribe();
            return () => {
             //   __subscribe();
            }
      })

     
    
 const [selectedImage, setSelectedImage] = React.useState(null);
 

 let openImagePickerAsync = async () => {
 let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
  if (permissionResult.granted === false) {
    alert('Permission to access camera roll is required!');
        return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
        return;
  }

   setSelectedImage({ localUri: pickerResult.uri });
   console.log(pickerResult);
   
    };

    if (selectedImage !== null) {
             return (
               <View style={styles.container}>
                    <LinearGradient
                        colors={['rgba(23,23,23,1) 16%', 'rgba(0,0,0,1) 67%', 'rgba(69,70,70,1) 100%']}
                        style={styles.background}
                    />
                    <Image
                        source={{ uri: selectedImage.localUri }}
                        style={styles.thumbnail}
                    />
                    <Wrapper>
                            <TextDescription style={styles.description} >
                                Use this image?
                            </TextDescription>
                            <ButtonWrapper>
                                <Fragment>
                                    <Button onPress={() => {
                                        navigation.navigate('display', {
                                        imgUri: selectedImage.localUri  
                                        });}} title="Yes" />
                                    <Button onPress={() => navigation.push('landing')} title="No" />
                                </Fragment>
                            </ButtonWrapper>
                        </Wrapper>
                    <StatusBar />
               </View>
             );
          }

        let __subscribe = async () => { 
            const batteryLevel = await Battery.getBatteryLevelAsync();
            let newBattery = JSON.stringify(batteryLevel)
            console.log(newBattery);
            let _subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
                console.log('batteryLevel changed!', batteryLevel);
                batteryLevel = batteryLevel*100
                let newBattery = JSON.stringify(batteryLevel)
                console.log(newBattery);
                setBattery({newBattery})             
            });
                return newBattery;
        }

      
        

        NetInfo.fetch().then(state => {
            console.log('Connection type', state.type);
            console.log('Is connected?', state.isConnected);
            if(state.isConnected == true){
                setNet('Connected')
            }else {
                setNet('Disconnected')
            }
          });
         
      return(
        <View style={{justifyContent: 'center',
            backgroundColor: '#1b1c1b',
            height:'100%',
            width:'100%'}}>
          <Video
                ref={video}
                style={styles.backgroundVideo}
                source={require("./../assets/spatk.mp4")}
                resizeMode="cover"
                isLooping
                muted={true}
                repeat={true}
                shouldPlay
          /> 
          <Wrapper>
            <Logo
                source={require("./../assets/icty.png")}
                resizeMode="contain"
                width={50}
                height={50}
            />
            <Title>Go to camera options app</Title>
            <TextDescription>
                With world-class instructions learning new framework
            </TextDescription>
            <ButtonWrapper>
                <Fragment>
                    <Button onPress={() => navigation.navigate('take')} title="take from camera" />
                    <Button transparent title="Load from gallery" onPress={openImagePickerAsync} />
                </Fragment>
            </ButtonWrapper>
            <Title style={styles.netText}>{network}</Title>
          </Wrapper>  
          <StatusBar style="light" />
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        backgroundColor: '#1b1c1b',
        height:'100%',
        width:'100%'
      },
    backgroundVideo: {
        position: "absolute", 
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        height:'100%'
    },
    thumbnail: {
        width: '50%',
        height: '50%',
        resizeMode: "contain",
        alignSelf: 'center',
        top: 20
    },
    buttonContainer:{
        paddingHorizontal: 8,
        paddingVertical: 6,
        elevation: 6
    },
    container:{
        flex: 1,
        backgroundColor: '#1b1c1b',
     },
     background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      net:{
        position:'absolute',
        width:100,
        height:100
        
      },
      netText:{
          position:'absolute',
          fontSize:10,
      },
      description:{
          position: 'relative',
          top:20
      }

    
})
export const Wrapper = styled.View`
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;
export const Logo = styled.Image`
  max-width: 100px;
  width: 100px;
  height: 100px;
`;
export const TextDescription = styled.Text`
  letter-spacing: 3;
  color: #f4f4f4;
  text-align: center;
  text-transform: uppercase;
`;
export const ButtonWrapper = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
export const Title = styled.Text`
  color: #f4f4f4;
  margin: 50% 0px 20px;
  font-size: 30;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3;
`;
const StyledButton = styled.TouchableHighlight`
 width:250px;
 background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
 padding:15px;
border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
 justify-content:center;
 margin-bottom:20px;
 border-radius:24px
`;
const StyledTitle = styled.Text`
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  letter-spacing: 3;
  color: ${props => (props.transparent ? "#f3f8ff " : "#666")};
`;

export const Button = ({ onPress, color, ...props }) => {
    return (
      <StyledButton onPress={onPress} {...props}>
        <StyledTitle {...props}>{props.title}</StyledTitle>
      </StyledButton>
    );
  };

  