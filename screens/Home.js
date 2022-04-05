import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Platform } from 'react-native'
import { TextInput } from 'react-native'
import { Keyboard } from 'react-native'

import {observer} from 'mobx-react'
import {withStore} from '../mobx/StoreHelpers'

import Task from '../components/Task'

function Home({store}) {

  /*
   * This is private data, used to implement adding a task to the task list.
   * THerefore, it does not belong in the Task Store
   */
  const [task, setTask] = useState('')
  
  // just a demo of useEffect
  useEffect(() => {
    // Update the document title using the browser API
    console.log(`useEffect: You have ${store.count} tasks`)
  })

  // adds a new task to the TaskStore
  const handleAddTask = () => {
    Keyboard.dismiss()
    store.tasks.addTask(task)

    //  setTask('')  // uncomment to clear the input box after task addition
  }

  return (
    <View style={styles.container} store={store}>

      {/*
        * Task list
        */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks ({store.count})</Text>
        <View style={styles.items}>
          {/* Create UI Items for each task */}
          {
            store.tasks.items.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => store.tasks.deleteTask(index)} >
                  <Task text={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      {/*
        * Task input box and ':' button to add
        */}
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

export default withStore(observer(Home))
