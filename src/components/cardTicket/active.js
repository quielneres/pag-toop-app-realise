import React from 'react';

import {
    Content,
    Header,
    ContentTitle,
    IconEvent,
    IconSession,
    Event,
    Session,
    Date,
    Details,
    DetailsHeader,
    Body, TypeTicket, Participant, Footer
} from './styles';

import {View} from 'react-native'
import Button from '../button'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from "../styles";

const CardTicketActive = ({event, session, date, icon, iconSession}) => {
    return (
        <Content style={{
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.4,
            shadowRadius: 3,
            elevation: 2,
        }}>
            <Header>
                <ContentTitle style={{flexDirection: 'row'}}>
                    <IconSession
                        source={{uri: iconSession}}/>

                    <View>
                        <Event>
                            {event}
                        </Event>

                        <Session>
                            {session}
                        </Session>

                        <Date>
                            {date}
                        </Date>
                    </View>

                </ContentTitle>

                <IconEvent
                    source={{uri: icon}}/>
            </Header>

            <Body>
            <Details style={{marginRight:0}}>
                <DetailsHeader style={{padding: 5, paddingBottom: 0, justifyContent: 'flex-start'}}>
                    <TypeTicket>
                        Normal
                    </TypeTicket>
                    <Participant>
                        Glauber Kyves de Oliveira <Icon name="help-circle-outline" size={14} color={colors.primary} />
                    </Participant>
                </DetailsHeader>
                <DetailsHeader style={{padding: 5, paddingBottom: 0, justifyContent: 'flex-start'}}>
                    <TypeTicket>
                        Normal
                    </TypeTicket>
                    <Participant>
                        Glauber Kyves de Oliveira <Icon name="help-circle-outline" size={14} color={colors.primary} />
                    </Participant>
                </DetailsHeader>
                <DetailsHeader style={{padding: 5, paddingBottom: 0, justifyContent: 'flex-start'}}>
                    <TypeTicket>
                        Normal
                    </TypeTicket>
                    <Participant>
                        Glauber Kyves de Oliveira <Icon name="help-circle-outline" size={14} color={colors.primary} />
                    </Participant>
                </DetailsHeader>
            </Details>
            </Body>

            <Footer style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Button text={'Meu QR Code'} action={'actionButton'} type={'regular'}
                        icon={<Icon name="qrcode-scan" size={18} color={colors.primary} />}/>
                        <View style={{margin:5}}/>
                <Button text={'Cancelar Ingresso'} action={'actionButton'} type={'regular'}/>
            </Footer>
        </Content>
    )
}

export default CardTicketActive;
