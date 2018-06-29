import React, { Fragment } from "react";
import CardGroup from "./CardGroup"
import Search from "./Search"

var Data_dummy =[]
export default class List extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
          data : [],
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

    
    }

    handleFilter = (value)=>{
       this.setState(()=>({
          FilterValue : value
        }))
       this.handleSearchValue(this.state.SearchValue , value); 
      }

    handleSearchValue = (value , filter)=>{
     var Result = [];
        Result = Data_dummy.filter((res)=>{
          if(filter == "Search By First Name")
            return (res.general.firstName.toLowerCase().indexOf(value.toLowerCase())>=0)
          else if(filter == "Search By Last Name")
            return (res.general.lastName.toLowerCase().indexOf(value.toLowerCase())>=0)  
          else if(filter == "Search By Job Title") 
            return (res.job.title.toLowerCase().indexOf(value.toLowerCase())>=0)
          else if(filter == "Search By phone") 
            return (res.contact.phone.indexOf(value)>=0) 
          else if(filter == "Search By email") 
            return (res.contact.email.toLowerCase().indexOf(value.toLowerCase())>=0)
          else if(filter == "Search By street") 
            return (res.address.street.toLowerCase().indexOf(value.toLowerCase())>=0)
          else if(filter == "Search By city") 
            return (res.address.city.toLowerCase().indexOf(value.toLowerCase())>=0) 
          else if(filter == "Search By country") 
            return (res.address.country.toLowerCase().indexOf(value.toLowerCase())>=0)          
          else if(filter == "Search By Company") 
            return (res.job.company.toLowerCase().indexOf(value.toLowerCase())>=0)             
          else 
            return (res.address.zipCode.indexOf(value)>=0)
          
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