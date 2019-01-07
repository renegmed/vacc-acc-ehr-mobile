import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements'; 

class AttestApproveList extends Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Text>Attestations For Approval</Text>
                <List containerStyle={{ marginTop: 10 }} >
                    <ListItem title="Attestation For Patient A" 
                    onPress={ () => this.props.navigation.navigate('AttestApprove', 
                    { 
                        id: 1,
                        patient: 'A',
                        description: 'Anti Tetanus Immunization',
                        dateAdministered: '2001-05-23',
                        location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                        adminBy: 'Dr. John Smith'
                    }
                    )} />
                    <ListItem title="Attestation For Patient A"
                    onPress={ () => this.props.navigation.navigate('AttestApprove', 
                    { 
                        id: 2,
                        patient: 'A',
                        description: 'Anti Rabies Immunization',
                        dateAdministered: '2002-07-28',
                        location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                        adminBy: 'Dr. Jane Dane'
                    }
                    )} />  
                    <ListItem title="Attestation For Patient B"
                    onPress={ () => this.props.navigation.navigate('AttestApprove', 
                    { 
                        id: 3,
                        patient: 'B',
                        description: 'Anti Polio Vaccination',
                        dateAdministered: '2005-06-15',
                        location: 'ABC Medical Clinic 101 Main St. Anytown, Anystate, USA',
                        adminBy: 'Dr. Terry Taylor'
                    }
                    )} /> 
                    
                </List>
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