import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';
import InnerSection from '../InnerSection'; 
import { fromJS } from 'immutable';

class AttestApprove extends Component {
    state = {
        data: fromJS({
          source: require('../../../images/doc1.jpg'),
          width: 100,
          height: 100
        })
      };
    
      // Getter for "Immutable.js" state data...
    get data() {
      return this.state.data;
    }

    // Setter for "Immutable.js" state data...
    set data(data) {
      this.setState({ data });
    }

    approve() { 
        this.props.navigation.navigate("AttestApproveList");
    }

    render() {
        const { params } = this.props.navigation.state;
        console.log("[AttesApprove] ", this.data);
        const { source, width, height } = this.data.toJS();
        return (
            <View style={styles.container}>
                <InnerSection>
                    <Text style={styles.label}>Patient:</Text> 
                    <Text style={styles.input}>{params.patient}</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Description:</Text> 
                    <Text style={styles.input}>{params.description}</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Date received:</Text> 
                    <Text style={styles.input}>{params.dateAdministered}</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Location:</Text> 
                    <Text style={styles.input}>{params.location}</Text>
                </InnerSection>
                <InnerSection>
                    <Text style={styles.label}>Administered by:</Text>      
                    <Text style={styles.input}>{params.adminBy}</Text>
                </InnerSection> 
                
                <Image source={source} style={{ width, height }} />
                
                <InnerSection>
                    <Button title="Approve" onPress={this.approve.bind(this)} backgroundColor={'#3bd3d4'}/>
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

export default AttestApprove;