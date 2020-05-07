import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';

import Example from './pages/Example';
import Welcome from './pages/welcome';
import Login from './pages/singIn';
import SingUp from './pages/singUp';
import AuthLoadingScreen from './pages/AuthLoadingScreen';

import Home from './pages/home';
import Profile from './pages/profile/index';
import EditProfile from './pages/profile/edit';
import ToPay from './pages/toPay';
import RechargeCell from './pages/toPay/rechargeCell';
import Recharge from './pages/toPay/rechargeCell/recharge';
import RechargePay from './pages/toPay/rechargeCell/rechargePay';
import PayBill from './pages/toPay/PayBill';
import ReadCode from './pages/toPay/PayBill/readCode';
import WriteBarcode from './pages/toPay/PayBill/writeBarcode';
import PaymentOptions from './pages/paymentOptions';
import ToDemand from './pages/toDemand';
import ProductList from './pages/toDemand/products';
import CheckoutProduct from './pages/toDemand/checkout';
import DigitalWallet from './pages/digitalWallet';
import CreditCard from './pages/creditCard';
import CreditCardAdd from './pages/creditCard/add';
import OrderDetail from './pages/extract/detail';
import EnterValue from './pages/enterValue';
import Response from './pages/enterValue/response';
import Transfer from './pages/transfer';
import SendMoney from './pages/toPay/sendMoney';


//DigitalWallet
// import CartDigital from './pages/carteiraDigital';
// import ExtratoHome from './pages/extrato';
// import OrderDetail from './pages/extrato/detail';
// import Detalhes from './pages/home/detalhes';
// import SaqueHome from './pages/saque';
// import CartoesHome from './pages/cartoes';
// import TransferirHome from './pages/transferir';
// import DescontosHome from './pages/descontos';
// import PagarHome from './pages/pagar';
// import CobrarHome from './pages/cobrar';
// import CheckoutHome from './pages/cobrar/checkout';
// import CartScreen from './pages/cobrar/cart';
// import ProductHome from './pages/cobrar/produtos/ProductList';
// import GerarBoletoHome from './pages/gerarBoleto/Index';
// import AddCardHome from './pages/cartoes/add/addCard';
// import ClientCountHome from './pages/contaCilente';
//
//
// import RechargeCell from "./pages/pagar/rechargeCell";
// import Recharge from "./pages/pagar/rechargeCell/recharge";
// import RechargePay from "./pages/pagar/rechargeCell/rechargePay";
// import PayBill from "./pages/pagar/PayBill";
// import ReadCode from "./pages/pagar/PayBill/readCode";
//
// const AuthStack = createStackNavigator({
//     Landing: {
//         screen: Welcome,
//         navigationOptions: {
//             headerShown: false
//         },
//     },
//     Login: {
//         screen: Login,
//         navigationOptions: {
//             headerShown: false
//         },
//     },
//     SignIn: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Sign In',
//         },
//     },
//     CreateAccount: {
//         screen: SingUp,
//         navigationOptions: {
//             headerTitle: 'Create Account',
//         },
//     },
//     ForgotPassword: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Forgot Password',
//         },
//     },
//     ResetPassword: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Reset Password',
//         },
//     },
//     App: {
//         screen: Home,
//         navigationOptions: {
//             headerTitle: 'Bem vindo',
//         },
//     },
// });
//
// // const HomeScreen = createStackNavigator({
// // });
//
//
// const FeedStack = createStackNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             headerTitle: 'Home',
//         },
//     },
//     Details: {
//         screen: Detalhes,
//         navigationOptions: {
//             headerTitle: 'Detalhes',
//         },
//     },
// });
//
// const SearchStack = createStackNavigator({
//     Search: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Search',
//         },
//     },
//     // Details: {
//     //     screen: Example,
//     //     navigationOptions: {
//     //         headerTitle: 'Details',
//     //     },
//     // },
// });
//
// const DiscoverStack = createStackNavigator({
//     Discover: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Discover',
//         },
//     },
//     // Details: {
//     //     screen: Detalhes,
//     //     navigationOptions: {
//     //         headerTitle: 'Detalhes',
//     //     },
//     // },
// });
//
// const MainTabs = createBottomTabNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             headerTitle: 'Home',
//         },
//     },
//     // Details: {
//     //     screen: Detalhes,
//     //     navigationOptions: {
//     //         headerTitle: 'Detalhes',
//     //     },
//     // },
//     Feed: {
//         screen: FeedStack,
//         navigationOptions: {
//             tabBarLabel: 'Home',
//         },
//     },
//     Search: {
//         screen: SearchStack,
//         navigationOptions: {
//             tabBarLabel: 'Search',
//         },
//     },
//     Discover: {
//         screen: DiscoverStack,
//         navigationOptions: {
//             tabBarLabel: 'Discover',
//         },
//     },
// });
//
// const SettingsStack = createStackNavigator({
//     SettingsList: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Settings List',
//         },
//     },
//     Profile: {
//         screen: Example,
//         navigationOptions: {
//             headerTitle: 'Profile',
//         },
//     },Home
// });content_header
//
// const CarteiraDigital = createStackNavigator({
//     CarteiraDigital: {
//         screen: CartDigital,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Carteira Digital',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     Saque: {
//         screen: SaqueHome,
//         navigationOptions: {
//             headerTitle: 'Saque',
//         },
//     },
//     Transferir: {
//         screen: TransferirHome,
//         navigationOptions: {
//             headerTitle: 'Transferir',
//         },
//     },
// });
// const Extrato = createStackNavigator({
//     Extrato: {
//         screen: ExtratoHome,
//         navigationOptions: {
//             headerShown: false,
//         },
//     },
//     OrderDetail: {
//         screen: OrderDetail,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Detalhe pedido',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     }
// });

