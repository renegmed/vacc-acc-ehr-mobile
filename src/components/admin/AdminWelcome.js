import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import InnerSection from '../InnerSection';


class AdminWelcome extends Component {
    
    register() {
        this.props.navigation.navigate("AdminRegistry");
    }

    attestationsList() {
        this.props.navigation.navigate("AttestApproveList");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome Doctor</Text>
                <InnerSection>
                    <Button title="Register" 
                        onPress={this.register.bind(this)} 
                        backgroundColor={'#3bd3d4'}/>
                </InnerSection>

                 <InnerSection>
                    <Button title="Attestations For Approval" 
                        onPress={this.attestationsList.bind(this)} 
                        backgroundColor={'#3bd3d4'}/>
                </InnerSection>    
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

export default AdminWelcome;