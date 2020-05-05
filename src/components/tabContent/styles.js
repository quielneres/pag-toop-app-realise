import styled from 'styled-components/native';
import {fonts, colors, metrics} from '../styles';

export const Container = styled.ScrollView`
`;

export const TabContainer = styled.ScrollView.attrs({
    horizontal: true,
})`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Tab = styled.TouchableOpacity`
`;

export const Title = styled.Text`
  width: 80px;
  text-align: center;
  font-size: ${fonts.big};
  color: ${colors.darker};
  font-weight: bold;
  margin: 0 15px;
  borderBottomWidth: 2px;
  borderBottomColor: ${colors.primary};
  line-height: 30px;
`;

export const Content = styled.View`
`;

export const Header = styled.View`
  flex-direction: row;
  height: 40px;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;

`;
export const Icon = styled.View`

`;
export const Info = styled.View`
  margin-left: 10px;
  height: 40px;
`;
export const More = styled.TouchableOpacity`
  height: 40px;
  width: 70px;
  align-self: center; 
  position: absolute;
  right: 0px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TitleEvento = styled.Text`
  font-weight: bold;  
  font-size: ${fonts.big};
  line-height: 20px;
`;

export const Caption = styled.Text`
  color: ${colors.light};
  font-size: ${fonts.small};
  line-height: 20px;
`;

export const ButtonText = styled.Text`
  border-radius: 5px;
  border: 1px;
  text-align: center;
  margin-top: 4px;
  padding: 7px 5px;
  color: ${colors.primary};
  font-size: ${fonts.smaller};
  border-color: ${colors.primary};
  font-weight: bold;
`;

export const Galeria = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
  margin-left: 0px;
`;

export const Foto = styled.Image`
  width: 180px;
  height: 120px;
  border-radius: 5px;
  margin-right: 7px;
  margin-bottom: 10px;
`;

export const BotaoComprar = styled.TouchableOpacity`
  margin: 0px 15px 20px 15px;
`;

export const TextBotaoComprar = styled.Text`
  padding: 7px 0px;
  text-align: center;
  border-radius: 5px;
  background-color: ${colors.lucent};
  color: ${colors.white};
  font-size: ${fonts.small};
`;
