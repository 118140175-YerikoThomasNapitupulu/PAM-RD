import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { turnOn, turnOff } from './redux/action'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: `${counter}` }}>
            <TouchableOpacity style={{
                backgroundColor: '#dddddd', paddingBottom: 5, paddingTop: 5,
                paddingRight: 15, paddingLeft: 15
            }} onPress={() => dispatch(turnOff(counter))}>
                <Text style={{ fontSize: 20 }}>OFF</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 40, marginLeft: 15, marginRight: 15 }}>{counter}</Text>
            <TouchableOpacity style={{
                backgroundColor: '#dddddd', paddingBottom: 5, paddingTop: 5,
                paddingRight: 15, paddingLeft: 15
            }} onPress={() => dispatch(turnOn(counter))}>
                <Text style={{ fontSize: 20 }}>ON</Text>
            </TouchableOpacity>
        </View>
    )
}


export default Counter