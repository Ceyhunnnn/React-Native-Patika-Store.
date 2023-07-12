import React from 'react';
import {Image, Text, View} from 'react-native';
const ProductCard = ({item}) => {
  return (
    <View
      className={`bg-gray-200  flex-1 items-center py-3 rounded-lg m-1 ${
        item.id === 10 ? 'w-full' : 'w-[180px]'
      }`}>
      <Image
        source={{uri: item.imgURL}}
        className="w-[160px] h-[200px] rounded-lg"
      />
      <View className="w-full px-3 mt-4">
        <Text className=" text-lg font-bold">{item.title}</Text>
        <Text className=" font-bold text-gray-500">{item.price}</Text>
        {item.inStock === false && (
          <Text className="text-red-500 font-bold">Stokta Yok</Text>
        )}
      </View>
    </View>
  );
};
export default ProductCard;
