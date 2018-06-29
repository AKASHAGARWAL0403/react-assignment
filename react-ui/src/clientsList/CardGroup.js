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
        if(this.props.data.length)
    {
      CardComponent = this.props.data.map((res)=>{
           return  <Card data={res} key={res.general.avatar} />
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