import React, { useState, useEffect } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../style/login.css";
import Auth from "../utils/auth";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Collapse } from "react-collapse";

export default function Login() {
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
  });

  const [open, setOpen] = useState(false);

  const [login, { error }] = useMutation(LOGIN_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setloginFormData({ ...loginFormData, [name]: value });
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(async (submitData) => {
      console.log(submitData);
      try {
        const { data } = await login({
          variables: { ...submitData },
        });
        // console.log(data);
        Auth.login(data.login.token);
      } catch (err) {
        console.error(err);
      }

      setloginFormData({
        email: "",
        password: "",
      });
    })(event);
  };
  // const onSubmit = async (submitData, event) => {
  //   console.log(event);
  //   try {
  //     const { data } = await login({
  //       variables: { ...submitData },
  //     });
  //     console.log(data);
  //     Auth.login(data.login.token);
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   setloginFormData({
  //     email: "",
  //     password: "",
  //   });
  // };

  console.log(loginFormData);
  return (
    <>
      <h2 className="main-page-form" onClick={() => setOpen(!open)}>
        Welcome Back! (Login)
      </h2>
      <Link to="/main"></Link>
      <Collapse isOpened={open}>
        <br></br>
        <form className="login-form">
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            onChange={handleInputChange}
          />
          {errors.email && <p>Email is required</p>}
          <label>Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
            onChange={handleInputChange}
          />
          {errors.password && <p>Password is required</p>}
          <Link to="/main">
            <button onClick={onSubmit} className="login-btn" type="submit">
              Login
            </button>
          </Link>

        </form>
      </Collapse>
    </>
  );
}

// import React, { useState, useEffect } from "react";
// import { Link, Routes, Route, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import "../style/login.css";
// import Auth from "../utils/auth";
// import { LOGIN_USER } from "../utils/mutations";
// import { useMutation } from "@apollo/client";
// import { Collapse } from "react-collapse";

// export default function Login() {
//   const [loginFormData, setloginFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [open, setOpen] = useState(false);

//   const [login, { error }] = useMutation(LOGIN_USER);
//   if (error) {
//     console.log(JSON.stringify(error));
//   }

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setloginFormData({ ...loginFormData, [name]: value });
//   };
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (event) => {
//     event.preventDefault();
//     handleSubmit(async (submitData) => {
//       console.log(submitData);
//       try {
//         const { data } = await login({
//           variables: { ...submitData },
//         });
//         // console.log(data);
//         Auth.login(data.login.token);
//         navigate("/main");
//       } catch (err) {
//         console.error(err);
//       }

//       setloginFormData({
//         email: "",
//         password: "",
//       });
//     })(event);
//   };
//   // const onSubmit = async (submitData, event) => {
//   //   console.log(event);
//   //   try {
//   //     const { data } = await login({
//   //       variables: { ...submitData },
//   //     });
//   //     console.log(data);
//   //     Auth.login(data.login.token);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }

//   //   setloginFormData({
//   //     email: "",
//   //     password: "",
//   //   });
//   // };

//   // console.log(loginFormData);
//   return (
//     <>
//       <h2 className="main-page-form" onClick={() => setOpen(!open)}>
//         Welcome Back! (Login)
//       </h2>
//       <Collapse isOpened={open}>
//         <br></br>
//         <form className="login-form" onSubmit={onSubmit}>
//           <label>Email</label>
//           <input {...register("email", { required: true })} />
//           {errors.email && <p>Email is required</p>}
//           <label>Password</label>
//           <input
//             type="password"
//             {...register("password", { required: true })}
//           />
//           {errors.password && <p>Password is required</p>}
//           <button className="login-btn" type="submit">
//             Login
//           </button>
//         </form>
//       </Collapse>
//     </>
//   );
// }
