
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { StackRouter } from 'react-navigation'
import Landing from '../screens/Landing'
import Display from '../screens/Display'
import Take from '../screens/Take'
import {createStackNavigator} from '@react-navigation/stack'


export default function NavigationStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
             name= 'landing'
             component={Landing}
             options= {{title: "Landing Page"}}
            />
            <Stack.Screen
             name= 'display'
             component={Display}
             options= {{title: "Display Page"}}
            />
            <Stack.Screen
             name= 'take'
             component={Take}
             options= {{title: "Take Page"}}
            />
        </Stack.Navigator>
       
    )
}

const style = StyleSheet.create({
    
})