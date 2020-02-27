import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import {Layout, Typography} from 'antd';
import {useStaticQuery, graphql} from 'gatsby';
import AppContext from '../context';
import GlobalStyles from '../assets/styles/GlobalStyles';
import theme from '../assets/styles/theme';
import SEO from '../components/SEO';
import Logo from '../assets/svg/logo.svg';
import NavMenu from '../components/NavMenu/NavMenu';

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
      <AppContext.Provider>
        <Layout>
          {/* <BrowserRouter> */}
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
            <NavMenu />
          </Sider>
          <Layout style={{marginLeft: 200, height: '100vh'}}>
            <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
              <div style={{padding: 24, background: '#fff'}}>
                <ThemeWrapper>
                  {/* <Switch>
                    <Route exact path="/twitter" component={PageTwitter} />
                    <Route path="/article" component={PageLink} />
                    <Route path="/note" component={PageNote} />
                  </Switch> */}
                  {children}
                </ThemeWrapper>
              </div>
            </Content>
            <Footer style={{textAlign: 'left'}}>{site.siteMetadata.description}</Footer>
          </Layout>
          {/* </BrowserRouter> */}
        </Layout>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

LayoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTemplate;
