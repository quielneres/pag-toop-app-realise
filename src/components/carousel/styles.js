import styled from 'styled-components/native';
import { fonts, colors, metrics } from '../styles';

export const Container = styled.View``;

export const Overlay = styled.View`
  position: absolute;
  opacity: 0.5;
  background: ${colors.darker};
  width: 100%;
  height: 100%;
`;

export const BannerContent = styled.ImageBackground`
  padding: 0px;
  flex-direction: row;
  width: 100%;
  height: 160px;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BlockText = styled.View`
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  margin-left: 15px;
  color: ${colors.white};
  font-weight: bold;
  font-size: ${fonts.bigger};
`;

export const SubTitle = styled.Text`
  margin-left: 15px;
  color: ${colors.white};
  font-size: ${fonts.regular};

`;

export const ButtonContainer = styled.TouchableOpacity`
  background: ${colors.lucent};
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 10px;
`;

export const ButtonText = styled.Text`
  margin: 5px 10px;
  padding: 0px;
  color: ${colors.white};
  font-size: ${fonts.small}
`;
