import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function GoalItem (props) {
    return (
        <TouchableOpacity onPress = {props.onDelete.bind(this, props.id)}>
            <View style = {styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    listItem: {
        padding: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})