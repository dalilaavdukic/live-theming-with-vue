import styled from 'vue-styled-components';

const brandProps = { color: String };

const BrandButton = styled('button', brandProps)`
  background-color: ${props => props.color};
  color: white;
`;

export default BrandButton;