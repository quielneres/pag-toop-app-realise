import styled from 'styled-components/native';
import {fonts, colors, metrics} from '../../components/styles';

export const Action = styled.TouchableOpacity`
flex: 1;
`;

export const Button = styled.Text`
  padding: 10px 0px;
  text-align: center;
  border-radius: 5px;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: ${fonts.smaller};
  font-weight: bold;
`;
