import React, {useEffect, useState} from 'react';


import {
    Container,
    Left,
    Right,
    CardItem,
    Card,
    Content,
    Header,
    ListItem,
    Body,
    Text,
    Title,
    Button,
    Thumbnail
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from "../../services/api";

const Cart = ({navigation}) => {

    const [id_pedido, setData] = useState(navigation.getParam('id_pedido'));
    const [pedido, setPedido] = useState(null);
    const [amount, setAmount] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {

        api.get('/pedido-detalhe/' + id_pedido)
            .then((res) => {
                setPedido(res.data)
                setAmount(res.data.amount)
                setItems(res.data.items)
            })

    }, []);

    console.log(amount.total)

    const render = (p) => (
        <CardItem style={{flexDirection: 'column', margin: 15, backgroundColor: '#EBEFF2'}}>
            <Card style={{width: '100%'}} transparent>
                <Text style={{padding: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
                    {p.product}
                </Text>
            </Card>
            <Card style={{width: '100%'}} transparent>
                <Text p>
                    Detalhes: {p.detail}
                </Text>
                <Text>
                    Preço: R$ {p.price}
                </Text>
                <Text>
                    Total: R$ {amount.total}
                </Text>
            </Card>
        </CardItem>
    );
    return (
        <Container>
            <Content>
                <Card transparent>
                    {items.map((i) => render(i))}
                    <CardItem style={{
                        flexDirection: 'column',
                        margin: 15,
                        backgroundColor: '#EBEFF2',
                        alignItems: 'flex-start'
                    }}>
                        <Text style={{fontWeight: 'bold'}}>Pagamento:</Text>
                        <Card style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 7,
                            borderRadius: 5,
                            width: '100%'
                        }}>
                            <Left style={{ flexDirection: 'row', alignItems: 'center',}}>
                                <Icon name={'credit-card'} size={25}/>
                                <Text style={{padding: 10,}}>1123 **** **** 9876</Text>
                            </Left>
                            <Right>
                                <Icon name={'check'} size={25} color={'green'}/>
                            </Right>
                        </Card>
                    </CardItem>

                    <CardItem>
                        <Button style={{width: '100%', justifyContent: 'center', borderRadius: 5}}>
                            <Text>Finalizar Pedido</Text>
                        </Button>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

export default Cart;
