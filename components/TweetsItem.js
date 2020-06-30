import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';

export default function TweetsItem({ tweets }) {

    const Item = ({ item }) => {
        return (
            <View style={styles.tweet} >
                <View>
                    <Image style={styles.image}
                        source={{
                            uri: item.user.profile_image_url,
                        }}
                    />
                </View>
                <View style={{ padding: 5 }}>
                    <Text style={styles.name}>{item.user.name}</Text>
                    <Text style={styles.text}>{item.retweeted_status.full_text}</Text>
                </View>
            </View>
        );
    }

    return (
        <View >
            <FlatList
                style={styles.container}
                data={tweets}
                renderItem={({ item }) => (item.retweeted_status) && <Item item={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
    },
    title: {
        backgroundColor: 'lightgrey',
        padding: 20,
        textAlign: 'center'
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2
    },
    tweet: {
        flex: 1,
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#38A1F3'
    },
    text: {
        width: 280
    }
});

const mapStateToProps = (state) => ({
    tweets: state.tweets,
})
TweetsItem = connect(mapStateToProps, null)(TweetsItem)
