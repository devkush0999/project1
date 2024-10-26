import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import DATA from './DATA'






// const { width } = Dimensions.get('window');
// const itemWidth = (width - 40) / 2; 
export default function Banner() {

    return (
        <View className='border-[1px] mb-10'>
            <View className='flex-row justify-between h-[30px]'>
                <Text>Blog </Text>
                <View className='flex-row'>
                    <TouchableOpacity className='mx-2'>
                        <Text className='w-[53px] h-[26px] text-xs text-[#6C5DD3] my-2 '>Add new </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text className='w-[74px]  rounded-[10px] bg-[#6C5DD3] text-white text-sm text-center justify-center p-1 h-[30px]'>Preview </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <ScrollView showsVerticalScrollIndicator={true} className='flex-2'>
                <View className='my-5 mx-2 justify-between flex-row  flex-wrap gap-6 '>
                    <View>
                        <View className='border-[1px] w-[165px] h-[232px] rounded-xl '>
                            <Image source={{ uri: 'https://picsum.photos/700' }} width={94} height={69} />
                            <Text >Title</Text>
                        </View>
                    </View>
                    <View className='border-[1px] w-[165px] h-[232px] rounded-xl shadow-[2px]'>
                        <Image className="mx-10 my-2" source={{ uri: 'https://picsum.photos/700' }} width={94} height={69} />
                        <Text >Title</Text>
                    </View>
                    <View>
                        <View className='border-[1px] w-[165px] h-[232px] rounded-xl '>
                            <Image source={{ uri: 'https://picsum.photos/700' }} width={94} height={69} />
                            <Text >Title</Text>
                        </View>
                    </View>
                    <View className='border-[1px] w-[165px] h-[232px] rounded-xl shadow-[2px]'>
                        <Image className="mx-10 my-2" source={{ uri: 'https://picsum.photos/700' }} width={94} height={69} />
                        <Text >Title</Text>
                    </View>
                    <View>
                        <View className='border-[1px] w-[165px] h-[232px] rounded-xl '>
                            <Image source={{ uri: 'https://picsum.photos/700' }} width={94} height={69} />
                            <Text >Title</Text>
                        </View>
                    </View>
                    {DATA.map((item,index)=>(<View key={index} className='border-[1px] w-[165px] h-[232px] rounded-xl my-5 ml-2 mr-7 justify-between '>
                        {/* <Image source={{ uri: {item.} }} width={94} height={69} /> */}
                        <Image source={require('@/components/header/DATA')} width={94} height={69} />
                        <Text >{item.title}</Text>

                        <Text className='text-start text-sm px-2 font-serif'>{item.discription}</Text>
                        <Text className='text-start p-2 font-serif'>{item.date}</Text>

                    </View> ))}
                    

                </View>
            </ScrollView>
        </View>
    )
}