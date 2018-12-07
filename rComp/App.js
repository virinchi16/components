import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {menuBarWidth : "100%"}
  }
  sampleFun = () =>{
    alert("smaple")
  }

  menuClose = () =>{
    this.setState({menuBarWidth:0})    
  }
  menuOpen = () =>{
    this.setState({menuBarWidth:"100%"})
  }
  render(){
    return (
      <View style={styles.container}>
        <MenuBar
          menuBarWidth={this.state.menuBarWidth}
          menuCloseCallBack={this.menuClose} 
          menuCallback={this.menuOpen}/>
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

const menuIcon = require('./assets/images/menu.png')
class MenuBar extends React.Component{
  constructor(props){
    super(props);
    this.props = props;
    this.menuBarStyle = {
      height:"100%",
      width:"80%",
      left:0,
      paddingTop:20,
      backgroundColor:"white",
      borderColor:"black",
      borderRightWidth:0.5,
      shadowColor: "black",
      shadowOffset: {width:10, height:10},
      shadowOpacity: 1.0
    }
    this.profileStyle={
      width:"100%",
      height:"40%",
      backgroundColor:"black"
    }
    this.copyStyle = {
      width:"100%",
      height:"10%",
      borderColor:"black",
      borderTopWidth:1.0
    }
    this.optionListStyle ={
      width:"100%",
      height:"50%"
    }
    this.menuBarOptionStyle = {
      color: "Black",
      fontSize: 22,
      // alignItems: 'center',
    }
    this.menuBarOptionButtonStyle={
      height: 40,
      marginTop: 3,
      marginBottom: 2,
      paddingLeft:10,
    }

    this.backPressOverlay={
      backgroundColor:"rgba(1,1,1,0.4)",
      width:"20%",
      height:"100%",
      position:"absolute",
      right:0
    }
    this.menuBackOverlayFunction={
      width:"100%",
      height:"100%"
    }
    this.menuBarButtonStyle = {width:0, height:0}
    this.menuBarFunctionStyle = {width:this.props.menuBarWidth, height:"100%"}
    this.menuOptions = this.props.items?this.props.items.split(','):"option1,option2".split(',');
    this.sampleLinks = {}
    if(!this.props.menuOptionClicks){
      this.menuOptions.forEach(element => {
        this.sampleLinks[element] = this.sampleMenuClick
      });
    }
    this.menuOptionClick = this.props.menuClicks?this.props.menuOptionClicks:this.sampleLinks;
    this.menuOptionArr = []
    this.menuOptions.forEach(element => {
      data = {
        callBack:this.menuOptionClick[element],
        value:element
      }
      this.menuOptionArr.push(this.menuOptionCreator(data))
    });
  }

  sampleMenuClick = () =>{
    alert('menu Item Clicked, add click function by passing it to menuOptionClick')
  }
  showHideMenu = () =>{
    this.menuBarFunctionStyle = {
                                  width:this.props.menuBarWidth, 
                                  height:"100%"
                                }
    if(this.props.menuBarWidth == "100%"){
      this.menuBarButtonStyle = {width:0, height:0}
    }
    else{
      this.menuBarButtonStyle = {
        width:30,
        height:30,
        marginTop:100,
        marginLeft:10
      }
    }
  }
  
  menuOptionCreator = (data) =>{
    return(
      <TouchableOpacity onPress={data.callBack}>
        <View style={this.menuBarOptionButtonStyle}>
            <Text style={this.menuBarOptionStyle}>{data.value}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render(){
    this.showHideMenu()
    return (
      <View style={{width:"100%", height:"auto"}}>
        <TouchableOpacity onPress={this.props.menuCallback}>
        <Image  style={this.menuBarButtonStyle} source={menuIcon}></Image>
        </TouchableOpacity>
        <View style={this.menuBarFunctionStyle}>
          <View style={this.menuBarStyle}>
            <View style={this.profileStyle}>
            </View>
           <View style={this.optionListStyle}>
            {this.menuOptionArr}
           </View>
           <View style={this.copyStyle}>
           </View>
          </View>
          <View style={this.backPressOverlay}>
            <TouchableOpacity style={this.menuBackOverlayFunction} onPress={this.props.menuCloseCallBack}>
            </TouchableOpacity>
          </View>
        </View>
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