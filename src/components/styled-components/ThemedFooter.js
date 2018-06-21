import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedFooter = styled('div', themeProps)`
  background: ${props => props.color};
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: 45px;
`;

export default ThemedFooter;