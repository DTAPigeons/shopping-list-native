import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {styles} from './headerSyles';


export const Head = ()=>{
    return(
        <Header>
            <Left>
                <Title>
                    Shopping list
                </Title>
            </Left>
        </Header>
    )
}