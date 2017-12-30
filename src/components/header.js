// import libraries for making a component
import React from 'react'
import { Text, StyleSheet } from 'react-native';

// make a component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Albums!</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
    },
});

// make the component available to other parts of the app
export default Header;
