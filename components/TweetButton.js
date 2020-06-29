import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import { getTweets } from '../actions'


export default function TweetButton({ getTweets }) {
    return (
        <Button title='Get Tweets' onPress={getTweets} />
    )
}

const mapDispatchToProps = {
    getTweets : getTweets
}

TweetButton = connect(null, mapDispatchToProps) (TweetButton)