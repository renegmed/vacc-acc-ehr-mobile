import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class Immunization extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Immunization</Text>
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

export default Immunization;