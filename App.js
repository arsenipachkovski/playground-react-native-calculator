import React from 'react';
import {Text, View, TouchableHighlight, Vibration} from 'react-native';
import Style from './src/Styles';
import InputButton from './src/inputButton';

const inputButtons = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '+'],
    ['CE', '=']
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0,
            selected: null,
            previousOperator: null,
            previousInputValue: 0
        }
    }

    onInputPress(input) {
        switch (typeof input) {
            case 'number':
                return this.handleNumberInput(input);
            case 'string':
                return this.handleStringInput(input);
        }
    }

    handleStringInput(input) {
        switch (input) {
            case '/':
            case '*':
            case '+':
            case '-':
                if (this.state.inputValue === 0) {
                    Vibration.vibrate();
                    return;
                }
                if (this.state.previousOperator) {
                    previousInputValue = eval(this.state.previousInputValue + this.state.previousOperator + this.state.inputValue);
                    previousOperator = null;
                } else {
                    previousInputValue = this.state.inputValue;
                    previousOperator = input
                }
                this.setState({
                    selected: input,
                    previousInputValue: previousInputValue,
                    previousOperator: previousOperator,
                    inputValue: previousInputValue
                });
                break;
            case 'CE':
                this.setState({
                    inputValue: 0,
                    selected: null,
                    previousInputValue: 0,
                    previousOperator: null,
                });
                break;
            case '.':

            case '=':
                let result = eval(this.state.previousInputValue + this.state.previousOperator + this.state.inputValue);
                this.setState({
                    inputValue: result,
                    selected: null,
                    previousInputValue: 0,
                    previousOperator: null,
                })
                break;
        }
    }

    handleNumberInput(input) {
        let inputValue = (this.state.previousOperator ? input : (this.state.inputValue * 10) + input);
        this.setState({
            inputValue,
            selected: null,
        })
    }

    renderInputButtons() {
        let views = [];
        for (var r = 0; r < inputButtons.length; r++) {
            let row = inputButtons[r];
            let inputRow = [];
            for (var i = 0; i < row.length; i++) {
                let input = row[i];
                inputRow.push(
                    <InputButton
                        plus={row.length === 2 && i === 1 && r === 3}
                        zero={row.length === 2 && i === 0 && r === 3}
                        number={typeof input === 'number'}
                        active={this.state.selected === input}
                        onPress={this.onInputPress.bind(this, input)}
                        value={input}
                        key={r + "-" + i}/>
                );
            }
            views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
        }
        return views;
    }

    render() {
        return (
            <View style={Style.container}>
                <View style={Style.displayContainer}>
                    <Text style={Style.displayValue}>{this.state.inputValue}</Text>
                </View>
                <View style={Style.controlsContainer}>
                    {this.renderInputButtons()}
                </View>
            </View>
        );
    }
}
