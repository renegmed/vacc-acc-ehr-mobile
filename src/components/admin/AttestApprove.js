import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class AttestApprove extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Attest</Text>
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

export default AttestApprove;