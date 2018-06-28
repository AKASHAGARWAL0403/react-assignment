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
            <img className="card-img-top" src={this.props.data.link} alt="Card image cap" style={Image} />
            <div className="card-body">
            <h5 className={"card-title "}  >{this.props.data.name} </h5>
            <span className="subHeading" >{this.props.data.job_title}</span>
                <button className="btn btn-primary DisplayButton" onClick={this.changeDisplay} style={button} >{this.state.popoverOpen?"Hide details":"Display details"}</button>
                  <div style={this.state.popoverOpen ?D : Display} >
                  <PopoverHeader>Client Details</PopoverHeader>
                  <PopoverBody>
                      <div>
                          <div>
                            <span className="DetailsTitle" >Age-:</span><span>{this.props.data.details.Age}</span>
                          </div>
                          <div>
                            <span className="DetailsTitle" >Qualification-:</span><span>{this.props.data.details.Qualifications}</span>
                          </div>  
                          <div>
                            <span className="DetailsTitle" >Phone-No-:</span><span>{this.props.data.details.phone_no}</span>
                          </div>  
                      </div>    
                  </PopoverBody>
                  </div>
          
          </div>
           </div>
          )
      }
}

