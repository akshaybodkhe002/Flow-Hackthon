// import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";
// import Form from "react-bootstrap/Form";
// import GridItem from "components/Grid/GridItem.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";






// export default function Login() {

//   // const [email, setEmail] = useState("");

//   // const [password, setPassword] = useState("");

//   // function validateForm() {

//   //   return email.length > 0 && password.length > 0;

//   // }

//   // function handleSubmit(event) {

//   //   event.preventDefault();
//   // }

//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   // const navigator = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem('user');
//     if (auth) {
//       navigator('/');
//     }
//   });

//   const handleLogin = async () => {
//     console.warn(email, password);

//     let result = await fetch('http://localhost:3000/login', {
//       method: 'post',
//       body: JSON.stringify({ email, password }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     result = await result.json();
//     console.warn(result);
//     if (result.name) {
//       localStorage.setItem("users", JSON.stringify(result));
//       // navigator('/')
//     } else {
//       alert("please enter correct details");
//     }

//   }



//   return (
//     <Card>
//       <CardHeader color="primary">
//         <h4 >LOG IN</h4>

//       </CardHeader>
//       <CardBody>
//         <div className="Login">

//           <Form >
//             <GridItem xs={12} sm={12} md={4}>
//               <CustomInput
//                 inputProps={{
//                   // onChange: (e) => handleChange(e),
//                   type: "email"
//                 }}
//                 labelText="Email Address"
//                 id="email"
//                 formControlProps={{
//                   fullWidth: true
//                 }}
//               />
//             </GridItem>
//             <GridItem xs={12} sm={12} md={4}>
//               <CustomInput
//                 inputProps={{
//                   // onChange: (e) => handleChange(e),
//                   type: "password"
//                 }}
//                 labelText="Enter Password"
//                 id="password"
//                 formControlProps={{
//                   fullWidth: true
//                 }}
//               />
//             </GridItem>

//             <Button
//               variant="contained"
//               color="primary"

//               onClick={<handleLogin />}
//             >
//               Book me
//             </Button>

//           </Form>

//         </div>
//       </CardBody>
//     </Card>



//   );

// }


// _________________________

import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import { redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const navigator = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    console.warn(auth)
    if (auth) {
      console.warn("Insit e auth .......)))))))'''''");
    }
  });

  const handleLogin = async () => {
    console.log(email, password);

    let result = await fetch('http://localhost:3000/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("Stpe2....")
    result = await result.json();
    console.warn("Hee is result >>>>>")
    console.warn(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigator('/')
    } else {
      alert("please enter correct details");
    }

  }


  return (
    <div className="Auth-form-container">
      <form className="signupform">
        <div className="Auth-form-content cl-cl">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3 cl-cl">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)} value={email}
            />
          </div>
          <div className="form-group mt-3 cl-cl">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)} value={password}
            />
          </div>
          <div className="d-grid gap-2 mt-3 cl-cl">
            <button type="submit" onClick={handleLogin} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )



}

export default Login;


