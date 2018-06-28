import React, { Fragment } from "react";
import CardGroup from "./CardGroup"
import Search from "./Search"

var Data_dummy = {Clients : []}
export default class List extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
          data : {Clients : [] },
          FilterValue : "Search By Name",
          SearchValue  : "" 
        }
    }
    componentDidMount(){
      fetch("/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw Error(response.statusText);
        }
      }).then(data => {
        this.setState({
          data
        })
        Data_dummy = data
      });

      console.log(this.state.datas)
    }

    handleFilter = (value)=>{
       this.setState(()=>({
          FilterValue : value
        }))
       this.handleSearchValue(this.state.SearchValue , value); 
      }

    handleSearchValue = (value , filter)=>{
     var Result = {Clients:[]};
        Result.Clients = Data_dummy.Clients.filter((res)=>{
          if(filter == "Search By Name")
            return (res.name.toLowerCase().indexOf(value.toLowerCase())>=0)
          else if(filter == "Search By Job Title") 
            return (res.job_title.toLowerCase().indexOf(value.toLowerCase())>=0)
          else if(filter == "Search By Age") 
            return (res.details.Age.indexOf(value)>=0) 
          else 
            return (res.details.Qualifications.toLowerCase().indexOf(value.toLowerCase())>=0)
          
       });
       this.setState(()=>({
          data : Result,
          SearchValue : value
      }))
    }

        render(){
        return(
            <Fragment>
              <Search onFilterChange={this.handleFilter} onSearchValue = {this.handleSearchValue}  />
              <CardGroup data={this.state.data} />
            </Fragment>  
         )
    }
}