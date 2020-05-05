import styled from 'styled-components/native';
import {fonts, colors, metrics} from '../styles';

export const Container = styled.View`
    padding: 10px;
    borderBottomWidth: ${metrics.hairLine}px;
    borderBottomColor: ${colors.lighter},
    background: 'red',
`;

export const Text = styled.Text`
  text-align: center;
  font-size: ${fonts.bigger};
  font-weight: bold;
  line-height: 30px;
`;
