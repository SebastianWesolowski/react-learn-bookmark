/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.replaceRenderer = ({replaceBodyHTMLString}) => {
  replaceBodyHTMLString('<div id="___gatsby"></div>');
};

// You can delete this file if you're not using it
