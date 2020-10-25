import React, { useEffect, useState } from 'react';
import {
    Platform, View, Text, ScrollView, FlatList, StyleSheet, KeyboardAvoidingView
} from 'react-native';

export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=England')
            .then((response) => response.json())
            .then((json) => setData(json.teams))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}>
            <ScrollView>
                <View style={styles.containerView}>
                    <Text style={styles.profileText}>Teams</Text>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <View style={styles.containerProfileItem}>
                                <Text style={styles.profileLabel}>{item.strTeam}, {item.intFormedYear}</Text>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    containerListView: {
        flex: 1,
        width: '100%'
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
        alignSelf: 'left',
        shadowColor: '#dedede',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
        elevation: 2,
        borderRadius: 7,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop:20,
        marginRight:'9%',
        marginLeft:'9%'
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
