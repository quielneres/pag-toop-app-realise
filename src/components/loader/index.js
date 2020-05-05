import React from 'react';

import {View} from "react-native";

var Spinner = require('react-native-spinkit');

const Load = () => {
    {/*['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt']*/}

    return (
        <View
            style={{
                flex: 1,
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                backgroundColor: 'rgba(0,0,0,0.2)',
            }}
        >
            <Spinner type={'ThreeBounce'} size={80} color={'#4CB1F7'}/>
        </View>
    );
}


export default Load;
