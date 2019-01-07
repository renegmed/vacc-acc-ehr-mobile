import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, Button } from 'react-native-elements'; 
import InnerSection from '../InnerSection';

class AdminRegistry extends Component {
    
    create() {
        const { adminName, licenseNumber } = this.props
        console.log("[AdminRegistry] create adminName:", 
            adminName, "  license no.:", licenseNumber);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Admin Registry</Text>
                <InnerSection>
                    <FormInput placeholder="Vaccine Administrator Name" 
                        value={this.props.adminName}
                        onChangeText={text => this.props.ideaInputChange({
                            'field': 'adminName',
                            'value': text,
                        })}
                    /> 
                </InnerSection>
                <InnerSection>
                    <FormInput placeholder="License No." 
                        value={this.props.adminName}
                        onChangeText={text => this.props.ideaInputChange({
                            'field': 'licenseNumber',
                            'value': text,
                        })}
                    /> 
                </InnerSection>
                <InnerSection>
                    <Button title="Save" onPress={this.create.bind(this)} backgroundColor={'#3bd3d4'}/>
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

export default AdminRegistry;