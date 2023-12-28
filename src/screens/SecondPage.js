import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const SecondPage = (props) => {
    const [name, setName] = useState(props.route.params.name);

    useEffect(() => {
        if (props.route.params.name) {
            setName(props.route.params.name);
        }
    }, [props.route.params.name]);

    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <View
                style={{
                    backgroundColor: '#ffffff',
                    paddingTop: 30,
                    paddingBottom: 16,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Image
                        source={require('../assets/back.png')}
                        style={{ height: 50, width: 50, marginLeft: 10 }}
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: 22,
                        textAlign: 'center',
                        flex: 1,
                        marginRight: 35,
                    }}
                >
                    Second Page
                </Text>
            </View>

            <View style={{ marginLeft: 20, flex: 1 }}>
                <Text style={{ fontSize: 12, fontWeight: '400', color: 'black' }}>Welcome</Text>

                <Text style={{ fontSize: 18, color: 'black', fontWeight: '600'}}>
                    {name}
                </Text>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: 'black', fontWeight: '600', marginTop: 220 }}>
                        {props.route.params.title}
                    </Text>
                </View>
            </View>

            <View style={{ marginBottom: 32, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('ThirdPage')}>
                    <View
                        style={{
                            borderRadius: 12,
                            marginTop: 20,
                            justifyContent: 'center',
                            height: 45,
                            width: 300,
                            backgroundColor: '#2B637B',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'white' }}>
                            Choose a User</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SecondPage;
