import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DropdownComponent = () => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const options = [
    { id: 1, label: 'Edit' },
    { id: 2, label: 'Duplicate' },
    { id: 3, label: 'Archive' }
    // { id: 4, label: 'Move' },
    // { id: 5, label: 'Share' },
    // { id: 6, label: 'Add to favorites' },
    // { id: 7, label: 'Delete' }
  ];

  return (
    <View className="flex items-start">
        <View className='flex-row justify-between gap-[80px]'>
      <TouchableOpacity onPress={toggleDropdown} className="flex-row gap-12 items-center px-2 w-[181px] h-[36px] py-2 bg-gray-200 rounded-lg border border-gray-300">
        <Text className="mx-5 text-sm">afterglow </Text>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={toggleDropdown} className="flex-row items-center my-3 h-[20px] w-[125px] m-2 ">
        <Text className="mr-1 w-[51px] h-[18px] text-xs">Scenario </Text>
        <Text className=" w-[42px] h-[18px] text-xs">Default  </Text>
        <MaterialIcons name="arrow-drop-down" size={20} color="black" />
      </TouchableOpacity>
      </View>

      {/* Modal for Dropdown Options */}
      <Modal
        transparent={true}
        visible={visible}
        animationType="fade"
        onRequestClose={toggleDropdown}
      >
        <Pressable className="absolute inset-0 bg-black/50" onPress={toggleDropdown} />
        <View className="absolute right-8 top-24 w-52 bg-white rounded-lg shadow-lg">
          {options.map(option => (
            <TouchableOpacity key={option.id} className="p-4 border-b border-gray-200" onPress={() => {
              console.log(option.label);
              toggleDropdown();
            }}>
              <Text className="text-lg">{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default DropdownComponent;
