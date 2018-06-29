import React from "react";
import { PopoverHeader, PopoverBody } from 'reactstrap';
var Image = {
    "borderRadius" : "0",
    "height" : "150px"
}
var Display={
    "display":"none"
}
var D = {
    "display": "block"
}
var button = {
    "backgroundColor" : "white",
    "border": "none",
    "boxShadow" : "none",
    "color" : "black",
    "position" : "relative",
    "right": "12px"
}

export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          popoverOpen: false
        };
      }
    
     changeDisplay = ()=>{
        this.setState({
            popoverOpen: !this.state.popoverOpen
          });
      }

      render(){
          return(
            <div className="card">
            <img className="card-img-top" src={this.props.data.general.avatar} alt="Card image cap" style={Image} />
            <div className="card-body">
            <h5 className={"card-title "}  >{this.props.data.general.firstName} {this.props.data.general.lastName} </h5>
            <span className="subHeading" >{this.props.data.job.title}</span>
                <button className="btn btn-primary DisplayButton" onClick={this.changeDisplay} style={button} >{this.state.popoverOpen?"Hide details":"Display details"}</button>
                  <div style={this.state.popoverOpen ?D : Display} >
                  <PopoverHeader>Client Details</PopoverHeader>
                  <PopoverBody>
                      <div>
                         <div>
                            <span className="DetailsTitle" >Company-:</span><span>{this.props.data.job.company}</span>
                          </div>
                          <div>
                            <div className="DetailsTitle" >Address</div>
                            <span className="subDetails"><b> Street-:</b> {this.props.data.address.street}</span>
                            <span className="subDetails"><b>City-:</b> {this.props.data.address.city}</span>
                            <span className="subDetails"><b>Zipcode-:</b> {this.props.data.address.zipCode}</span>
                            <span className="subDetails"><b>Country-: </b>{this.props.data.address.country}</span>
                          </div>
                          
                          <div>
                            <span className="DetailsTitle" >Phone-No-:</span><span>{this.props.data.contact.phone}</span>
                          </div>
                          <div>
                            <span className="DetailsTitle" >Email-:</span><span>{this.props.data.contact.email}</span>
                          </div>    
                      </div>    
                  </PopoverBody>
                  </div>
          
          </div>
           </div>
          )
      }
}

