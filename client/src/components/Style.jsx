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
  margin: 80px auto;
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
  z-index: 1;
  outline: none;
  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }
`;

// Carousel
export const CarouselContainer = styled.div`
display: grid;
margin: 20px auto;
grid-template: 5% 75% 20% / 10% 80% 10%;
height: 95vh;
width: 95vw;
`;

export const DisplayedImage = styled.img`
  height: 100%;
  width: 100%;
  grid-area: 2 / 2 / span 1 / span 1;
`;

export const ArrowButton = styled.button`
  background: rgba(230, 230, 230, 0);
  border-radius: 50%;
  border: 1px #bbb solid;
  width: 40px;
  height: 40px;
  outline: none;
  grid-area: ${props => props.forward ? '2 / 3 / span 1 / span 1' : '2 / 1 / span 1 / span 1'};
  justify-self: ${props => props.forward ? 'end' : 'start'};
  align-self: center;
  padding: 25px;
  padding-right: 30px;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 100;
  color: #666;
  line-height: 3px;
  &:hover {
    cursor: pointer;
    background: rgba(230, 230, 230, 0.4);
  }
`;

export const ImageIndex = styled.p`
  grid-area: 1 / 2 / span 1 / span 1;
  text-align: center;
  margin-top: 30px;
  margin-bottom: -40px;
  font-size: 20px;
  font-weight: 100;
  color: #666;
`;

export const CloseButton = styled.button`
  grid-area: 1 / 1 / span 1 / span 1;
  border: none;
  border-radius: 10px;
  width: 90px;
  height: 35px;
  background-color: #dfdfdf;
  font-size: 14px;
  text-align: center;
  margin-right: 10px;
  margin-top: -30px;
  margin-bottom: 20px;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

