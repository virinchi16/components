import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props)
  }
  sampleFun = () =>{
    alert("smaple")
  }
  render() {
    return (
      <View style={styles.container}>
        <Button 
        value="Button"
        paddingBottom = "10"
        callBack={this.sampleFun} />
        <TextLabel
        value="Text label" />
       </View>
    );
  }
}

class Button extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.buttonName = this.props.value ? this.props.value : "Button"
    this.buttonStyle = {
      height: this.props.height ? this.props.height : "auto",
      width: this.props.width ? this.props.width : "auto",
      marginTop: this.props.marginTop?to_int(this.props.marginTop) : 5,
      marginLeft:this.props.marginLeft?to_int(this.props.marginLeft): 5,
      margintRight:this.props.margintRight?to_int(this.props.margintRight):5,
      marginBottom:this.props.marginBottom?to_int(this.props.marginBottom):5,
      paddingLeft:this.props.paddingLeft?to_int(this.props.paddingLeft):5,
      paddingRight:this.props.paddingRight?to_int(this.props.paddingRight):5,
      paddingTop:this.props.paddingTop?to_int(this.props.paddingTop):5,
      paddingBottom:this.props.paddingBottom?to_int(this.props.paddingBottom):5,
      backgroundColor: this.props.color ? this.props.color : "White",
      borderRadius: this.props.borderRadius ? this.props.borderRadius : 10,
      borderWidth: this.props.borderWidth ? this.props.borderWidth : 1 ,
      borderColor: this.props.borderColor ? this.props.borderColor : "black",
    } 
    this.buttonTextStyle = {
      fontSize : this.props.size?this.props.size:18,
      fontWeight : this.props.fontWeight ? this.props.fontWeight : "bold",
      color : this.props.textColor?this.props.textColor:"black",
      width : this.props.width ? this.props.width : "auto", 
      marginTop: this.props.vmarginTop?to_int(this.props.vmarginTop) : 5,
      marginLeft:this.props.vmarginLeft?to_int(this.props.vmarginLeft):5,
      margintRight:this.props.vmargintRight?to_int(this.props.vmargintRight):5,
      marginBottom:this.props.vmarginBottom?to_int(this.props.vmarginBottom):5,
      paddingLeft:this.props.vpaddingLeft?to_int(this.props.vpaddingLeft):5,
      paddingRight:this.props.vpaddingRight?to_int(this.props.vpaddingRight):5,
      paddingTop:this.props.vpaddingTop?to_int(this.props.vpaddingTop):5,
      paddingBottom:this.props.vpaddingBottom?to_int(this.props.vpaddingBottom):5
    }
    this.callBack = this.props.callBack ? this.props.callBack : this.sampleFun
  }
  sampleFun = () =>{
    alert(this.props.value ? this.props.value+" Button pressed" : "Button pressed")
  }
  render(){
    return (
    <View style={this.buttonStyle}>
      <TouchableOpacity onPress={this.callBack}>
        <Text style={this.buttonTextStyle}>{this.buttonName}</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

class TextLabel extends React.Component{
  constructor(props){
    super(props)
    this.textValue = this.props.value ? this.props.limitTo ? this.props.value.substr(0,to_int(this.props.limitTo))+'...': this.props.value : "Label"
    this.textLabelStyle = {
      height: this.props.height ? this.props.height : "auto",
      width: this.props.width ? this.props.width : "auto",
      backgroundColor: this.props.color ? this.props.color : "White",
      borderRadius: this.props.borderRadius ? this.props.borderRadius : 0,
      borderWidth: this.props.borderWidth ? this.props.borderWidth : 0 ,
      borderColor: this.props.borderColor ? this.props.borderColor : "white",
      marginTop: this.props.marginTop? to_int(this.props.marginTop ): 5,
      marginLeft:this.props.marginLeft? to_int(this.props.marginLeft):5,
      margintRight:this.props.margintRight? to_int(this.props.margintRight):5,
      marginBottom:this.props.marginBottom? to_int(this.props.marginBottom):5,
      paddingLeft:this.props.paddingLeft? to_int(this.props.paddingLeft):5,
      paddingRight:this.props.paddingRight? to_int(this.props.paddingRight):5,
      paddingTop:this.props.paddingTop? to_int(this.props.paddingTop):5,
      paddingBottom:this.props.paddingBottom? to_int(this.props.paddingBottom):5
    } 
    this.textStyle ={
      fontSize : this.props.size?this.props.size:18,
      fontWeight : this.props.fontWeight ? this.props.fontWeight : "bold",
      color : this.props.textColor?this.props.textColor:"black",
      width : this.props.width ? this.props.width : "auto",
      marginTop: this.props.vmarginTop?to_int(this.props.vmarginTop) : 5,
      marginLeft:this.props.vmarginLeft?to_int(this.props.vmarginLeft):5,
      margintRight:this.props.vmargintRight?to_int(this.props.vmargintRight):5,
      marginBottom:this.props.vmarginBottom?to_int(this.props.vmarginBottom):5,
      paddingLeft:this.props.vpaddingLeft?to_int(this.props.vpaddingLeft):5,
      paddingRight:this.props.vpaddingRight?to_int(this.props.vpaddingRight):5,
      paddingTop:this.props.vpaddingTop?to_int(this.props.vpaddingTop):5,
      paddingBottom:this.props.vpaddingBottom?to_int(this.props.vpaddingBottom):5
    }
  }

  render = () =>{
    return(
      <View style={this.textLabelStyle}>
        <Text style={this.textStyle}>{this.textValue}</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const to_int = (a) =>{
  return parseInt(a);
}