// const Profile = createStackNavigator({
//     Perfil: {
//         screen: Perfil,
//         navigationOptions: {
//             headerShown: false,
//         },
//     },
//     EditProfile: {
//         screen: EditProfile,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Editar Perfil',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     ClientCount: {
//         screen: ClientCountHome,
//         navigationOptions: {
//             headerTitleAlign: 'center',
//             headerTitle: 'Conta Cliente'
//         },
//     }
// });

//
// const Cartoes = createStackNavigator({
//     Cartoes: {
//         screen: CartoesHome,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Cartões',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     AddCard: {
//         screen: AddCardHome,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Novo cartão',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
// });
//
// const Descontos = createStackNavigator({
//     Descontos: {
//         screen: DescontosHome,
//         navigationOptions: {
//             headerTitle: 'Descontos',
//         },
//     },
// });
// g
// const Pagar = createStackNavigator({
//     Pagar: {
//         screen: PagarHome,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Pagamentos',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//
//     RechargeCell: {
//         screen: RechargeCell,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Recarregue seu celular',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }), PayBill
//     },
//     Recharge: {
//         screen: Recharge,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Recarga',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     RechargePay: {
//         screen: RechargePay,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Recarga Pagar',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     PayBill: {
//         screen: PayBill,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Pagar Contas',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     ReadCode: {
//         screen: ReadCode,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Ler codigo',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
// });
//
// const Cobrar = createStackNavigator({
//     Cobrar: {
//         screen: CobrarHome,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Opções para cobrar',Perfil
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     ProductList: {
//         screen: ProductHome,
//         navigationOptions: {
//             headerTitle: 'Lista de produtos',
//         },
//     },
//     GerarBoleto: {
//         screen: GerarBoletoHome,
//         navigationOptions: ({navigation}) => ({
//             headerTitle: 'Boleto',
//             headerTitleAlign: 'center',
//             headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
//         }),
//     },
//     Checkout: {
//         screen: CheckoutHome,
//         navigationOptions: {
//             headerTitle: 'Checkout',
//             headerTitleAlign: 'center',
//         },
//     },
//     Cart: {
//         screen: CartScreen,
//         navigationOptions: {
//             headerTitle: 'Carrinho',
//             headerTitleAlign: 'center',
//         },
//     },
// });
//
// const HomeScreen = createStackNavigator({
//     Home: {
//         screen: Home,
//         navigationOptions: {
//             headerShown: false
//         },
//     },
//     Details: {
//         screen: Detalhes,
//         navigationOptions: {
//             headerTitle: 'Detalhes',
//         },
//     },
// });
//
//


const App = createStackNavigator({
    Loading: {
        screen: AuthLoadingScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    Auth: {
        screen: Welcome,
        navigationOptions: {
            headerShown: false
        },
    }
    ,
    Login: {
        screen: Login,
    },
    CreateAccount: {
        screen: SingUp,
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        },
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Editar Perfil',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    ToPay: {
        screen: ToPay,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Pagamentos',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    RechargeCell: {
        screen: RechargeCell,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Recarga de celular',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    Recharge: {
        screen: Recharge,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Recarga de celular',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    RechargePay: {
        screen: RechargePay,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Finalizar',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    PayBill: {
        screen: PayBill,
        navigationOptions: {
            headerShown: false
        },
        // navigationOptions: ({navigation}) => ({
        //     headerTitle: 'Pagar contas',
        //     headerTitleAlign: 'center',
        //     headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        // }),
    },
    ReadCode: {
        screen: ReadCode,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'ReadCode',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    WriteBarcode: {
        screen: WriteBarcode,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Pagar conta',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    PaymentOptions: {
        screen: PaymentOptions,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Finalizar',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    ToDemand: {
        screen: ToDemand,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Cobranças',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    ProductList: {
        screen: ProductList,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Produtos',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    CheckoutProduct: {
        screen: CheckoutProduct,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Produtos',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    DigitalWallet: {
        screen: DigitalWallet,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Carteira Digital',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    CreditCard: {
        screen: CreditCard,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Meus Cartoes',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    CreditCardAdd: {
        screen: CreditCardAdd,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Adicionar Cartoes',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    OrderDetail: {
        screen: OrderDetail,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Detalhe',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    EnterValue: {
        screen: EnterValue,
        navigationOptions:{
            headerShown: false
        }
    },
    Response: {
        screen: Response,
        navigationOptions:{
            headerShown: false
        }
    },
    Transfer: {
        screen: Transfer,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Transferir',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
    SendMoney: {
        screen: SendMoney,
        navigationOptions: ({navigation}) => ({
            headerTitle: 'Enviar dinheiro',
            headerTitleAlign: 'center',
            headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
        }),
    },
});
export default createAppContainer(App);
