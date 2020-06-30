import React from 'react'
import { StyleSheet, View } from 'react-native'
import Loading from './Loading'
import TweetButton from './TweetButton'
import TweetsList from './TweetsList'


export default function Main() {
    return (
        <View style={styles.container}>
            <TweetButton />
            <Loading />
            <TweetsList />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
})