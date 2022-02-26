import React from "react"
import { TableCell,TableRow } from "@material-ui/core";
class User extends React.Component{ //React.Component안에 props가 들어있다. 
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.user_id}</TableCell>
                <TableCell>{this.props.major}</TableCell>
                <TableCell>{this.props.rel}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/> </TableCell>
                <TableCell>{this.props.nickname}</TableCell>
            </TableRow>
        )
    }
}
export default User ;

//<TableCell><img src={this.props.image} alt="profile"/></TableCell>

