import { FlatList, StyleSheet, View as RnView } from 'react-native'
import ChatRooms from '../assets/data/ChatRooms'
import ChatListItem from '../components/ChatListItem'

import { View } from '../components/Themed'
import { RootTabScreenProps } from '../types'

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chat'>) {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: '100%' }}
                data={ChatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                showsVerticalScrollIndicator={false}
            />
            <RnView style={styles.button}></RnView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        position: 'absolute',
        bottom: 25,
        right: 25,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#1a8',
    },
})
