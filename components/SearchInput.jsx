
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";


import { icons } from "../constants";
const SearchInput= ({
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
    }) => {
    return (
    <View className="w-full flex-row">
        <View className="w-[85%] h-10 px-12 bg-slate-50 rounded-2xl border-2 border-gray-300 focus:border-secondary items-center flex-row"> 
            <Image
            source={icons.search}
            className="w-5 h-5 right-8"
            tintColor={'black'}
            resizeMode='contain'
            />  
            <TextInput
            className="text-base flex-1 text-black-100 text-psemibold"
            value={value}
            placeholder="Ürün ara"
            placeholderTextColor="#7B7B8B"
            onChangeText={handleChangeText}  
            />
        </View>
     <View className="w-[15%] h-10 items-center justify-center">
            <TouchableOpacity
            activeOpacity={0.2}>
                <Image 
                    source={icons.category}
                    className="w-10 h-10"
                    tintColor='black'
                    resizeMode="contaion"
                />
            </TouchableOpacity>
        </View>
    </View>            
    );
};

export default SearchInput;