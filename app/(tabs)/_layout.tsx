import { Tabs } from 'expo-router';
import React from 'react';

import "../../global"
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen     
        name="blog"
        options={{
          title: 'blog',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="article" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen     
        name="finance"
        options={{
          title: 'finance',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="finance" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen     
        name="Pitchers"
        options={{
          title: 'Pitchers',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="bar-graph" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
