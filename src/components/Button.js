import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ handleOnPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity
            onPress={handleOnPress}
            style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 8,
        paddingBottom: 8
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
