import { FC } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useQuery } from 'react-query';
import { getUsers } from 'src/api/JsonKorea/JsonKorea';
import { PressableButton } from 'src/atoms/Button/Button';
import Text from 'src/atoms/Text/Text';
import { WIDTH } from 'src/constants';
import { RootStackScreenProps } from 'src/navigation/RootStackNavigator/types';

const ApiTest: FC<RootStackScreenProps<'ApiTest'>> = ({
  navigation,
  route,
}) => {
  const { data: usersData, isLoading } = useQuery(
    ['korea-json-users'],
    getUsers,
    {
      onSuccess: (item) => {
        console.log('[Success] : ', item);
      },
      onError: (err) => {
        console.log('[Error] : ', err);
      },
    }
  );

  return (
    <SafeAreaView style={[styles.default]}>
      <View style={[styles.pd20]}>
        <Text>ApiTest</Text>
        <Text size={16}>{'https://koreanjson.com/users 를 Get 요청'}</Text>
        {isLoading ? <Text>API Loading...</Text> : undefined}
        {usersData?.map((v, index) => {
          return (
            <View key={index}>
              <Text size={14} style={styles.mv10}>{`[아이디] : ${v.id}`}</Text>
              <PressableButton
                pressableStyle={{ width: 150 * WIDTH }}
              >{`${v.name} 유저 정보`}</PressableButton>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default ApiTest;

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20 * WIDTH,
  },
  pd20: {
    padding: 20 * WIDTH,
  },
  mv10: {
    marginVertical: 10 * WIDTH,
  },
});
