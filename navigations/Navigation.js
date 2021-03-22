import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { StackRouter } from 'react-navigation'


export default function Navigation() {
    return(
        <NavigationContainer>
            <NavigationStack></NavigationStack>
        </NavigationContainer>
    )
}

const style = StyleSheet.create({
    
})