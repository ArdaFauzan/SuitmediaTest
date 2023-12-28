import React, { useRef, useState } from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, Alert, StatusBar } from 'react-native';
import { deviceHeight, deviceWidth } from './Dimension';
import UsersPhoto from '../assets/icphoto.svg'

const FirstPage = (props) => {
    const [name, setName] = useState('');
    const [pal, setPal] = useState('');

    const setref = useRef();

    const isPalindrome = (str) => {
        const cleanedStr = str.replace(/\s/g, '').toLowerCase();
        return cleanedStr === cleanedStr.split('').reverse().join('');
    };

    const handleCheck = () => {
        if (!name.trim() && !pal.trim()) {
            Alert.alert('WARNING!', 'Input both your name and words you want to check');
            return;
        } else if (!name.trim()) {
            Alert.alert('WARNING!', 'Input your name');
            return;
        } else if (!pal.trim()) {
            Alert.alert('WARNING!', 'Input words you want to check');
            return;
        }

        const result = isPalindrome(pal);
        Alert.alert(
            'Palindrome Check',
            result ? 'isPalindrome!' : 'not Palindrome!',
        );
    };


    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />

            <ImageBackground source={require('../assets/background.png')} style={{ height: deviceHeight, width: deviceWidth }} >

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 150 }}>
                    <UsersPhoto height= {116} width= {116} />

                    <TextInput
                        value={name}
                        onChangeText={(val) => setName(val)}
                        placeholder="Name"
                        placeholderTextColor="#6867775C"
                        style={{
                            color: 'black',
                            fontSize: 15,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: 'white',
                            marginTop: 30,
                            width: 300,
                            paddingRight: 30,
                            backgroundColor: 'white',
                            paddingLeft: 20,
                            height: 47,
                            fontWeight: '400',
                        }}
                        onSubmitEditing={() => setref.current.focus()}
                    />

                    <TextInput
                        value={pal}
                        onChangeText={(val) => setPal(val)}
                        placeholder="Palindrome"
                        placeholderTextColor="#6867775C"
                        style={{
                            color: 'black',
                            fontSize: 15,
                            borderRadius: 12,
                            borderWidth: 2,
                            borderColor: 'white',
                            marginTop: 15,
                            width: 300,
                            paddingRight: 30,
                            backgroundColor: 'white',
                            paddingLeft: 20,
                            height: 47,
                            fontWeight: '400',
                        }}
                        ref={setref}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={handleCheck}>
                        <View style={{
                            borderRadius: 12,
                            marginTop: 45,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            height: 45,
                            width: 300,
                            backgroundColor: '#2B637B'
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'white' }}>CHECK</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate('SecondPage', { name })}>
                        <View style={{
                            borderRadius: 12,
                            marginTop: 15,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            height: 45,
                            width: 300,
                            backgroundColor: '#2B637B',
                        }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'white' }}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
};

export default FirstPage;
