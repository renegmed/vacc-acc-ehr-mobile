import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import InnerSection from '../InnerSection'; 

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
        marginLeft: 10,
        marginBottom: 10,
    }
}

export default AddImmunization;