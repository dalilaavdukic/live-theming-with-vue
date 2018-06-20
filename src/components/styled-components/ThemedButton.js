import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedButton = styled('button', themeProps)`
  background-color: ${props => props.color};
  color: white;
`;

export default ThemedButton;