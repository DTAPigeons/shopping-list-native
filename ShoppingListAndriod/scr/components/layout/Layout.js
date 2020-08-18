import React from 'react';
import {Head} from './header/Head';
import {Foot} from './footer/Foot';
import { View } from 'react-native';

import { Main } from './main/Main';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export const Layout =()=>{
    return(
        <View style={{flexDirection:"column", flex:6}}>        
            <Container>
            <Head/>
            <Main/>
            <Foot/>
            </Container>
        </View>

    )
}