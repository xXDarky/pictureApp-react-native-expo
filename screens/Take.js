import React, { useState, useEffect,Components, Fragment, useRef } from 'react';
import {TouchableOpacity,StyleSheet, Text, View, Dimensions} from 'react-native'
import {  Avatar, Card, Paragraph } from 'react-native-paper';
import { Camera } from 'expo-camera';

import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components/native";




export default function Take({route, navigation}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [previewVisible, setPreviewVisible] = useState(false)
    const [capturedImage, setCapturedImage] = useState(null)
    const camera = useRef(null)

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
 
    let __takePicture = async () => {
        const photo = await camera.current.takePictureAsync()
        setPreviewVisible(true)
        setCapturedImage(photo.uri)
        if (photo){
            const pause = await camera.current.pausePreview();
        }
        
    }
      let __resumePreview = async () => {
        const resume = await camera.current.resumePreview();
      }
    return(
        <View style={styles.container}> 
            <LinearGradient
                colors={['rgba(23,23,23,1) 16%', 'rgba(0,0,0,1) 67%', 'rgba(69,70,70,1) 100%']}
                style={styles.background}
            />
            <Wrapper>
                <ButtonWrapper style={styles.button}>
                    <Fragment>
                     <Button  title="Clear" onPress={__resumePreview}/>
                    </Fragment>
                </ButtonWrapper>
            </Wrapper>
                <Camera 
                    ref={camera}
                    style={styles.camera} type={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                            }}>
                        </TouchableOpacity>
                    </View>
                </Camera>
            <Wrapper>      
                <ButtonWrapper style={styles.buttonWrapper}>
                    <Fragment>
                        <Button  onPress={__takePicture} title="Take Picture"/>
                    </Fragment>
                </ButtonWrapper>
            </Wrapper>
            <Wrapper> 
                <ButtonWrapper style={styles.buttonWrapper2}>
                    <Fragment>
                    
                        <Button title='flip camera' onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.front
                                        ? Camera.Constants.Type.back
                                        : Camera.Constants.Type.front
                                    );
                        }} />
                    </Fragment>
                </ButtonWrapper>
            </Wrapper>
            <Wrapper>
                <ButtonWrapper style={styles.buttonWrapper3}>
                     <Fragment>
                        <Button title='Next' onPress={() => {
                            navigation.navigate('display', {
                            imgUri: capturedImage           
                        });}}/>
                    </Fragment>
                </ButtonWrapper>
            </Wrapper>     
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        
    },
    camera: {
        width: 300,
        height: 500,
        alignSelf: 'center'   
    },
    button: {
        position: 'relative',
        alignSelf: 'flex-end',   
    },
    buttonContainer: {
        
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
     buttonWrapper:{
        position: 'absolute',
        alignSelf: 'flex-end',
        top: 38
     },
     buttonWrapper2:{    
        position: 'absolute',
        alignSelf: 'flex-start',  
     },
     buttonWrapper3:{ 
        top:10  
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
  margin-top: 0px;
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
display:flex;
flex-direction: column;
 width:150px;
 background-color:${props => (props.transparent ? "transparent" : "#f3f8ff")};
 padding:15px;
 margin-left: 15px;
 margin-right: 15px;
 
border:${props => (props.transparent ? "1px solid #f3f8ff " : 0)}
 justify-content:center;
 margin-bottom:7px;
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