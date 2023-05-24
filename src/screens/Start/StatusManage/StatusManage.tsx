import { FC } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { RootStackScreenProps } from '../../../navigation/RootStackNavigator/types';
import Text from '../../../atoms/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { increment } from '../../../store/reducer/counter';

const StatusManage: FC<RootStackScreenProps<'StatusManage'>> = ({
  navigation,
  route,
}) => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);
  //   (state: RootState) => state.userInfo.allValue.info.mb_id
  // );
  // const plus = () => {
  //   dispatch(increment());
  // };
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView>
        <Text>Count</Text>
        <Text>{count}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatusManage;

const styles = StyleSheet.create({
  default: {},
});

type styleProps = {};

const dstyle = ({}: styleProps) => StyleSheet.create({});
