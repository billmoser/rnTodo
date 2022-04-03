import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Platform } from 'react-native'
import { TextInput } from 'react-native'
import { Keyboard } from 'react-native'

import Task from './components/Task'

export default function App() {

  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  const [count, setCount] = useState(0)
  
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You have ${count} tasks`)
  });

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskList([...taskList, task])
    setCount(taskList.length)
    setTask('')
  }

  const deleteTask = (index) => {
    let tlCopy = [...taskList]
    tlCopy.splice(index, 1)
    setTaskList(tlCopy)
    setCount(taskList.length)
  }

  


  return (
    <View style={styles.container}>

      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks ({count})</Text>
        <View style={styles.items}>
          {/*this is where tasks go */}
          {
            taskList.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => deleteTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding': 'height'}
        style={styles.writeTaskWrapper}>
        
        <TextInput 
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}/>
      
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    maxWidth: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {

  }

});
