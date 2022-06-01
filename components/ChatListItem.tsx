import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import { ChatRoomProps, UserProps } from '../types'
import useColorScheme from '../hooks/useColorScheme'
import Avatar from './Avatar'

interface Props {
    chatRoom: ChatRoomProps
}

const ChatListItem = ({ chatRoom: { users, lastMessage } }: Props) => {
    const { content, createdAt } = lastMessage
    const theme = useColorScheme()

    return (
        <TouchableOpacity activeOpacity={0.65}>
            <View style={styles.container}>
                <Avatar users={users} width={60} />
                <View style={styles.userNameContainer}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Text style={styles.name}>{users[1].name}</Text>
                        <Text
                            style={{
                                marginLeft: 10,
                                fontSize: 12,
                                color: 'gray',
                            }}
                        >
                            {createdAt}
                        </Text>
                    </View>
                    <Text style={{ color: 'gray' }}>{content}</Text>
                    <View
                        style={[
                            styles.separator,
                            {
                                backgroundColor:
                                    theme == 'dark' ? '#262626' : '#F2F2F2',
                            },
                        ]}
                    />
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
    userNameContainer: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        marginBottom: 5,
    },
    separator: {
        width: '95%',
        height: 0.6,
        marginTop: 15,
    },
})
