import React, { useState } from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { getTweets } from '../actions'


export default function TweetButton({ getTweets }) {
    const [user, setUser] = useState('realdonaldtrump')

    const toggleUser = () => {
        (user === 'realdonaldtrump') ? setUser('hillaryclinton') : setUser('realdonaldtrump')
        getTweets(user)
    }
    return (
        <>
            <Button title={`Get Tweets of ${user}`} onPress={toggleUser} />
        </>
    )
}

const mapDispatchToProps = {
    getTweets: getTweets
}

TweetButton = connect(null, mapDispatchToProps)(TweetButton)

