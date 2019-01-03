import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class InputAttestation extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Input Attestation</Text>
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

export default InputAttestation;