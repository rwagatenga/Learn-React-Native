import React from 'react';

import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from 'react-native';

export default function GoalInput (props) {
    const [goal, setGoal] = React.useState('');
    const goalInputHandler = (enteredGoal) => {
        setGoal(enteredGoal);
    };
    const addGoalHandler = () => {
        props.onAdd(goal);
        setGoal('');
    }
    return (
        <Modal visible = {props.visible} animationType = "slide">
            <View style={styles.container}>
                <TextInput 
                placeholder = "Course Goal"
                style = {styles.input}
                name = "goal"
                onChangeText = {goalInputHandler}
                value = {goal}/>
                <View style = {styles.buttonsContainer}>
                    <View style = {styles.button}> 
                        <Button 
                            title = "ADD"
                            onPress = {addGoalHandler}
                        />
                    </View>
                    <View style = {styles.button}>
                        <Button title = "Cancel"
                            onPress = {props.onCancel}
                            color = 'red'
                        /> 
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '75%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 5,
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '65%'
    },
    button: {
        width: '40%',
        borderRadius: 10
    }
})