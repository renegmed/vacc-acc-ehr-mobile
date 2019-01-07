import React, { Component } from 'react';
import { View, Text } from 'react-native';  
import InnerSection from '../InnerSection'; 

class Immunization extends Component {
    
    componentDidMount() {
        const { params } = this.props.navigation.state;
        console.log("[Immunization] componentDidMount()", params);
        this.setState({ immunization: params });
    }

    create() {
        this.props.navigation.navigate("Immunizations");
    }

    render() {
        //console.log("[Immunization] immunization:", this.props.navigation.state.params);
        const { params } = this.props.navigation.state; 
        return (
            <View style={styles.container}> 
                <InnerSection> 
                    <Text style={styles.input}>{ params.description }</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Date administered:</Text>
                    <Text style={styles.input}>{ params.dateAdministered }</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Administered by:</Text>
                    <Text style={styles.input}>{ params.adminBy }</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Location:</Text>
                    <Text style={styles.input}>{ params.location }</Text>
                </InnerSection> 
            </View>  
        );
    }
}
 
const styles = {
    container: {
        marginTop: 10,
        marginLeft: 20,
        marginBottom: 10,
    },
    label: {
        color: 'gray',
        fontWeight: 'normal'
    },
    input: {
        fontWeight: 'bold'
    }
}
 
export default  Immunization ;