import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
	box-sizing: border-box;
	/* https://developer.mozilla.org/en-US/docs/Web/CSS/font-smooth  */
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}


/* Set core body defaults */
body {
	font-family: "Roboto", sans-serif;
	line-height: 1;
	min-height: 100vh;
	scroll-behavior: smooth;
	text-rendering: optimizeSpeed;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

/* More info: https://bit.ly/2PsCnzk */

html {
	-ms-overflow-style: none;
  overflow-y: scroll;
  scrollbar-width: none;
  overflow-x: hidden;
}
*::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}


*.debug:not(path):not(g) {
	color:                    hsla(210, 100%, 100%, 0.9) !important;
	background:               hsla(210, 100%,  50%, 0.5) !important;
	outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

	box-shadow: none !important;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
	margin: 0;
	vertical-align: baseline;
  border: 0;
	font-size: 100%;
}

/* Remove default padding */
/* Remove list styles on ul, ol elements with a class attribute */
body,
html {
	vertical-align: baseline;
	margin: 0;
  background: #FFF;
	/* remove margin for the main div that Gatsby mounts into */
	>div {
		margin-top: 0;
	}
}


/* A elements that don't have a class get default styles */
a:not([class]) {
	text-decoration-skip-ink: auto;
}


/* Make images easier to work with */
img {
	max-width: 100%;
	display: block;
}
ul[class],
ol[class] {
	padding: 0;
	list-style: none;
}


/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
	font: inherit;
}
button:focus{
outline: none;
}


/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
`;
