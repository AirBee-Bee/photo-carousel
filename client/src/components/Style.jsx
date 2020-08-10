import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
`;

export const MainContainer = styled.div`
  display: grid;
  min-width: 800px;
  max-width: 80%;
  height: 400px;
  margin: 20px auto;
  grid-template: ${props => {
    if (props.count > 4) {
      return 'repeat(2, minmax(auto, 50%)) / repeat(4, minmax(auto, 25%));';
    } else if (props.count > 1) {
      return '100% / repeat(2, minmax(auto, 50%));';
    } else {
      return '100% / 100%;';
    }
  }}
  grid-gap: 10px;
  border-radius: 15px;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  ${props => props.primary && css`
    grid-area: ${props => {
      if (props.count > 4) {
        return '1 / 1 / span 2 / span 2;';
      } else {
        return '1 / 1 / span 1 / span 1;';
      }
    }}`
  }
`;