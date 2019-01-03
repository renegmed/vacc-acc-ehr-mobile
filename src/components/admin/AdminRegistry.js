import React, { Component } from 'react';
import { View, Text } from 'react-native';
 

class AdminRegistry extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Admin Registry</Text>
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

export default AdminRegistry;