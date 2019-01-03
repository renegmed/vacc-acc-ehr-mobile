import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import InnerSection from '../InnerSection'; 

class PatientWelcome extends Component {
    immunizations() {
        this.props.navigation.navigate("Immunizations");
    }

    input() {
        this.props.navigation.navigate("AddImmunization");
    }

    setting() {
        this.props.navigation.navigate("Setting");
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Patient Welcome</Text>
                <InnerSection>
                    <Button title="My Immunizations" 
                        onPress={this.immunizations.bind(this)} 
                        backgroundColor={'#3bd3d4'}/>
                </InnerSection>

                <InnerSection>
                    <Button title="Input Immunization" 
                        onPress={this.input.bind(this)} 
                        backgroundColor={'#3bd3d4'}/>
                </InnerSection> 

                <InnerSection>
                    <Button title="Setting" 
                        onPress={this.setting.bind(this)} 
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

export default PatientWelcome;