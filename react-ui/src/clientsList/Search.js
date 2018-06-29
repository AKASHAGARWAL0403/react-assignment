import React from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem , Button } from 'reactstrap';

var divWidth = {
    "width"  :"100%"
}
var style = {
    "backgroundColor" : "white" ,
    "border" : "none",
    "color": "black",
    "boxShadow"  :"none"
}
var Selected={
    "color": "#707070"
}
var NotSelected = {
    "color": "black"
}


export default class SubHeading extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          selectedValue : "Search By Name",
          SearchValue : ""
        };
      }

      selectDropdown = (e)=>{
         const value  = e.target.innerHTML;
         this.setState(()=>({
             selectedValue : value
         }))
         this.props.onFilterChange(value);
      }

      handleChange = (e)=>{
          const value = e.target.value;
          this.setState(()=>({
              SearchValue : value
          }))
          this.props.onSearchValue(value , this.state.selectedValue)
      }
    
      toggle = ()=>{
        this.setState({
          isOpen : !this.state.isOpen
        });
      }
    
    render(){
        return(
            <div className="container Heading" >
            <div className="row">
            <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle} className="buttongroup" >
            <Button id="caret" color="primary" className="dropdownButton"style={style} >{this.state.selectedValue}</Button>
            <DropdownToggle caret color="primary" style={style} className="dropdownArrow" />
            <DropdownMenu onClick={this.selectDropdown} >
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By First Name"?Selected : NotSelected } >Search By First Name</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By Last Name"?Selected : NotSelected } >Search By Last Name</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By Job Title"?Selected : NotSelected } >Search By Job Title</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By Company"?Selected : NotSelected } >Search By Company</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By email"?Selected : NotSelected } >Search By email</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By phone"?Selected : NotSelected } >Search By phone</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By street"?Selected : NotSelected } >Search By street</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By city"?Selected : NotSelected } >Search By city</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By zipCode"?Selected : NotSelected } >Search By zipCode</DropdownItem>
                <DropdownItem className="dropdownItems" style={this.state.selectedValue=="Search By country"?Selected : NotSelected } >Search By country</DropdownItem>
            </DropdownMenu>
            </ButtonDropdown>
            <input type="text" placeholder="Search" onChange={this.handleChange} id="input" />
             </div>
            </div>
          
        )
    }
}