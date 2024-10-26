import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import  Header  from  '@/components/header/Header'
import Banner from '@/components/header/Banner'

export default function blog() {
    return (
        <ScrollView className='border-[1px] border-red-300 mx-4 '>
            <Header />
            <Banner />
            <Header />
        </ScrollView>

    )
}