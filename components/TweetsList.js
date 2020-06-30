import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';
import axios from 'axios'

export default function TweetsList() {
    const [user, setUser] = useState('realdonaldtrump')
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        fetchTweets()
    }, [])

    const fetchTweets = async () => {
        const response =
            await axios.get(
                `https://api.twitter.com/1.1/search/tweets.json?q=${user}`,
                { headers: { 'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAHjSFQEAAAAABb1yKIwGINddNVWOSxcl0Q2EjF0%3DiNsyEGCr62CxlfLprXedMMu0R3OFcsNjyZoWXurKhZ8azNMYhA' } }
            )
        setTweets(response.data.statuses)
    }

    const toggleUser = () => {

        (user === 'realdonaldtrump') ? setUser('hillaryclinton') : setUser('realdonaldtrump')
        fetchTweets()
    }

    const Item = ({ item }) => {
        return (
            <>
                <Image src={item.user.profile_image_url} rounded />
                <Text style={styles.item}>{item.text}</Text>
            </>
        );
    }

    return (
        <View style={styles.container}>
            <Button title={(user === 'realdonaldtrump') ? 'Hillary Clinton' : 'Donald Trump'} onPress={toggleUser} />
            <Text style={styles.title}>{`Tweets about ${user}`}</Text>
            <FlatList
                data={tweets}
                renderItem={({ item }) => <Item title={item} />}
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
