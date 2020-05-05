import React from 'react';

import {
    Container,
    Text,
} from './styles';

const HeaderTitle = ({title}) => {

    return (
        <Container>
            <Text>
                {title}
            </Text>
        </Container>
    )
};

export default HeaderTitle;
