import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

export default function TweetsItem({ tweets }) {
    const Item = ({ title }) => {
        return (
            <Text style={styles.item}>{title}</Text>
        );
    }

    return (
        <View >
            
            <FlatList
                data={tweets}
                renderItem={({ item }) => <Item title={item.text} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    title: {
        backgroundColor: 'lightgrey',
        padding: 20,
        textAlign: 'center'
    }
});

const mapStateToProps = (state) => ({
    tweets: state.tweets,
})
TweetsItem = connect(mapStateToProps, null)(TweetsItem)
