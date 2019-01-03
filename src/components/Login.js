import React, { Component } from 'react';
import { View, Button } from 'react-native';
import InnerSection from './InnerSection';

class Login extends Component {
    
    loginDoc() {
        this.props.navigation.navigate("AdminWelcome");
    }
    
    loginPatient() {
        this.props.navigation.navigate("PatientWelcome");
    }
    
    render() {
        return (
            <View style={styles.container}>
                <InnerSection>
                    <Button title="Login as Doctor" 
                        onPress={this.loginDoc.bind(this)} 
                        backgroundColor={'#3bd3d4'}/>
                </InnerSection>

                 <InnerSection>
                    <Button title="Login as Patient" 
                        onPress={this.loginPatient.bind(this)} 
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

export default Login;