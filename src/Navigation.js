import React from 'react'; 
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from './components/Login'; 
import AdminWelcome from './components/admin/AdminWelcome';
import AdminRegistry from './components/admin/AdminRegistry'; 
import AttestApproveList from './components/admin/AttestApproveList';
import AttestApprove from './components/admin/AttestApprove';

import PatientWelcome from './components/patient/PatientWelcome';
import Immunizations from './components/patient/Immunizations'; 
import AddImmunization from './components/patient/AddImmunization';
import Immunization from './components/patient/Immunization';
import InputAttestation from './components/patient/InputAttestation';
import Setting from './components/patient/Setting';

const AuthStack = createStackNavigator({ 
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: 'Login'
      }
    } 
});
   
const AdminStack = createStackNavigator({ 
    AdminWelcome: {
        screen: AdminWelcome,
        navigationOptions: {
          headerTitle: 'Welcome Admin'
        }
    },
    AdminRegistry: {
        screen: AdminRegistry,
        navigationOptions: {
          headerTitle: 'Register'
        }
    },
    AttestApproveList: {
        screen: AttestApproveList,
        navigationOptions: {
          headerTitle: 'Register'
        }
    },
    AttestApprove: {
        screen: AttestApprove,
        navigationOptions: {
          headerTitle: 'Register'
        }
    } 
});

const PatienStack = createStackNavigator({ 
    PatientWelcome: {
        screen: PatientWelcome,
        navigationOptions: {
          headerTitle: 'Welcome Patient'
        }
    },
    Immunizations: {
        screen: Immunizations,
        navigationOptions: {
          headerTitle: 'Immunizations'
        }
    },
    AddImmunization: {
        screen: AddImmunization,
        navigationOptions: {
          headerTitle: 'Add Immunization'
        }
    },
    Immunization: {
        screen: Immunization,
        navigationOptions: {
          headerTitle: 'Immunization'
        }
    },
    InputAttestation: {
        screen: InputAttestation,
        navigationOptions: {
          headerTitle: 'Input Attestation'
        }
    } 
    ,
    Setting: {
        screen: Setting,
        navigationOptions: {
          headerTitle: 'Setting'
        }
    }  
});
const AppNavigator = createSwitchNavigator (
    {
        Admin: AdminStack,
        Patient: PatienStack,
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth'
    }
)
  
export default AppNavigator;