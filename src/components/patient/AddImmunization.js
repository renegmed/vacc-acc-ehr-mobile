import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class AddImmunization extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Add Immunization</Text>
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

export default AddImmunization;