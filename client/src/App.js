import './App.css';
import User from './components/User';
import {Table, TableBody, TableHead, TableRow,TableCell} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Paper } from '@material-ui/core';
import { Component } from 'react';
/*
const styles =theme=>({
  root:{
    width:'100%',
    marginTop:theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table:{
    minWidth:1080
  }
})
*/

/*
1. constructor()
2. componentWillMount()
3. render()
4. componentDidMount()

component의 props or state가 변경되는 경우 => shouldComponentUpdate()
*/
class App extends Component {  
  //const {classes} =this.props;className={classes.root} className={classes.table}
  state={  //변경되는 데이터
    users:""
  }
  componentDidMount(){ //body가 res가 된다. 
    this.callApi()
    .then(res => this.setState({users: res}))
    .catch(err => console.log(err));
  }
  callApi=async () => {
    const response = await fetch('/api/users');  //로컬로 접근 한다. 
    const body =await response.json();
    console.log(body);
    return body;
  }
  render(){
    return (
    
      <Paper >
        <Table>
          <TableHead>
            <TableCell>user_id</TableCell>
            <TableCell>major</TableCell>
            <TableCell>rel(참고 지수)</TableCell>
            <TableCell>image</TableCell>
            <TableCell>nickname</TableCell>
          </TableHead>
          <TableBody>
            {this.state.users? 
            this.state.users.map(c => { return (<User key={c.user_id} user_id ={c.user_id} image={c.image} nickname={c.nickname} major={c.major} rel={c.rel} />) })
            : ""}
            </TableBody>
        </Table>
    </Paper>
    );
  }
  
}


//export default withStyles(styles)(App);
export default App;
