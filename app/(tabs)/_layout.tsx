import { Entypo } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name="reels"
        options={{
          title: 'Reels',
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          headerShown: false, 
          tabBarIcon: () => <Entypo name="chat" size={24} color="black" />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false
        }}
      />
    </Tabs>
  )
}

export default _layout; 