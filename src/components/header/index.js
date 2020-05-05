/* Core */
import React from 'react';

import {
    Container,
    ImageContainer,
    Image,
    Title,
    ButtonContainer,
    ButtonText,
} from './styles';

const Header = ({navigation}) => (
    <Container>
        <ImageContainer>
            <Image source={require('~/assets/emoji_unicorn.png')}/>
        </ImageContainer>
        <Title>
            Seu mundo mais divertido está aqui
        </Title>

        <ButtonContainer onPress={() => navigation.navigate('Login')}>
            <ButtonText>
                Entrar
            </ButtonText>
        </ButtonContainer>
    </Container>
);

export default Header;
