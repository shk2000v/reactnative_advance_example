import { FC, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment } from 'src/store/reducer/counter';
import { RootState } from 'src/store/store';
import Text from 'src/atoms/Text/Text';
import { RootStackScreenProps } from 'src/navigation/RootStackNavigator/types';
import { WIDTH } from 'src/constants';
import { PressableButton } from 'src/atoms/Button/Button';
import TextInput from 'src/atoms/TextInput/TextInput';
import useStatusManage from './useStatusManage';
import { getItem, setItem } from 'src/storage/storage';
import Row from 'src/atoms/Row/Row';

const StatusManage: FC<RootStackScreenProps<'StatusManage'>> = ({
  navigation,
  route,
}) => {
  const {
    count,
    onPressCountAdd,
    onPressCountDecrement,
    onPressCountIncrement,
    onPressCountInit,
  } = useStatusManage();

  const [asyncValue, setAsyncValue] = useState('');
  const [stoageValue, setStoageValue] = useState('');

  const onPressSetAsyncStorage = async () => {
    try {
      await setItem('key', asyncValue);
      confirmAsyncValue();
    } catch (e) {
      console.log(e);
    }
  };

  const confirmAsyncValue = async () => {
    const result = await getItem('key');
    setStoageValue(result);
  };
  useEffect(() => {
    confirmAsyncValue();
  });

  return (
    <SafeAreaView style={styles.default}>
      <ScrollView>
        <View style={[styles.wrap]}>
          <Text>Redux-toolkit Count 예시</Text>
          <Text>{count}</Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <PressableButton
              pressableStyle={styles.width80}
              onPress={onPressCountIncrement}
            >
              +1
            </PressableButton>
            <PressableButton
              pressableStyle={styles.width80}
              onPress={onPressCountDecrement}
            >
              -1
            </PressableButton>
            <PressableButton
              pressableStyle={styles.width80}
              onPress={() => onPressCountAdd(2)}
            >
              +2 추가
            </PressableButton>
            <PressableButton
              pressableStyle={styles.width80}
              onPress={() => onPressCountInit()}
            >
              초기화
            </PressableButton>
          </View>
        </View>
        <View style={[styles.wrap]}>
          <Text>{'AsyncStorage 값'}</Text>
          <Row>
            <TextInput
              style={{ borderWidth: 0.3, width: 200 * WIDTH }}
              value={asyncValue}
              onChangeText={(text) => setAsyncValue(text)}
            />
            <PressableButton
              pressableStyle={{ width: 100 * WIDTH, marginLeft: 10 }}
              onPress={() => onPressSetAsyncStorage()}
            >{`'key' 값 등록`}</PressableButton>
          </Row>
        </View>
        <View style={[styles.wrap]}>
          <Text>{`'key' asnyc stoage의 값 : ${stoageValue}`}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatusManage;

const styles = StyleSheet.create({
  default: {
    backgroundColor: '#fff',
    flex: 1,
  },
  width80: {
    width: 80 * WIDTH,
  },
  wrap: {
    padding: 20 * WIDTH,
  },
  input: {
    marginVertical: 20 * WIDTH,
  },
});

type styleProps = {};

const dstyle = ({}: styleProps) => StyleSheet.create({});
