import React, {useEffect, useState} from 'react';

import {
    Container,
    Header,
    Content,
    Body,
    List,
    Right,
    Left,
    Form,
    Text,
    ListItem as ListBase
} from 'native-base';

import {
    Style,
    Image,
    UserName,
    TextDescription,
    TextItens,
    TouchableOpacity,
    View,

} from './styles';

import {deleteUser} from '../../utils';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FooterContent from '../../components/footer';
import SwipeablePanel from 'rn-swipeable-panel';
import {Hoshi} from "react-native-textinput-effects";
import {Alert} from "react-native";
import { ListItem} from 'react-native-elements';

const ls = require('react-native-local-storage');

const Profile = ({navigation}) => {

    const data = [
        {
            title: 'Carteira',
            subtitle: 'Meu saldo QR code',
            route: 'DigitalWallet',
            icon: 'wallet'
        },
        {
            title: 'Forma de pagamentos',
            subtitle: 'Minhas formas de pagamento',
            route: 'CreditCard',
            icon: 'credit-card'
        },
        {
            title: 'Endereços',
            subtitle: 'Meus endereços',
            route: null,
            icon: 'address-card'
        },
        {
            title: 'Extratos',
            subtitle: 'Veja seus extratos',
            route: 'Extrato',
            icon: 'stream'
        },
        {
            title: 'Transferências',
            subtitle: 'Veja suas transferências',
            route: 'Transfer',
            icon: 'exchange-alt'
        },
        {
            title: 'Trocar Senha',
            subtitle: 'Veja seus extratos',
            route: null,
            icon: 'stream'
        },
        {
            title: 'Configurações',
            subtitle: 'Mais configuraçoes',
            route: null,
            icon: 'users-cog'
        }
    ];

    const [user, setUser] = useState([]);
    const [swipeablePanelActive, setSwip] = useState(false);
    const [rulesSwipeable, setRules] = useState([]);
    const [name, setName] = useState('');

    const usuario = [
        {
            name: user.name,
            rules: [
                {
                    name: 'Nome',
                    email: user.name
                },
                {
                    name: 'E-mail',
                    value: user.email,
                }
            ]
        }
    ];
    const componentDidMount = () => {
        this.openPanel();
    };

    const openPanel = () => {
        setSwip(true);
    };

    const closePanel = () => {
        setSwip(false);
    };

    useEffect(() => {
        ls.get('@ListApp:userToken').then(data => {
            setUser(data.user ?? [])
        })

    }, []);

    const url_img = () => {
        return (
            'https://image.freepik.com/vetores-gratis/empresaria-elegante-avatar-feminino_24877-18073.jpg'
        )
    };

    const openForm = (rules) => {
        setRules(rules)
        setSwip(true)
    }

    const render = (menu) => (
        <ListItem>
            <TouchableOpacity onPress={() =>   {menu.route ? navigation.navigate(menu.route) : Alert.alert('Nao implementado')}}>
                <Left style={Style.left}>
                    <View style={Style.leftIcon}>
                        <Icon name={menu.icon} size={18}/>
                    </View>
                    <View style={Style.leftInfo}>
                        <TextItens>{menu.title}</TextItens>
                        <TextDescription>{menu.subtitle}</TextDescription>
                    </View>
                </Left>
                <Right>
                    <Icon name="chevron-right" size={18}/>
                </Right>
            </TouchableOpacity>
        </ListItem>
    );

    const renderRules = (rules) => (
            <Form style={{ padding: 15}}>
                <Hoshi
                    label={rules.name}
                    backgroudColor={'#fff'}
                    borderColor={'#4CB1F7'}
                    borderHeight={1}
                    inputPadding={5}
                    style={{marginBottom: 20, borderBottomWidth: 0.5}}
                    value={name}
                    onChangeText={name => setName(name)}
                />
            </Form>
    );

    const Swipeable = () => (
        <SwipeablePanel
            fullWidth
            isActive={swipeablePanelActive}
            onClose={closePanel}
            onPressCloseButton={closePanel}
        >
            <UserName>asdas</UserName>
            {rulesSwipeable.map((r) => renderRules(r))}

        </SwipeablePanel>
    );

    const renderUser = (usr) => (
        <Header style={Style.header}>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {data_user: user})}>
            <Left>
                <Image source={{uri: url_img()}}/>
            </Left>
            <Body>
            <UserName>{usr.name}</UserName>
            <TextDescription>Editar perfil</TextDescription>
            </Body>
                <Right>
                    <Icon name={'angle-right'} size={24}/>
                </Right>
            </TouchableOpacity>
        </Header>
    )

     return (
        <Container>
            {usuario.map((u) => renderUser(u))}
            <Content>
                <View>
                    {
                        data.map((item, i) => (
                            <ListItem
                                onPress={() =>   {item.route ? navigation.navigate(item.route) : Alert.alert('Nao implementado')}}
                                key={i}
                                title={item.title}
                                subtitle={item.subtitle}
                                leftIcon={{type: 'font-awesome-5' , name: item.icon, size: 18 }}
                                bottomDivider
                                chevron
                            />
                        ))
                    }
                </View>
                <List style={Style.general_list}>
                    <ListBase>
                        <TouchableOpacity
                            onPress={() =>
                                deleteUser().then(() => {
                                    navigation.navigate('Loading');
                                })
                            }
                            style={{
                                width: '100%',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                padding: 10
                            }}>
                            <UserName style={{color: 'red'}}>Sair da conta</UserName>
                            <Right>
                                <Icon name="window-close" size={18}/>
                            </Right>
                        </TouchableOpacity>
                    </ListBase>
                </List>
            </Content>
            <FooterContent navigation={navigation} action={'profile'}/>
            <Swipeable/>
        </Container>
    );
}

export default Profile;
