import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import {Layout} from 'antd';
import {useStaticQuery, graphql} from 'gatsby';
import AppContext from '../context';
import GlobalStyles from '../assets/styles/GlobalStyles';
import theme from '../assets/styles/theme';
import SEO from '../components/SEO';
import SideBar from '../components/SideBar/SideBar';

const ThemeWrapper = styled.div`
  width: 90vw;
  max-width: 1440px;
  margin: 0 5vw;
  @media only screen and (min-width: 1600px) {
    margin: 0 auto;
  }
`;

const {Content, Footer} = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
  margin-left: 200px;
`;
const StyledContent = styled(Content)`
  margin: 24px 16px 0;
  overflow: initial;
  padding: 24px;
  background: #fff;
`;
const StyledFooter = styled(Footer)`
  text-align: left;
`;

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
          <SideBar />
          <StyledLayout>
            <StyledContent>
              <ThemeWrapper>{children}</ThemeWrapper>
            </StyledContent>
            <StyledFooter>{site.siteMetadata.description}</StyledFooter>
          </StyledLayout>
        </Layout>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

LayoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTemplate;
