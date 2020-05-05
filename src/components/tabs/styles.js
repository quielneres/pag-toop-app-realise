import styled from 'styled-components/native';
import { fonts, colors, metrics } from '../styles';

export const Container = styled.View`
  background-color: ${colors.white};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: ${metrics.hairLine}px;
  border-top-color: ${colors.light};
  padding-top: 10px;
  padding-bottom: 3px;
`;

export const Tab = styled.TouchableOpacity`
  align-items: center;
`;

export const TabText = styled.Text`
  line-height: 13px;
  font-size: ${fonts.small};
  color: ${props => props.color};
  margin-bottom: 3px;
`;

TabText.defaultProps = {
  color: `${colors.regular}`,
};
