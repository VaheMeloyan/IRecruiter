import HandshakeIcon from "@mui/icons-material/Handshake";
import TextField from "@mui/material/TextField";
import "./SignUpStyles.css";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as yup from "yup";
import { UserAuth } from "../../context/AuthContext"; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignUp() {
  const [userType, setUserType] = useState("employee");
  const { createUser } = UserAuth()
  const navigate = useNavigate()

  const changeUserType = (event) => {
    setUserType(event.target.value);
  };

  function TextFieldWrapper({ ...props }) {
    const [field, mata] = useField(props.name);

    if (mata && mata.touched && mata.error) {
      field.error = true;
      field.helperText = mata.error;
    }
    return <TextField {...props} {...field} />;
  }



  

  function ButtonWrapper() {
    const context = useFormikContext();
    context.values.userType = userType;
    return (
      <Button
        onClick={() => createNewUser(context.values)}
        sx={{
          width: "300px",
          borderRadius: "20px",
        }}
        variant="contained"
        color="primary"
      >
        {" "}
        SIGN UP
      </Button>
    );
  }



  
  const createNewUser = async(data) => {  
    await createUser(data.email, data.password)
    navigate('/profile')
    
  }

  return (
    <div className="main">
       <div className="signup-container">
        <div className="logo">
          <HandshakeIcon
            sx={{ width: "80px", height: "80px" }}
            color="primary"
          />
          <p>IRecruiter</p>
        </div>
        <div>
          <Formik
            initialValues={{
              name: "",
              phoneNumber: "",
              email: "",
              password: "",
            }}
            validationSchema={yup.object().shape({
              name: yup.string().required("Necessary"),
              phoneNumber: yup.string().required("Necessary"),
              email: yup.string().email("Invalid email").required("Necessary"),
              password: yup.string().required("Necessary"),
            })}
          >
            <Form>
              <div className="input">
                <TextFieldWrapper
                  name="name"
                  sx={{ width: "500px" }}
                  size="small"
                  className="outlined-basic"
                  label="Name*"
                  variant="outlined"
                />
              </div>
              <div className="input">
                <div className="checkBox">
                  <p style={{ opacity: 0.7 }}>I am a *</p>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="recruiter"
                      control={<Radio />}
                      label="Recruiter"
                      checked={userType === "recruiter"}
                      onChange={changeUserType}
                    />

                    <FormControlLabel
                      value="employee"
                      control={<Radio />}
                      label="Employee"
                      checked={userType === "employee"}
                      onChange={changeUserType}
                    />
                  </RadioGroup>
                </div>
              </div>

              <div className="input">
                <TextFieldWrapper
                  name="phoneNumber"
                  sx={{ width: "500px" }}
                  size="small"
                  className="outlined-basic"
                  label="Phone Number*"
                  variant="outlined"
                />
              </div>

              <div className="input">
                <TextFieldWrapper
                  name="email"
                  sx={{ width: "500px" }}
                  size="small"
                  className="outlined-basic"
                  label="Email Address*"
                  variant="outlined"
                />
              </div>

              <div className="input">
                <TextFieldWrapper
                  name="password"
                  sx={{ width: "500px" }}
                  size="small"
                  className="outlined-password-input"
                  label="Password*"
                  type="password"
                  autoComplete="current-password"
                />
              </div>

              <ButtonWrapper />
            </Form>
          </Formik>
          <div className="input" style={{ marginButtom: "40px" }}></div>
        </div>

        <div className="input">
          <p>Already have an account?</p>
          <Link to="/login" style={{margin:"15px 0 0 3px"}}>Login</Link>
        </div>
      </div>
    </div>
     
   
  );
}

export default SignUp;
