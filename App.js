
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
// import Tas from './components/Tasks'
import Tasks from './components/Tasks';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function App() {
  const [task, setTask ] = useState()

  const [taskItems, setTaskItems] = useState([])


  const handleAddTask = () => {
     Keyboard.dismiss()
     setTaskItems([...taskItems, task])
     setTask(null)
  }

  const delateItem = (index) => {
   let copyItem = [...taskItems];
   copyItem.splice(index, 1)
   setTaskItems(copyItem)
  } 


  return (
    <View style={styles.container}>

      {/* Today's tasks */}
       <View style = {styles.tasks}>
        <Text style ={styles.tasksTitle}>Today's Tasks</Text>

       

        <View style ={styles.taskItems}>
        {taskItems.map((item, index) => {
           return (
            <TouchableOpacity  key={index}  onPress={() => delateItem(index)}>
              <Tasks text = {item}/>

            </TouchableOpacity>
           )
           
        })}
         {/* <Tasks text = {'Task one'}/> */}
         {/* <Tasks text = {'Task two'}/> */}
        </View>
       </View>

    {/* write a task  */}

   <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style ={styles.writeTasks}
   >
   <TextInput  style={styles.input}
   placeholder='write your task'
   onChangeText={text  => setTask(text)}
   value={task} 
    />
   

  <TouchableOpacity 
   onPress={() => handleAddTask()}
  > 
    <View style ={styles.addTask}>
      <Text style = {styles.addPlus}>+</Text>
    </View>
  </TouchableOpacity>
  </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FF6347',
    backgroundColor: '#1D1E33',
    
  },

   tasks: {
     paddingTop: 80,
     paddingHorizontal: 20,
   },
  
  tasksTitle:{
   fontSize: 20,
   fontWeight: 'bold',
   color: 'white'

  },

  taskItems: {
  marginTop: 30,
  },
  
  writeTasks:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    
  },
  input: {
    paddingVertical: 15,
    width: 220,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor: 'blue',
    borderWidth: 1,
    
  },
  addTask: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,

  },
  addPlus: {
    color: "green",
    fontSize: 30,
  },
});
