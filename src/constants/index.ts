import { Dimensions } from 'react-native';

// 기기별 설계의도 대로의 비율을 맞추기 위한 상수
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

export const WIDTH = WINDOW_WIDTH / 414;
export const HEIGHT = WINDOW_HEIGHT / 896;

// export const PRIMARY = '';
export const PRIMARY = '#f94c63';

type fontProps = 'EB' | 'B' | 'R' | 'L';

export const FONT = (bold: fontProps) => {
  const fontFamily = `NanumSquare${bold}`;
  return fontFamily;
};
