import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    displayContainer: {
        overflow: 'hidden',
        flex: 2,
        backgroundColor: 'gray',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    displayValue: {
        fontSize: 60,
        paddingRight:10
    },
    controlsContainer: {
        flex: 7,
        backgroundColor: 'red',
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth:0.5,
        borderTopWidth:0.5,
        borderColor: 'darkred'
    },
    inputButtonActive: {
        backgroundColor: 'darkred'
    },
    inputButtonZero: {
        flex: 3,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor: 'orange'
    },
    inputButtonPlus: {

    },
    inputButtonNumber: {
        backgroundColor: 'orange',
        borderLeftWidth:0.5,
        borderBottomWidth:0.5,
        borderTopWidth:0,
        borderColor: 'darkorange'
    },
    inputButtonText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default Style;