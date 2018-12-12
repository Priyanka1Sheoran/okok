import React, { Component } from 'react';
import TodoList from './Views/TodoList';
import AddTodo from './Views/addTodo';
import Login from './Views/Login';
//import Test from './Views/test';
import {  BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Icon} from 'react-fa';
import './App.css';
import ConfirmMail from './Views/ConfirmMail';
import ForgetPass from './Views/ForgetPass';
import UploadImage from './Views/UploadImage'
// create a new context api
const MyContext=React.createContext();

//create a provider component
class MyProvider extends Component{
  state={
    name:'priyanka'
  }
  render(){
    return(
    <MyContext.Provider value={{
      state:this.state,
      updateName:()=>this.setState({
        name:this.state.name+1
      })
      }}>
        {this.props.children}
    </MyContext.Provider>
    )
  }
}
{/*
const Family=(props)=>(
  <div>
    <Person/>
  </div>
) 

class Person extends Component {
  render() {
    return (
       <div >
         <MyContext.Consumer>
           {(context)=>(
             <React.Fragment>
             <p>i am inside the {context.state.name }   </p>
             <button onClick={context.updateName}>Click Me</button>
             </React.Fragment>
           )} 
         </MyContext.Consumer>
       </div>
     );
   }
 }

class App extends Component {
   state={
      name:'Priyanka'
   }
  render() {
   return (
     <MyProvider>
      <div>
        <p>I am a App</p>
        <Family/>
      </div>
      </MyProvider>
    );
  }
}
export default App;

*/}



 class App extends Component {
  constructor(props){
    super(props);
    this.state={}
    this.logout=this.logout.bind(this);
  } 

  logout(){ 
    localStorage.clear();
    window.location.href = '/';
  }
 render() {
   return (
      <div className="main_div">
        <header className="app_header_todo">
         <Icon name="home"/>
         <Icon className="logout_btn" name="sign-out " onClick={this.logout}/>
        </header>
         <Router >
           <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/todo_list" component={TodoList}/>
           <Route exact path="/add_New_Todo" component={AddTodo}/>
           <Route exact path="/confirmMail" component={ConfirmMail}/>
           <Route exact path="/forgetPassword/hhhhhhhhhhhh" component={ForgetPass}/>
           <Route exact path="/uploadImage/:id" component={UploadImage}/>
           </Switch>
        </Router>
 
      </div>
    );
  }
}
export default App; 
