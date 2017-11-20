import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Style from './Styles';

export default class InputButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={[Style.inputButton,
                    this.props.active ? Style.inputButtonActive : null,
                    this.props.plus ? Style.inputButtonPlus : null,
                    this.props.number ? Style.inputButtonNumber : null,
                    this.props.zero ? Style.inputButtonZero : null]}
                underlayColor="darkred"
                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        );
    }
}