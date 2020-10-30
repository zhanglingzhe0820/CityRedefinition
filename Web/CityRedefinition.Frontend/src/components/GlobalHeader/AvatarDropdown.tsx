import {LogoutOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Menu, Modal, Spin, Alert, Button} from 'antd';
import {ClickParam} from 'antd/es/menu';
import React from 'react';
import {history, ConnectProps, connect} from 'umi';
import {ConnectState} from '@/models/connect';
import {UserInfoModelState} from '@/models/userInfo';
import {StateType} from "@/models/user";
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

export interface GlobalHeaderRightProps extends Partial<ConnectProps> {
}

class AvatarDropdown extends React.Component<GlobalHeaderRightProps> {
  state = {
    phone: '',
    captcha: '',
    showLogin: false
  }

  render(): React.ReactNode {
    return (<HeaderDropdown overlay={null}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar}
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                  alt="avatar"/>
          <span className={styles.name}>城市重定义</span>
        </span>
    </HeaderDropdown>);
  }
}

export default AvatarDropdown;
