import React from 'react';
import Axios from 'axios';
const API_URL = `http://localhost:8080/`;
class Auth extends React.Component{
    state = {
        selectedFile: null,
        formUser:{
            username:"",
            password:""
        },
        loginState:{
            username:"",
            password:"",
            profilePicture:""
        }
      };
    inputHandler = (event,key)=>{
        const {value} =event.target;
        this.setState({
            formUser:{
                ...this.state.formUser,
                [key]:value
            }
        })
    };
    regisHandler = ()=>{
        console.log("register");
        Axios.post(`${API_URL}/users`,{
            username: this.state.username,
            password: this.state.password,
        })
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    };
    loginHandler =()=>{
       Axios.post(`${API_URL}/documents/login`,this.state.formUser)
       .then((res)=>{
           console.log(res.data);
           this.setState({
               loginState:res.data
           })
       })
       .catch((err)=>{
           console.log(err)
       })
    };
    fileChangeHandler = (e)=>{
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    fileUploadHandler=()=>{
        let formData = new FormData();
        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        )
        formData.append(
            "userData",
            JSON.stringify(this.state.formUser)
        )
        console.log(JSON.stringify(this.state.formUser))
        Axios.post(`${API_URL}/documents`,formData)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    download = ()=>{
        window.open(`${API_URL}/documents/download/tower.png`)
    }
    render(){
        return(
            <div>
                <h1>Auth Screen</h1>
                <h5>username</h5>
                <input type="text" onChange={e =>this.inputHandler(e,"username")}/>
                <h5>password</h5>
                <input type="text" onChange={e =>this.inputHandler(e,"password")}/>

                <br/>

                <input type="button" value="Register" onClick={this.regisHandler}/>
                <input type="button" value="Login" onClick={this.loginHandler}/>
                <br/>
                <input type="file" onChange={this.fileChangeHandler}/>
                <input type="button" value="Upload" onClick={this.fileUploadHandler}/>
                <input type="button" value="Download" onClick={this.download}/>
        <h2>{this.state.loginState.username}</h2>
        <img src={this.state.loginState.profilePicture} alt=""/>
        {/* <img src="" alt=""/> */}
            </div>
        )
    }
}

export default Auth