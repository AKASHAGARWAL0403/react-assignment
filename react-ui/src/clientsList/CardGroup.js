import React from "react"
import Card from "./Card"
import 'bootstrap/dist/css/bootstrap.min.css';

var CardComponent=[];
export default class test extends React.Component{
    constructor(props)
    {
        super(props);
    }
    
    CardUpdate = ()=>{
        if(this.props.data.Clients.length)
    {
      CardComponent = this.props.data.Clients.map((res)=>{
           return  <Card data={res}/>
         })
    }
     else{
         CardComponent = [];
     }
}
    render(){
       this.CardUpdate(); 
       return(
          <div className="container">
           <div className="row"> 
              {CardComponent}
           </div>
        </div>
        )
    }
}