import React from 'react';

import {Container, Content, Tab, Tabs,} from 'native-base';
import Disponivel from './estatus/disponivel';
import Liberar from './estatus/liberar';
import Bloqueado from './estatus/liberar';
import FooterContent from "../../components/footer";

const Extract = ({navigation}) => {
    return (
        <Container>
            <Content>
                <Tabs>
                    <Tab heading="Disponivel">
                        <Disponivel/>
                    </Tab>
                    <Tab heading="A liberar">
                        <Liberar/>
                    </Tab>
                    <Tab heading="Bloqueado">
                        <Bloqueado/>
                    </Tab>
                </Tabs>
            </Content>
            <FooterContent navigation={navigation}/>
        </Container>
    );
};

export default Extract;

