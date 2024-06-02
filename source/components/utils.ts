import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';
const CustomHeight = 926 - 24; // 812
const CustomWidth = 428; // 375

export const hp = (value: number) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (value: number) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

export const filterArrayByText = (array: {Title: string}[], text: string) => {
  return array.filter(item =>
    item.Title.toLowerCase().includes(text.toLowerCase()),
  );
};

export const truncate = (value: string, length: number) => {
  return `${value.slice(0, length)}${value.length > length ? '...' : ''}`;
};
