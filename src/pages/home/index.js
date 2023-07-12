/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Text, View, TextInput, FlatList} from 'react-native';
import Config from '../../config';
import Data from './../../data/store.json';
import ProductCard from '../../components/productCard';
const Home = () => {
  const RenderProduct = ({item}) => <ProductCard item={item} />;
  return (
    <View className="px-2">
      <View className="py-3">
        <Text className="text-purple-800 text-2xl font-bold">
          {Config.app.name}
        </Text>
        <TextInput
          className="bg-gray-300 h-[40px] rounded-md px-3 mt-2 w-full "
          placeholder="Ara..."
          inputMode="text"
        />
      </View>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Data}
        renderItem={RenderProduct}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Home;
