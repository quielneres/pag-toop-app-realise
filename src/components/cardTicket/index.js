import React from 'react';

import {
    Content, Header, Caption, ContentTitle, Icone, Sessions,
    Footer, Body, Detail, Details, DetailsContent, DetailsHeader, IconPayment, Payment, TextDetail, Total, TotalValue
} from './styles';

import Button from '../button'
import {fonts, colors, metrics} from '../../components/styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CardTicket = ({title, caption, textbutton, icon, actionButton, actionDetail, type}) => {
    const renderFooter = (type) => {
        switch (true) {
            case type === 'pendente':
                return (
                    <Footer>
                        <Button text={textbutton} action={actionButton}/>
                    </Footer>
                )

            case type === 'cancelado':
                return null

            default:
                return (
                    <Footer>
                        <Button text={textbutton} action={actionButton}/>
                    </Footer>
                )
        }
    }

    let color = colors.light
    let colorRegular = colors.regular
    let colorPrimary = colors.primary
    let opacityIcon = {}

    if (type === 'cancelado') {
        color = colors.lighter
        colorRegular = colors.lighter
        colorPrimary = colors.lighter
        opacityIcon = {backgroundColor: 'black', opacity: 0.2}
    }

    return (
        <Content style={{ backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity:  0.4,
            shadowRadius: 3,
            elevation: 2,}}>
            <Header>
                <ContentTitle>
                    <Sessions style={{color: color}}>
                        {title}
                    </Sessions>

                    <Caption>
                        {caption}
                    </Caption>

                </ContentTitle>

                <Icone
                    source={{uri: icon}} style={opacityIcon}/>
            </Header>

            <Body>
            <Details>
                <DetailsHeader>
                    <Payment style={{color: color}}>
                        Pagamento
                    </Payment>
                    <Total style={{color: color}}>
                        Total
                    </Total>

                </DetailsHeader>

                <DetailsContent>
                    <IconPayment style={{color: colorRegular}}>
                        <Icon name={'credit-card'} size={12}/> Boleto
                    </IconPayment>
                    <TotalValue style={{color: colorRegular}}>
                        R$ 100,00
                    </TotalValue>
                </DetailsContent>
            </Details>

            <Detail action={actionDetail}>
                <TextDetail style={{color: colorPrimary}}>
                    Detalhes
                </TextDetail>
            </Detail>
            </Body>

            {renderFooter(type)}

        </Content>
    )
}

export default CardTicket;
