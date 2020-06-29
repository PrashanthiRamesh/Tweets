import React, { useState } from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getTweets } from '../actions';


export default function TweetButton({ getTweets }) {
    const [user, setUser] = useState('realdonaldtrump')

    const toggleUser = () =>{
        (user === 'realdonaldtrump')? setUser('hillaryclinton'): setUser('realdonaldtrump')
        console.log('myuser')
        console.log(user)
        getTweets(user)
    }
    return (
        <>
        <Button title={`Get Tweets of ${user}`} onPress={toggleUser} />
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        backgroundColor: 'lightgrey',
        padding: 20,
        textAlign: 'center'
    }
});

const mapDispatchToProps = {
    getTweets: getTweets
}

TweetButton = connect(null, mapDispatchToProps)(TweetButton)

