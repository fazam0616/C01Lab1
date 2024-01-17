import React, { useState } from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import uuid from "uuid";

const AddTask = ({onAddTask}) => {
    const [initTitle, setTitle] = useState('');
    const handleAddTask = () => {
        if (initTitle.trim() !== ''){
            onAddTask(initTitle);
            setTitle('');
        }
    };

    return (
        <View style={styles.addTodoForm}>
            <TextInput 
            style={styles.input}
            placeholder='Set New Task Title'
            onChangeText={setTitle}
            value={initTitle}
            returnKeyType='done'
            />
            <Button title='Add Task' onPress={handleAddTask}/>
        </View>
    );
};

const styles = StyleSheet.create({
    addTodoForm: {
        margin: 10,
      },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});


export default AddTask;