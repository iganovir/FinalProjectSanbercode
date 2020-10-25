import React, { Component } from 'react';
import {
    Platform, View, Text, Image, ScrollView, TextInput, StyleSheet, Button,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native';


export default class App extends Component {
    render(){
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <ScrollView>
                <View style={styles.containerView}>
                    <Image source={require('../assets/images/img_login.png')} style={styles.imgLogin} />
                    <Text style={styles.welcomeText}>Welcome!</Text>
                    <Text style={styles.welcomeText2}>Sign in with your email and password</Text>
                    <View style={styles.containerForm}>
                        <View style={styles.forminput}>
                            <Text style={styles.formtext}>Email</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.forminput}>
                            <Text style={styles.formtext}>Password</Text>
                            <TextInput style={styles.input} secureTextEntry={true} />
                        </View>
                        <View style={styles.kotaklogin}>
                            <TouchableOpacity style={styles.btlogin} onPress={() => this.props.navigation.navigate('App',
                                {
                                    screen: 'Home', params:
                                        { screen: 'Skill', params: { test: 'Mukhlis' } }
                                })}>
                                <Text style={styles.textbt}>  Sign In </Text>
                            </TouchableOpacity>
                        </View>
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
        width: '100%'
    },
    containerView: {
        backgroundColor: '#fff',
        marginTop: 70,
        flex: 1,
        alignContent: 'center'
    },
    containerForm: {
        backgroundColor: '#fff',
        alignSelf: 'center',
        width: '90%',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20
    },
    welcomeText: {
        fontSize: 36,
        color: '#02C39A',
        textAlign: 'left',
        fontWeight: 'bold',
        marginLeft: '9%',
        fontFamily: 'bold'
    },
    welcomeText2: {
        color: '#4D4D4D',
        marginLeft: '9%',
        fontFamily: 'regular'
    },
    imgLogin: {
        alignContent: 'flex-end'
    },
    formtext: {
        color: '#4D4D4D',
        marginVertical: 7,
        fontFamily: 'regular'

    },
    containerForgotPasword: {
        alignItems: 'flex-start',
        flex: 1
    },
    forgotPassword: {
        color: '#000000',
        alignSelf: 'flex-end',
        marginHorizontal: 30,
        marginVertical: 20
    },
    forminput: {
        marginHorizontal: 10,
        marginVertical: 10,
        alignContent: 'center',
        flex: 1
    },
    input: {
        height: 40,
        borderColor: '#E6EAEE',
        borderBottomWidth: 1,
        borderColor: '#02C39A',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7

    },
    vbutton: {
        marginHorizontal: 90,
        borderRadius: 10,
        marginVertical: 10,
    },
    btlogin: {
        alignItems: "center",
        backgroundColor: "#02C39A",
        padding: 10,
        borderRadius: 7,
        marginHorizontal: 10,
        marginTop: 30,
        flex: 1,
        height: 40
    },
    textHaveAnAccount: {
        textAlign: 'center',
        marginVertical: 15
    },
    textbt: {
        color: 'white',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: 'bold'
    },
    kotaklogin: {
        marginTop: 20,
        alignContent: 'center',
        flex: 1
    },
    containerSosmed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.8,
        alignSelf: 'center'
    },
    btnSosmed: {
        borderColor: "#E6EAEE",
        borderWidth: 1,
        flex: 0.4,
        borderRadius: 7,
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 5

    },
    imgIconSosmed: {
        width: 25,
        height: 25,
    },
    textSosmed: {
        marginHorizontal: 30
    }
});
