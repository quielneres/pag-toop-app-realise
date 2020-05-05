import styled from 'styled-components/native';
import {fonts, colors, metrics} from '../../components/styles';

export const Content = styled.View`
  margin: 20px 15px 5px 15px;
  border: ${metrics.hairLine}px;
  border-radius: 5px;
  border-color: ${colors.lighter};
  padding-bottom: 5px;
`;

export const Header = styled.View`
  margin: 10px 10px 10px 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentTitle = styled.View`
margin-right: 10px;
`;

export const Sessions = styled.Text`
font-size: ${fonts.regular};
  font-weight: bold;
  color: ${colors.light};
`;

export const Caption = styled.Text`
font-size: ${fonts.small};
  color: ${colors.light};
`;

export const Icone = styled.ImageBackground`
height: 30px;
  width: 30px;
`;

export const Body = styled.View`
  margin: 0px 10px 5px 10px;
    flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  padding: 5px 5px 5px 5px;
  border: ${metrics.hairLine}px;
  border-radius: 5px;
  border-color: ${colors.lighter};
  flex: 2;
  margin-right: 5px;
`;

export const DetailsHeader = styled.View`
  flex-direction: row;
    justify-content: space-between;
`;
export const Payment = styled.Text`
  font-size: ${fonts.smaller};
  color: ${colors.light};
  font-weight: bold;
`;
export const Total = styled.Text`
font-size: ${fonts.smaller};
  color: ${colors.light};
  font-weight: bold;

`;
export const DetailsContent = styled.View`
flex-direction: row;
  justify-content: space-between;
`;
export const IconPayment = styled.Text`
font-size: ${fonts.small};
  color: ${colors.regular};
  font-weight: bold;
  line-height: 20px;

`;
export const TotalValue = styled.Text`
font-size: ${fonts.small};
  color: ${colors.regular};
  font-weight: bold;
  line-height: 20px;
`;
export const Detail = styled.TouchableOpacity`
  border: ${metrics.hairLine}px;
  border-radius: 5px;
  border-color: ${colors.lighter};
  height: 45px;
  padding: 13px 5px;
`;
export const TextDetail = styled.Text`
font-size: ${fonts.small};
  color: ${colors.primary};
  font-weight: bold;
`;
export const Footer = styled.View`
  margin: 10px 10px 5px 10px;
`;

export const IconEvent = styled.Image`
height: 55px;
  width: 55px;
  border-radius: 5px;
`;

export const IconSession = styled.Image`
height: 55px;
  width: 55px;
  border-radius: 5px;
  margin-right: 10px;
`;

export const Event = styled.Text`
font-size: ${fonts.big};
  color: ${colors.light};
  font-weight: bold;
`;

export const Session = styled.Text`
font-size: ${fonts.big};
  color: ${colors.regular};
  font-weight: bold;
`;

export const Date = styled.Text`
font-size: ${fonts.regular};
  color: ${colors.lighter};
  font-weight: bold;
`;

export const TypeTicket = styled.Text`
font-size: ${fonts.regular};
  color: ${colors.primary};
  margin-right: 10px;
`;

export const Participant = styled.Text`
font-size: ${fonts.regular};
  color: ${colors.light};
`;
