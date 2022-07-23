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

export type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never;
};

export type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
