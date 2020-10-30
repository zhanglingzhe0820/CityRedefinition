import {MenuDataItem} from '@ant-design/pro-layout';
import {StateType} from "@/models/user";
import {UserInfoModelState} from "@/models/userInfo";
import {GlobalModelState} from './global';
import {DefaultSettings as SettingModelState} from '../../config/defaultSettings';
import {CollectionModelType} from "@/models/collection";
import {ProjectModelType} from "@/models/project";

export {GlobalModelState, SettingModelState};

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
    userInfo?: boolean;
    commodity?: boolean;
    collection?: boolean;
    project?: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  loading: Loading;
  settings: SettingModelState;
}

export interface Route extends MenuDataItem {
  routes?: Route[];
}
