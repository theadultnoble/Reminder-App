import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import Task from '../components/Task'
import { MaterialIcons } from '@expo/vector-icons';
import { Keyboard } from 'react-native';

const HomeScreen = () => {
    const [task, setTask] = useState('');
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);

    }
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);

    }

  return (
    <View  style={styles.container}>
        <View style={styles.taskWrapper}>
         <Text style={styles.textTitle}>Today's tasks </Text>
         {
             taskItems.map((item, index) => {
                return (
                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                      <Task text={item}/>
                    </TouchableOpacity>
                )
             })
         }
        </View>


        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
            <TextInput 
               placeholder={'Write a task'}
               style={styles.TextInput}
               onChangeText = {text => setTask(text)}
               value= {task}
            />
            <TouchableOpacity onPress={()=> handleAddTask()} >
                <View style={styles.addWrapper}>
                    <MaterialIcons name="add" size={25} color="#55BCF6" />
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
        height: 55,
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
        width: 73,
        height: 73,
        backgroundColor:'#FFFFFF',
        borderRadius: 73,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#E8EAED',
        borderWidth: 2,
    }

    
});