import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import {
    Container,
    Overlay,
    BannerContent,
    BlockText,
    Title,
    SubTitle,
    ButtonContainer,
    ButtonText,
} from './styles';

const Banner = ({itens}) => {
    const _renderItem = ({item, index}) => (
        <BannerContent
            source={{uri: item.url}}>
            <Overlay/>

            <BlockText>
                <Title>
                    Carnaval | 2019 {item.a}
                </Title>
                <SubTitle>
                    Ingressos à venda
                </SubTitle>
            </BlockText>

            <ButtonContainer>
                <ButtonText>
                    {item.botao_comprar_texto}
                </ButtonText>
            </ButtonContainer>
        </BannerContent>
    );

    return (
        <Container>
            <Carousel
                ref={(c) => {
                }}
                data={itens}
                renderItem={_renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                autoplay={true}
            />

        </Container>
    );
}

export default Banner
