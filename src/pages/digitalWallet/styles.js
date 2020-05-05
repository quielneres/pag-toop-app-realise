import styled from 'styled-components/native';
import {fonts, colors, metrics} from '../../components/styles';

export const Content = styled.View`
  flex: 1;
  border: ${metrics.hairLine}px;
  border-radius: 5px;
  border-color: ${colors.lighter};
  padding-bottom: 5px;
  background-color: white
`;

export const ContantSaldo = styled.View`
  margin: 10px;
  background-color: white
  padding: 40px;
  justify-content: center;
 
`;
export const Link = styled.TouchableOpacity`
  
`;



export const TextSaldo = styled.Text`
     font-size: 30px;
     font-weight: bold;
     color: green;
`;

export const Header = styled.View`
padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentTitle = styled.View`
margin-right: 10px;
`;

export const Title = styled.Text`
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
  margin: 0px 5px 5px 5px;
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
  margin: 7px 5px 5px 5px;
`;
