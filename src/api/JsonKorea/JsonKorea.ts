import axios from '..';

export type getUsersType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  province: string;
  city: string;
  district: string;
  street: string;
  zipcode: string;
  createdAt: string;
  updatedAt: string;
}[];

export const getUsers = async () => {
  try {
    const result = (await axios.get<getUsersType>('/users')).data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
