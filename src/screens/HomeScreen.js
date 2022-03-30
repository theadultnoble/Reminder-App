import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Task from '../components/Task'
import { MaterialIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View  style={styles.container}>
        <View style={styles.taskWrapper}>
         <Text style={styles.textTitle}>Today's tasks </Text>
         <Task/>
         <Task/>
         <Task/>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
            <TextInput placeholder={'Write a task'} style={styles.TextInput}></TextInput>
            <TouchableOpacity  >
                <View style={styles.addWrapper}>
                    <MaterialIcons name="add" size={35} color="#55BCF6" />
                </View>

            </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        
    },
    taskWrapper:{
        paddingTop: 94,
        paddingHorizontal: 20,
    },
    textTitle:{
        marginBottom: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    TextInput:{
        paddingVertical: 15,
        paddingHorizontal:15,
        width:250,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        borderColor: '#E8EAED',
        borderWidth: 2,
    },
    writeTaskWrapper:{
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
        bottom: 25,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    addWrapper:{
        width: 80,
        height: 80,
        backgroundColor:'#FFFFFF',
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E8EAED',
        borderWidth: 2,
    }

    
});