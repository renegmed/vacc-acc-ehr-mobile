import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class Setting extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>  
        );
    }
}
 
const styles = {
    container: {
        marginTop: 10,
        marginBottom: 10,
    }
}

export default Setting;