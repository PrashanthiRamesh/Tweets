import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Loading from './Loading';
import TweetButton from './TweetButton';
import TweetsItem from './TweetsItem';


export default function Main() {
    return (
        <View style={styles.container}>
            <TweetButton />
            <Loading />
            <TweetsItem />
       </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});