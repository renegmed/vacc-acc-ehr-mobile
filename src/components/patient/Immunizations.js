import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements'; 

class Immunizations extends Component {
    
    renderList() {
      
            return (
                <List containerStyle={{ marginTop: 10 }} >
                    <ListItem 
                    title="Tetanus immunization"
                    onPress={ () => this.props.navigation.navigate('Immunization', 
                    { 
                        id: 1,
                        description: 'Anti Tetanus Immunization',
                        dateAdministered: '2001-05-23',
                        location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                        adminBy: 'Dr. John Smith'
                    }
                    )} />
                    <ListItem title="Anti-rabies"  
                    onPress={ () => this.props.navigation.navigate('Immunization', 
                    { 
                        id: 2,
                        description: 'Anti Rabies Immunization',
                        dateAdministered: '2002-07-28',
                        location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                        adminBy: 'Dr. Jane Dane'
                    }
                    )}/> 
                </List>
            );
       
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Immunizations</Text>
                {this.renderList()}
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

export default Immunizations;