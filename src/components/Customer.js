import React from "react"


class Customer extends React.Component{ //React.Component안에 props가 들어있다. 
    render(){
        return(
        <div> 
            <CustomerProfile image={this.props.image} name ={this.props.name} birthday={this.props.birthday} />
            <CustomerInfo id={this.props.id}/>
        </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src= {this.props.image} alt="profile"/>
                <h2>{this.props.name} {this.props.birthday} </h2>
            </div>
        )
    }
}
class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.id}</h2>
            </div>
        )
    }
}
export default Customer ;

