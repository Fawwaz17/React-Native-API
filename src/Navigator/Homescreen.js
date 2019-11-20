import React, {Component} from 'react';
import {Platform, StyleSheet, View, Alert, StatusBar} from 'react-native';
import { Content, Fab, Button, Icon, Spinner, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base'
import axios from 'axios';
import ListItems from './ListItems';
const instructions = Platform.select({
ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
android:
'Double tap R on your keyboard to reload,\n' +
'Shake or press menu button for dev menu',
});
export default class Homescreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
            {
                nama : 'Bee',
                email : 'beebewijaya@gmail.com',
                nomor : '081298129813'
            },
            {
            nama : 'John',
            email : 'John@gmail.com',
            nomor : '021928918998'
            },
            {
            nama : 'Bob',
            email : 'bob@gmail.com',
            nomor : '088982989829'
            }
            ],
            loading:false
            }
    }
    renderFooter = () => {
        if(this.state.loading === false) return null;
        return (
            <View>
                <Spinner color='#1e88e5' />
                <Text style={{color:'#aaa', fontSize:12, textAlign:'center', bottom:10}}>
                    Load more data
                </Text>
            </View>
        )
    }
    renderList = (item,index) => {
        return(
            <ListItem
            style={{marginRight:20}}
            avatar
            key={index}>
                <Left>
                    <Thumbnail style={{backgroundColor:'#1e88e5'}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png' }} />
                </Left>
                <Body>
                    <Text>{item.nama}</Text>
                    <Text note>{item.email.toLowerCase()}</Text>
                    <Text note>{item.nomor}</Text>
                </Body>
            </ListItem>
        )
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
            backgroundColor='#1e88e5'
            barStyle='light-content'
            />
            <View style={{flex: 1}}>
            <ListItems
            {...this.props}
            data={this.state.data}
            renderList = {this.renderList}
            renderFooter={this.renderFooter}/>
            </View>
            <Fab
            style={{ backgroundColor: '#1e88e5' }}
            position='bottomRight'
            onPress={
            () => this.props.navigation.navigate('Add', {
            handlePostClick:this.handlePostClick
            })}>
            <Icon type='FontAwesome' name='pencil' />
            </Fab>
            </View>
            );
            }
            }
            const styles = StyleSheet.create({
            container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            }
            });