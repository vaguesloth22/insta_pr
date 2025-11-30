import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

export default function chat() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-bold text-light-200">Chat</Text>
      <Link href="/chat/ppl/akshat" push asChild>
        <Button
          title="Push to /ppl/akshat"
        />
      </Link>
      <View/>
      <Link href="/chat/ppl/kumar" push asChild>
        <Button
          title="Push to /ppl/kumar"
        />
      </Link>
      <View/>
      <Link href="/chat/ppl/kota" push asChild>
        <Button
          title="Push to /ppl/kota"
        />
      </Link>
      <View/>
      <Link href="/chat/ppl/devansh" push asChild>
        <Button
          title="Push to /ppl/devansh"
        />
      </Link>
    </View>
  )
}