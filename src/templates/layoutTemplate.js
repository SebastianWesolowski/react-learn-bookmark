import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../assets/styles/GlobalStyles';
import theme from '../assets/styles/theme';
import SEO from '../components/seo';

const ThemeWrapper = styled.div`
  width: 90vw;
  max-width: 1440px;
  margin: 0 5vw;
  @media only screen and (min-width: 1600px) {
    margin: 0 auto;
  }
`;

// eslint-disable-next-line react/prop-types
const LayoutTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <SEO title="Home" />
      <ThemeWrapper>{children}</ThemeWrapper>
    </>
  </ThemeProvider>
);

export default LayoutTemplate;
