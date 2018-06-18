import styled from 'vue-styled-components';

const brandProps = { color: String };

const BrandTitle = styled('div', brandProps)`
  color: ${props => props.color};
  border-bottom: 1px solid ${props => props.color};
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

export default BrandTitle;