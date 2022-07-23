import { ReturnTypes, Unbox } from '../types';
//import * as creators from './actionCreators';

export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>;

//type hoge = ReturnTypes<typeof creators>;
//type piyo = Unbox<hoge>;
