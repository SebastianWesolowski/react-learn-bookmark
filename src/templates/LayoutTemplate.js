import React from 'react';
import PropTypes from 'prop-types';
import styled, {ThemeProvider} from 'styled-components';
import {Layout} from 'antd';
// import {useStaticQuery, graphql} from 'gatsby';
import {StaticQuery, graphql} from 'gatsby';
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

class LayoutTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedPage: '1'};
  }

  changePage = (e, newItem) => {
    e.preventDefault();

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    this.closeModal();
  };

  render() {
    const contextElement = {
      ...this.state,
    };

    const LayoutTemplateContent = ({data}) => {
      const {children} = this.props;
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <SEO title="Home" site={data.site} />
          <AppContext.Provider value={contextElement}>
            <Layout>
              <SideBar />
              <StyledLayout>
                <StyledContent>
                  <ThemeWrapper>{children}</ThemeWrapper>
                </StyledContent>
                <StyledFooter>{data.site.siteMetadata.description}</StyledFooter>
              </StyledLayout>
            </Layout>
          </AppContext.Provider>
        </ThemeProvider>
      );
    };

    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
                description
                author
              }
            }
          }
        `}
        render={data => <LayoutTemplateContent data={data} />}
      />
    );
  }
}

// const LayoutTemplate = ({children}) => {
//   const {site} = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//           }
//         }
//       }
//     `
//   );

//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyles />
//       <SEO title="Home" site={site} />
//       <AppContext.Provider value={contextElement}>
//         <Layout>
//           <SideBar />
//           <StyledLayout>
//             <StyledContent>
//               <ThemeWrapper>{children}</ThemeWrapper>
//             </StyledContent>
//             <StyledFooter>{site.siteMetadata.description}</StyledFooter>
//           </StyledLayout>
//         </Layout>
//       </AppContext.Provider>
//     </ThemeProvider>
//   );
// };

LayoutTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutTemplate;
