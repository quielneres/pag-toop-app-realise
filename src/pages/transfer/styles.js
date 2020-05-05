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

export const ContentUsuario = styled.View`
 margin: 20px;
`;

export const Saldo = styled.View`
  margin: 20px;
  flex-direction: row;
`;

export const Select = styled.Picker`
       
`;

export const TextInput = styled.Text`
       
`;
export const BtnTransferir = styled.Button`
       margin-top: 20px
`;

export const InputValor = styled.TextInput`
       margin-bottom: 50px;
`;
export const ContentValorTransferir = styled.View`
     margin: 20px;
`;

export const Usuario = styled.Text`
    margin: 20px;
    font-size: 15px;
     color: gray;
`;

export const TextoSaldo = styled.Text`
  font-size: 30px;
     font-weight: bold;
     color: gray;
     margin-right: 80px;
`;

export const ValorSaldo = styled.Text`
     font-size: 30px;
     font-weight: bold;
     color: green;
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
