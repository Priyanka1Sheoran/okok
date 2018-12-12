import React, { Component } from 'react';
import {Card,CardBody,CardHeader,Row,Col,Button, Form, FormGroup, Label, Input   } from 'reactstrap';
import Url from "./configure";
import axios from "axios";
import {Link} from "react-router-dom";




// function Test() {
//   //const datee= Date();
//  return (
//     <p>Hello ! Today is { Date()} </p>
//  )
// }
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      responseData:[],
      isAuthenticated:true
     }
     this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault()
   const data={
     email:this.state.email,
     password:this.state.password
   }
    axios.post(Url.baseUrl+"/login",data)
      .then((res) => {
       
        this.setState({ 
          responseData: res.data ,
          isAuthenticated :true
        });
        window.location.href = '/todo_list';
    })
  }
  

  handleChange=(event)=>{
      let {name,value}=event.target;
      this.setState({[name]:value})
  }
  render() {
    const {email,password,responseData}=this.state;
    
    return (  
      <div className="container-fluid">
             {/* {Test()} */}

        <Row className="Login_row">
         <Col sm="3"></Col>
          <Col sm="6">
            <Card>
              <CardHeader>Welcome to Login</CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                      <Label for="email" hidden>Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="email_login"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                        required
                        />
                    </FormGroup>
                  <FormGroup>
                      <Label for="password" hidden>Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="Password_login"
                        onChange={this.handleChange}
                        value={password}
                        placeholder="Password"
                        required
                       />
                    </FormGroup>
                  <Button>Submit</Button>
                  <Link to="/confirmMail">Forget Password</Link>
                </Form>
              </CardBody> 
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default App;
