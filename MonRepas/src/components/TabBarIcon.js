import { Text, View, Image } from 'react-native';
import tw from 'twrnc';
import { COLORS } from '../constants/theme';

export const TabBarIcon = ({ name, source, isFocuse,Icon }) => {
  return (
    <View style={tw`justify-center items-center flex-col`}>
      <Image
        source={source}
        resizeMode='contain'
        style={[tw`w-6 h-6`, { tintColor: isFocuse ? COLORS.primary : '#738c94' }]}
      />
      <Text
        style={[
          tw`font-semibold mt-1 text-xs`,
          { color: isFocuse ? COLORS.primary : '#738c94' },
        ]}>
        {name}
      </Text>
    </View>
  );
};
