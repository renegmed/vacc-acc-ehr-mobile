import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class AttestApproveList extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Attestations For Approval</Text>
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

export default AttestApproveList;