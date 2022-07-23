export type TUserStatus = 'active' | 'inactive';

export type TUser = {
  id: number;
  name: string;
  email: string;
  phone: number;
  address: string;
  status: TUserStatus;
};

export type AddEditFormValue = Omit<TUser, 'id'>;
