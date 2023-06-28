import { DesktopOutlined, TableOutlined, UserOutlined } from '@ant-design/icons';

import { MenuItem } from '@/components';

export const MenuData: {
  user: MenuItem[];
  admin: MenuItem[];
} = {
  user: [
    {
      label: '用户',
      key: 'user',
      path: '/user',
      icon: <DesktopOutlined />,
      filepath: 'pages/user/index.tsx',
    },
  ],
  admin: [
    {
      label: '用户',
      key: 'user',
      path: 'user',
      icon: <DesktopOutlined />,
      filepath: 'pages/user/index.tsx',
    },
    {
      label: '基础表格',
      key: 'list-page',
      path: 'list-page',
      icon: <TableOutlined />,
      filepath: 'pages/list-page/index.tsx',
    },
    {
      label: '系统管理',
      key: 'systemManagement',
      path: 'systemManagement',
      icon: <UserOutlined />,
      filepath: 'components/OutletLayoutRouter/index.tsx',
      children: [
        {
          label: '用户管理',
          key: 'userManagement',
          path: 'userManagement',
          filepath: 'pages/systemManagement/userManagement/index.tsx',
        },
        {
          label: '角色管理',
          key: 'roleManagement',
          path: 'roleManagement',
          filepath: 'pages/systemManagement/roleManagement/index.tsx',
        },
      ],
    },
  ],
};
