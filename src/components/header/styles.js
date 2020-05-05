import styled from 'styled-components/native';
import { fonts, colors, metrics } from '../styles';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  border-bottom-width: ${metrics.hairLine}px;
  border-bottom-color: ${colors.light};
  padding: 0px 0px 0px 15px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  border: ${metrics.hairLine}px;
  border-radius: 25px;
  width: 45px;
  height:  45px;
  justify-content: center;
  align-items: center;
  background: #F3F3F3;
  border-color: #b7b7b7;
`;

export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Title = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${colors.regular};
  margin-left: 10px;
  width: 180px;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-self: center;
  position: absolute;
  right: 15px;
`;

export const ButtonText = styled.Text`
  font-size: ${fonts.big}px;
  font-weight: bold;
  color: ${colors.primary};
`;
