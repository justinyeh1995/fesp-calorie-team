import React from "react";
import { Control, Form} from "react-redux-form";
import store from "./store";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const { dispatch } = store;
    const user = store.getState().user;
    console.log(user);
  }

  render() {
    const getUserClassName = field => {
      const userForm = store.getState().forms.user;
      const isTouched = userForm[field].touched;
      const isValid = userForm[field].valid;

      return `form-control${
        isTouched || this.props.submitFailed ? " active" : ""
      }${!isValid ? " invalid" : ""}`;
    };

    const MyTextInput = props => {
      const [, name] = props.name.split(".");
      const className = getUserClassName(name);

      return <input className={className} autoComplete="off" {...props} />;
    };

    return (
      <div>
        <div className="blurredcover" />
        <div className="container">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6" id="box">
              <div className="header">
                <h1>LOGIN</h1>
              </div>
              <Form
                model="user"
                className="user"
                // 輸入的值是e.target.value
              >
                <Control.text
                  model=".username"
                  placeholder="Username"
                  component={MyTextInput}
                />
              </Form>
              <Form model="user" className="password">
                <Control.text
                  model=".password"
                  placeholder="Password"
                  component={MyTextInput}
                />
              </Form>
              <div className="button">
                <button
                  onClick={this.handleSubmit}
                  className="btn-default btn-lg"
                >
                  LOGIN
                </button>
              </div>
              <p className="login_signup">
                Don't have an account?{" "}
                <a href="#" className="sign">
                  Sign up
                </a>
              </p>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    );
  }
}
export default MyForm;
