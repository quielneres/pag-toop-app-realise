/* Core */
import React from 'react';

import {
    Container,
    TabContainer,
    Tab,
    Title,
    Content,
    Header, Icon, Info, More, Image,
    TitleEvento, Caption, ButtonText, Foto, Galeria, BotaoComprar
} from './styles';

import Button from "../button";

const TabContent = ({itens}) => {
    const render = (evento) => {
        return (
            <Content>
                <Header>
                    <Image source={{uri: evento.icone}}/>
                    <Info>
                        <TitleEvento>
                            {evento.nome}
                        </TitleEvento>
                        <Caption>
                            {evento.resumo}
                        </Caption>
                    </Info>
                    <More>
                        <ButtonText>
                            Veja mais
                        </ButtonText>
                    </More>
                </Header>

                <Galeria horizontal={true} showsHorizontalScrollIndicator={false}>
                    {evento.fotos.map((item) => <Foto source={{uri: item.url}}/>)}
                </Galeria>

                <BotaoComprar>
                    <Button text={evento.botao_comprar_texto} type={'lucent'}/>
                </BotaoComprar>
            </Content>
        )
    }

    return (
        <Container bounces={false}>
            <TabContainer>
                <Tab>
                    <Title>
                        Eventos
                    </Title>
                </Tab>
            </TabContainer>

            {itens.map((e) => render(e))}
        </Container>)
}

export default TabContent;
