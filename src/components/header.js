// import libraries for making a component
import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,

        // shadow for IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 200 },
        shadowOpacity: 0.2,
        // shadow for Android
        elevation: 2,

        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        height: 20
    },
});

// make the component available to other parts of the app
export default Header;
