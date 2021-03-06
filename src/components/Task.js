import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Task = (props) => {
  
  return (
    <View>
      <View style= {styles.taskItems}>
        <View style={styles.itemLeft}>
          <View style = {styles.box}/>
          <Text style = {styles.itemText}>{props.text}</Text>
        </View>
        <View style={styles.circle}/>
          
      </View>
         
        

      
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  taskItems:{
    backgroundColor: '#FDFEFE',
    marginBottom: 30,
    height: 60,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  itemLeft:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText:{
    maxWidth: '80%',
    fontSize: 20,
  },
  box:{
    backgroundColor:'#55BCF6',
    height: 24,
    width: 24,
    borderRadius: 5,
    opacity: 0.4,
    marginRight: 15,
  },
  circle:{
    height: 12,
    width: 12,
    borderColor: '#55BCF6',
    borderRadius: 5,
    borderWidth: 2,
  },
})