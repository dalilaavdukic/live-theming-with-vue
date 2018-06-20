import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedTitle = styled('div', themeProps)`
  color: ${props => props.color};
  border-bottom: 1px solid ${props => props.color};
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

export default ThemedTitle;