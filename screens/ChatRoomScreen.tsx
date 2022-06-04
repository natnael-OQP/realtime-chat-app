import { StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from '../components/Themed'

const ChatRoomScreen = ({ route }: any) => {
    const {
        params: { id },
    } = route

    return (
        <View>
            <Text>ChatRoomScreen</Text>
        </View>
    )
}

export default ChatRoomScreen

const styles = StyleSheet.create({})
