import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import {Layout, Menu, Icon, Typography} from 'antd';
import {useStaticQuery, graphql} from 'gatsby';
import GlobalStyles from '../assets/styles/GlobalStyles';
import theme from '../assets/styles/theme';
import SEO from '../components/seo';
import Logo from '../assets/svg/logo.svg';

const ThemeWrapper = styled.div`
  width: 90vw;
  max-width: 1440px;
  margin: 0 5vw;
  @media only screen and (min-width: 1600px) {
    margin: 0 auto;
  }
`;

const {Content, Footer, Sider} = Layout;
const {Title} = Typography;

// eslint-disable-next-line react/prop-types
const LayoutTemplate = ({children}) => {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO title="Home" site={site} />

      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Content style={{padding: '24px 40px 10px', overflow: 'initial'}}>
            <Logo fill="#ffffff" opacity="0.65" />
            <Title style={{color: '#ffffff', opacity: '0.65'}} level={4}>
              Bookmark
            </Title>
          </Content>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="twitter" />
              <span className="nav-text">Titter</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="container" />
              <span className="nav-text">Artykuły</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file-text" />
              <span className="nav-text">Notatki</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{marginLeft: 200, height: '100vh'}}>
          <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
            <div style={{padding: 24, background: '#fff'}}>
              <ThemeWrapper>{children}</ThemeWrapper>
            </div>
          </Content>
          <Footer style={{textAlign: 'left'}}>{site.siteMetadata.description}</Footer>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

LayoutTemplate.defaultProps = {
  children: null,
};

LayoutTemplate.propType = {
  children: PropTypes.node,
};

export default LayoutTemplate;
