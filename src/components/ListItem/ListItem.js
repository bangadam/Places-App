import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ListItem = props => (
	<TouchableOpacity onPress={props.onItemPressed}>
	    <View style={styles.listItem}>
            <Image resizeMode='contain' source={props.placeImage} style={styles.placeImage} />
	       <Text>{props.placeName}</Text>
	    </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        marginBottom: 5,
        backgroundColor: '#eee',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        margin: 2,
        width: 50,
        height: 50
    }
})

export default ListItem;