import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #ffff;
  padding: 40px;
  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.Text`
  text-align: center;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const TextInformation = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #dddddd;
  line-height: 21px;
`;

export const Error = styled.Text`
  color: #e37a7a;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin-bottom: 15px;
  border: 0.5px solid #4CB1F7;
`;

export const Button = styled.TouchableOpacity`
  background-color: #4CB1F7;
  border-radius: 3px;
  height: 44px;
  padding: 0px 20px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 14px;
`;

export const TextSingUp = styled.Text`  
  font-weight: bold;
  font-size: 14px;
`;

export const ContentSingUp = styled.View`  
    flex-direction: row;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;
export const CreateCount = styled.TouchableOpacity`  
   margin-left: 10px;
`;
