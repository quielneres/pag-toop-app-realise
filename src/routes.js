import {createAppContainer, createStackNavigator, HeaderBackButton} from 'react-navigation';
import React from 'react';
import colors from "./components/styles/colors";
import HeaderTitle from "./components/headerTitle";
import {translate} from './services/language'

import Home from './pages/home';
import Profile from './screens/Profile';
import EditProfile from './screens/Profile/edit';
import Tickets from './screens/Tickets';
import QRCode from './screens/Tickets/QRCode';
import Login from './screens/Login';
import HeaderLogo from './components/headerLogo';
import Friends from './screens/Profile/Friends';
import Preferred from './screens/Profile/Preferred';
import PaymentMethods from './screens/Profile/Payment';
import CreateCard from './screens/Profile/Payment/createCard';
import ForgotPassword from './screens/Login/ForgotPassword';
import ForgotPasswordCode from './screens/Login/ForgotPassword/forgotPasswordCode';
import ForgotPasswordCodeSuccess from './screens/Login/ForgotPassword/forgotPasswordCodeSuccess';
import CancelTicketTerm from "./screens/Tickets/Cancel/term";
import CancelTicket from "./screens/Tickets/Cancel";
import VipCode from "./screens/Profile/Vipcode";
import Configuration from "./screens/Profile/Configurations";
import Notification from "./screens/Notification";
import Event from "./screens/Event";
import Session from "./screens/Event/Session";
import SessionDetail from "./screens/Event/Session/detail";
import Courtesy from "./screens/Profile/Courtesy";
import DistributeCourtesy from "./screens/Profile/Courtesy/distribute";
import SocialCourtesy from "./screens/Profile/SocialCourtesy";
import DistributeSocialCourtesy from "./screens/Profile/SocialCourtesy/distribute";
import Credential from "./screens/Profile/Credential";
import ManagerCortesy from "./screens/Profile/ManageCourtesy";
import ManagerCourtesyDistribute from "./screens/Profile/ManageCourtesy/distribute";

const Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            },
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                header: null
            },
        },
        Friends: {
            screen: Friends,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('friend_list')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        VipCode: {
            screen: VipCode,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('vipcode_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        Configuration: {
            screen: Configuration,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('profile_Configurações')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        EditProfile: {
            screen: EditProfile,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('edit_profile_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        Notification: {
            screen: Notification,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('notification_Notificações')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        Preferred: {
            screen: Preferred,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('preference_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        PaymentMethods: {
            screen: PaymentMethods,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('card_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        CreateCard: {
            screen: CreateCard,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('card_form_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        Tickets: {
            screen: Tickets,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('tabs_Ingressos')}/>,
                headerLeft: <></>,
                headerRight: <></>,
            })
        },
        QRCode: {
            screen: QRCode,
            navigationOptions: {
                header: null
            },
        },
        CancelTicketTerm: {
            screen: CancelTicketTerm,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('ticket_request_cancel')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        CancelTicket: {
            screen: CancelTicket,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('ticket_request_cancel')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        Login: {
            screen: Login,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderLogo/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        ForgotPassword: {
            screen: ForgotPassword,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('login_forget_password')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        ForgotPasswordCode: {
            screen: ForgotPasswordCode,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('login_forget_password')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        ForgotPasswordCodeSuccess: {
            screen: ForgotPasswordCodeSuccess,
            navigationOptions: {
                header: null
            },
        },
        Event: {
            screen: Event,
            navigationOptions: {
                header: null
            },
        },
        Session: {
            screen: Session,
            navigationOptions: ({navigation}) => ({
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        SessionDetail: {
            screen: SessionDetail,
            navigationOptions: {
                header: null
            },
        },
        Courtesy: {
            screen: Courtesy,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('courtesy_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        DistributeCourtesy: {
            screen: DistributeCourtesy,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('courtesy_distribute_courtesy')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        SocialCourtesy: {
            screen: SocialCourtesy,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('social_courtesy_title')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        DistributeSocialCourtesy: {
            screen: DistributeSocialCourtesy,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('social_courtesy_distribute_courtesy')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        Credential: {
            screen: Credential,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('credential')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },
        ManagerCortesy: {
            screen: ManagerCortesy,
            navigationOptions: {
                header: null
            },
        },
        ManagerCourtesyDistribute: {
            screen: ManagerCourtesyDistribute,
            navigationOptions: ({navigation}) => ({
                headerTitle: <HeaderTitle title={translate('courtesy_distribute_courtesy')}/>,
                headerLeft: <HeaderBackButton tintColor={colors.regular} onPress={() => navigation.goBack(null)}/>,
                headerRight: <></>
            })
        },

    })
);

export default Routes;
