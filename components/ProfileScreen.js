import React from 'react';
import {
    Platform, View, Text, Image, ScrollView, TextInput, StyleSheet, Button,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

export default function App() {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <ScrollView>
                <View style={styles.containerView}>
                   <Text style={styles.profileText}>Profile</Text>
                   <View style={styles.containerProfileItem}>
                       <Text style={styles.profileLabel}>Name   :</Text>
                       <Text style={styles.profileData}>  Iga Noviyanti Rohman</Text>
                   </View>
                   <View style={styles.containerProfileItem}>
                       <Text style={styles.profileLabel}>Address   :</Text>
                       <Text style={styles.profileData}>  Cibeber, Cimahi</Text>
                   </View>
                   <View style={styles.containerProfileItem}>
                       <Text style={styles.profileLabel}>Profession   :</Text>
                       <Text style={styles.profileData}>  Android Developer</Text>
                   </View>
                   <Text style={styles.skillsLabel}>Skills</Text>
                   <View style={styles.containerSkillsItem}>
                       <Text style={styles.profileLabel}>Android</Text>
                       <Text style={styles.skillsDataRight}>React</Text>
                   </View>
                   <View style={styles.containerSkillsItem}>
                       <Text style={styles.profileLabel}>JavaScript</Text>
                       <Text style={styles.skillsDataRight}>NodeJs</Text>
                   </View>
                   <View style={styles.containerSkillsItem}>
                       <Text style={styles.profileLabel}>Laravel</Text>
                       <Text style={styles.skillsDataRight}>Databases</Text>
                   </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height:'100%'},
    containerView: {
        backgroundColor: '#fff',
        marginTop: 30,
        flex: 1,
        alignContent: 'center'
    },    
    profileText: {
        fontSize: 36,
        color: '#000',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: '9%',
        fontFamily:'bold'
    },
    containerProfileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.8,
        alignSelf: 'left'
    },
    profileLabel: {
        color: '#02C39A',
        marginVertical:7,
        fontFamily:'medium',
        marginLeft:'9%'
    },
    profileData: {
        color: '#000',
        marginVertical:7,
        fontFamily:'medium',
        marginRight:'9%'
    },
    containerSkillsItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 0.8,
        alignSelf: 'left'
    },
    skillsLabel: {
        fontSize:20,
        color: '#000',
        marginVertical:7,
        fontFamily:'medium',
        marginLeft: '9%',
    },
    skillsDataRight: {
        color: '#02C39A',
        marginVertical:7,
        fontFamily:'medium',
        marginRight: '9%',
    },
});
