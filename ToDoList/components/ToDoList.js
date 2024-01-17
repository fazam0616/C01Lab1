import React, { useState } from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import uuid from "uuid";
import AddTask from './AddTask'

const ToDoList = ({initTasks}) => {
    const genTask = (task) => {
        return {
            id: uuid.v4(),
            title: task
        };
    };

    const [toDos, setToDos] = useState(initTasks.map(genTask));
    
    const addToDo = (newTitle) => {
        console.log(newTitle);
        setToDos([...toDos, genTask(newTitle)]);
    };
    const removeToDo = (id) => {
        setToDos(toDos.filter( (x) => x.id !== id));
    };
    // setToDos((title)=>(genTask(title)));
    console.log(toDos);
    
    return (
        <View style={styles.todoListContainer}>
            {toDos.map( (task) => (
            <View key={task.id} styles={styles.todoItem}>
                <Text style={styles.text}>{task.title}</Text>
                <Button title='Remove' onPress={() =>removeToDo(task.id)}/>
            </View>))}
            <AddTask onAddTask={addToDo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop:50,
    },
    text: {
      fontSize: 20,
    },
    todoListContainer: {
        margin: 10,
      },
    todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    },
});

export default ToDoList;