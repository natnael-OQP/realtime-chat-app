import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserProps } from '../types'

interface Props {
    users: [UserProps]
    width: number
}

const Avatar = ({ users, width }: Props) => {
    return (
        <Image
            style={[
                styles.image,
                { width: width, height: width, borderRadius: width / 2 },
            ]}
            source={{ uri: users[1].imageUri }}
        />
    )
}

export default Avatar

const styles = StyleSheet.create({
    image: {},
})
