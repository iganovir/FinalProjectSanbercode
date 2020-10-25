import React from 'react';
import {
    Platform, View, Text, Image, ScrollView, TextInput, StyleSheet, Button,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}>
                <ScrollView>
                    <View style={styles.containerView}>
                        <Text style={styles.profileText}>Detail</Text>
                        <View style={styles.containerProfileItem}>
                            <Text style={styles.profileLabel}>Name   :</Text>
                            <Text style={styles.profileData}>  Iga Noviyanti Rohman</Text>
                        </View>
                        <View style={styles.containerProfileItem}>
                            <Text style={styles.profileLabel}>Country   :</Text>
                            <Text style={styles.profileData}>  Cibeber, Cimahi</Text>
                        </View>
                        <View style={styles.containerProfileItem}>
                            <Text style={styles.profileLabel}>Profession   :</Text>
                            <Text style={styles.profileData}>  Android Developer</Text>
                        </View>
                        <Text style={styles.skillsLabel}>Description</Text>
                        <View style={styles.containerSkillsItem}>
                            <Text style={styles.profileLabel}>Android</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
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
        fontFamily: 'bold'
    },
    containerProfileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.8,
        alignSelf: 'left'
    },
    profileLabel: {
        color: '#02C39A',
        marginVertical: 7,
        fontFamily: 'medium',
        marginLeft: '9%'
    },
    profileData: {
        color: '#000',
        marginVertical: 7,
        fontFamily: 'medium',
        marginRight: '9%'
    },
    containerSkillsItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 0.8,
        alignSelf: 'left'
    },
    skillsLabel: {
        fontSize: 20,
        color: '#000',
        marginVertical: 7,
        fontFamily: 'medium',
        marginLeft: '9%',
    },
    skillsDataRight: {
        color: '#02C39A',
        marginVertical: 7,
        fontFamily: 'medium',
        marginRight: '9%',
    },
});
