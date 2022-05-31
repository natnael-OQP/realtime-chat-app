import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import { ChatRoomProps, UserProps } from '../types'

interface Props {
    chatRoom: ChatRoomProps
}

const ChatListItem = ({ chatRoom: { users, lastMessage } }: Props) => {
    const { imageUri, name } = users[1]
    const { content, createdAt } = lastMessage

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: imageUri }} />
                <View style={styles.userNameContainer}>
                    <Text>{name}</Text>
                    <Text>{content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ChatListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userNameContainer: {
        marginLeft: 10,
    },
    name: {},
})
