import styled, { createGlobalStyle, css } from 'styled-components';
import ReactModal from 'react-modal';

// CSS Reset
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
  resize: both;
  position: relative;
  display: grid;
  width: 78vw;
  height: 28vw;
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

// This is for the images that are rendered when the page loads
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
  }}
  `}
  &:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: 0.5s;
  }
`;

export const ShowPhotosButton = styled.button`
  position: absolute;
  background-color: rgb(255, 255, 255);
  border: 1px black solid;
  bottom: 5%;
  right: 2%;
  padding: 8px 13px;
  border-radius: 10px;
  z-index: 10;
  outline: none;
  display: ${props => props.shouldHide ? 'none' : 'inline-block'};
  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }
`;

export const ModalStyles = {
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#fff',
    overflow: 'auto',
    outline: 'none'
  }
};
