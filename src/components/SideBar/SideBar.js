import React from 'react';
import {Layout, Typography} from 'antd';
import styled from 'styled-components';
import NavMenu from '../NavMenu/NavMenu';
import Logo from '../../assets/svg/logo.svg';

const {Content, Sider} = Layout;
const {Title} = Typography;

const StyledSider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;
const StyledContent = styled(Content)`
  padding: 24px 40px 10px;
  overflow: initial;
`;

const SideBar = () => {
  return (
    <StyledSider>
      <StyledContent>
        <Logo fill="#ffffff" opacity="0.65" />
        <Title style={{color: '#ffffff', opacity: '0.65'}} level={4}>
          Bookmark
        </Title>
      </StyledContent>
      <NavMenu />
    </StyledSider>
  );
};

export default SideBar;
