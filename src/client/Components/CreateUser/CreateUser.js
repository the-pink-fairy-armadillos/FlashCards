import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import e from 'cors';

const CreateUser = () => {
    handleSubmit ((e) => {
     e.preventDefault();
    });
    return(
       <div>
           <div className="login-container">
        {/* //place our logo or main thing here */}
        <div className="container">
          <h1 id="loghead">Login</h1>
          <form>
            <div className={this.state.invalid} id="invalid">
              Invalid Input
            </div>
            <input
              className="email"
              type="email"
              name="email"
              placeholder="email..."
              required
              //   onChange={this.handleChange}
            />
            <input
              className="password"
              type="password"
              name="password"
              placeholder="password..."
              required
              //   onChange={this.handleChange}
            />
            <div id="buttonRow">
              <button
                className="register"
                id="register"
                onClick={this.handleSubmit}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
       </div> 
    )
}


export default CreateUser;