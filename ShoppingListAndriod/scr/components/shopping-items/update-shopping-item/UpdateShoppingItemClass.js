import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Header, Content, Card, CardItem, Text, Body, CheckBox, Left, Right, Button, Grid, Col } from "native-base";
import {CatalogItem} from '../catalog-item/CatalogItem';
import {itemSelectedAction, updateListItemAction, selectItemFromDataBaseAction, cleareUpdateItemAction} from '../../../core/redux/actions/update-list-item-actions/actions';
import { TextInput } from 'react-native';
import { UpdateShoppingItem } from './UpdateShoppingItem';
import { connect } from 'react-redux';

class UpdateShoppingItemClass extends Component{
    constructor(props){
        super(props);
        this.state = {
            statusMessage: "",
            selectedItemFromDatabase: false
        };

        if(props.route.params){
            const {id} = props.route.params;
            this.state.id = id;
        }
    }

    componentDidUpdate(){
        if(this.props.updated){
            this.onCancel();
            return;
        }
    }

    componentDidMount(){

        if(this.state.id && !this.props.selectedItem.id){
            this.props.selectItemFromDataBaseAction(this.state.id);
            this.setState((state)=>{
                return{...state, selectedItemFromDatabase: true};
            })
        }
    }

    componentWillUnmount(){
        this.props.cleareUpdateItemAction();
    }

    onPress=(item)=>{
        console.log("selecting "+item.name);
        this.props.itemSelectedAction({...this.props.selectedItem, name: item.name});
    }

    onInputChange = (text) =>{
        console.log("selecting "+text);
        this.props.itemSelectedAction( {...this.props.selectedItem, name: text});
    }

    onSubmit = ()=>{

        if(!this.props.selectedItem|| !this.props.selectedItem.name || this.props.selectedItem.name==""){
            this.setState((state)=>{
                return{...state, statusMessage: "Invalid Item"};
            })
            return;
        }
        console.log("submiting");
        this.props.updateListItemAction(this.props.selectedItem);
    }

    onCancel= ()=>{
        console.log("Canceling");
        this.props.cleareUpdateItemAction();
       this.props.navigation.popToTop();
    }

    render(){
        return(
            <Content>

            <Text>{this.state.statusMessage}</Text>
            <TextInput
            onChangeText={text=>this.onInputChange(text)}
            value={this.props.selectedItem.name}
            />
            <Right>
                <Grid>
                    <Col  style={{ width: 88, marginRight:4 }}>
                    <Button onPress={()=>{this.onSubmit()}}>
                    <Text>Submit</Text>
                    </Button>
                    </Col>
                    <Col style={{ width: 88 }}>
                    <Button onPress={()=>{this.onCancel()}}>
                    <Text>Cancel</Text>
                    </Button>
                    </Col>
                </Grid>
            </Right>
            <Text>
            Chose product from catalog
            </Text>
            {this.props.catalog.map(item=><CatalogItem item={item} onPress={this.onPress} key={item.id}/>)}
        </Content>
        )
    }
};

function mapStateToProps(state) {
    return {
      catalog: state.catalogReducer.catalog,
      selectedItem:  state.updateListItemReducer.selectedItem,
      updated: state.updateListItemReducer.updated
    }
  };

  const mapDispatchToProps={
    itemSelectedAction,
    updateListItemAction,
    selectItemFromDataBaseAction,
    cleareUpdateItemAction
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(UpdateShoppingItemClass);