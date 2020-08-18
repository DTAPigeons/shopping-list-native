import React from "react";
import { Container, Header, Content, Card, CardItem, Text, Body, CheckBox, Left } from "native-base";

export const CatalogItem =({item, onPress})=>{
    return(
        <Card>
        <CardItem button onPress={()=>{onPress(item)}}>
            <Body>                
                <Text>
                    {item.name}
                </Text>
            </Body>
        </CardItem>
    </Card>
    )
}