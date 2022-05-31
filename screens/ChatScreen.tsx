import { FlatList, StyleSheet } from 'react-native'
import ChatRooms from '../assets/data/ChatRooms'
import ChatListItem from '../components/ChatListItem'

import { Text, View } from '../components/Themed'
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
})
