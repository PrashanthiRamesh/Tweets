import React from 'react';
import TweetButton from './TweetButton'
import Loading from './Loading'
import TweetsItem from './TweetsItem'


export default function Main() {
    return (
        <>
            <TweetButton />
            <Loading />
            <TweetsItem />
        </>
    )
}