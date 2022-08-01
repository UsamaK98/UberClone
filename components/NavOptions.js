import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation} from '@react-navigation/native';

const data = [
    {
        id: "123",
        title: "Find a service",
        image: "https://i.ibb.co/x14gKYm/Saly-7.png",
        screen: "MapScreen",
    },
    {
        id:"456",
        title: "Sell your gig",
        image: "https://i.ibb.co/vV6xnkV/Saly-11.png",
        screen: "SellScreen",
    }
];

//Displaying navigation option buttons on the homescreen
const NavOptions = () => {

    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item})=> (
                <TouchableOpacity 
                style={tw`pl-3 pb-6 pt-4 bg-gray-300 m-2 w-36`}
                onPress={() => navigation.navigate(item.screen)}
                >
                    <View>
                        <Image
                            style={{width:120, height:100, resizeMode:"contain"}}
                            source={{uri:item.image}}
                        />
                        <Text style={tw`pl-2 mt-2 text-lg font-semibold`}>{item.title}</Text>
                        
                        <Icon //Creating and styling the arrow icon
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright" 
                        color="white" 
                        type="antdesign" 
                        />   
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions
