import React, {Component} from 'react';
import {connect} from 'react-redux';
// import { StyleSheet, Text, View } from 'react-native';
import {
  View,
  Text,
  AppRegistry
} from 'react-native';
import Style from '../Style';


class Calculator extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={Style.displayText}>
          <Text style={Style.inputButtonText}>{this.props.result || this.props.expression}</Text>
        </View>
        <View style={{flex: 8, backgroundColor: '#3E606F'}}>
          <View style={Style.inputRow} key='row_1'>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('1')}} style={Style.inputButtonText}>1</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('2')}} style={Style.inputButtonText}>2</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('3')}} style={Style.inputButtonText}>3</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('/')}} style={Style.inputButtonText}>/</Text>
            </View>
          </View>
          <View style={Style.inputRow} key='row_2'>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('4')}} style={Style.inputButtonText}>4</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('5')}} style={Style.inputButtonText}>5</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('6')}} style={Style.inputButtonText}>6</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('*')}} style={Style.inputButtonText}>*</Text>
            </View>
          </View>
          <View style={Style.inputRow} key='row_3'>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('7')}} style={Style.inputButtonText}>7</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('8')}} style={Style.inputButtonText}>8</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('9')}} style={Style.inputButtonText}>9</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('-')}} style={Style.inputButtonText}>-</Text>
            </View>
          </View>
          <View style={Style.inputRow} key='row_4'>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('0')}} style={Style.inputButtonText}>0</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('.')}} style={Style.inputButtonText}>.</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('=')}} style={Style.inputButtonText}>=</Text>
            </View>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('+')}} style={Style.inputButtonText}>+</Text>
            </View>
          </View>
          <View style={Style.inputRow} key='row_5'>
            <View style={Style.inputButton}>
              <Text onPress={()=>{this.props.updateExpression('c')}} style={Style.inputButtonText}>></Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    expression: state.expression,
    result: state.result
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateExpression: (value) => {
      dispatch({type: 'UPDATE_EXPRESSION', value: value})
    },
    calculate: () => dispatch({type: 'CALCULATE'})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
