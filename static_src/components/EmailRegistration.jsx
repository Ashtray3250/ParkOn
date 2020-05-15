import React from "react";
import ReactDOM from "react-dom";
import {Link} from 'react-router-dom';
import Map from './Map';
import validationFaild from "./img/validationFaild.png";
import validationSuccess from "./img/validationSuccess.png";
import axios from "axios";


export default class Emailregistration extends React.Component {

	state={
		input:' ',
		validate:' ',
		mailNotExist:' ',
		mailUsed:' ',
		generatedCode:' ',
		codeSended:' ',
		apiUrl:' ',
		passwordInput:' ',
	};


inputHandler = (event) =>{
setTimeout(()=>{
this.setState({input: event.target.value});
	this.validateFunction();
	this.handleValues(event);
	},100);
};

handleValues = () => {
  this.forceUpdate();
  if (this.state.input.length > 11) {
    this.setState({input:this.state.input})
  }else{

  setTimeout( () => {
      this.setState({mailString:true});
  },100)
  }
};

validateFunction=()=>{
  const regular = /\w+\@{1}\w+\.[a-z]{2,3}$/g;
  const result = regular.exec(this.state.input);
  console.log(result);
  if(result !== null){
  this.setState({validate:true})
  }else{
  this.setState({validate:false})
  }
};

  validationButtonHandler = () => {
  	const {codeSended,generatedCode,passwordInput,input,validate} = this.state;
  	if(codeSended != true && input.length > 5){
  		this.setState({codeSended:true});
  		this.generateCommonCode();
  	 }else if(this.state.codeSended === true && this.state.generatedCode != ' ' && passwordInput === generatedCode  && validate === true){
this.axiosRequest();
		
setTimeout (() => {window.location = "/Changeauto";}, 1000)
      
  	}else {
  		alert("something went wrong");	
  	}
  };

  generateCommonCode=()=>{
		let code = Math.floor(Math.random()*100000)
		console.log(code);
			this.setState({generatedCode:code})
};


  passwordHandler = (value) => {
setTimeout(()=>{
this.setState({passwordInput:Number(value) });
},200);
};

axiosRequest = () => {
	const {input, passwordInput} = this.state;
	axios.post('http://localhost:3000/api/auth/register', {
		"email": `${input}`,
		"password": `${passwordInput}`
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
}

render(){
	const {mailUsed,mailNotExist,codeSended,passwordInput,generatedCode,input,validate} = this.state;
	return (

	<div className="loginScreen">
<div className="regwrapper">

		<div className="registration">
			<h1>Регистрация</h1>
		</div>
	
		<div className="validationInputRow">
			
			<p>Электронная почта</p>
			<div className="inputRowComponent">
			
					<input onChange={()=> {this.inputHandler(event)}} 
						className="validationInputField"
						placeholder="ivanov.ivan@mail.ru"
				/>

<p className="validationErrorText" style={validate === false ? {display:'block'}:{display:'none'}
                 }>Адрес введён неправильно.<a href="/Emailauto">Попробуйте ещё раз</a></p>

<p className="validationErrorText" style={ mailNotExist === true ? {display:'block'} : {display:'none'} }>Указанный адрес не зарегистрирован</p>
							<p className="validationErrorText" style={ mailUsed === true ? {display:'block'} : {display:'none'} }>Указанный адрес уже используется.Нажмите <a href="/About">Войти</a></p>
				
				<img className="validationInputFieldIndication"src={validationSuccess}
				style={input.length > 0 && validate != false && mailUsed !== true && mailNotExist !== true ? {display:'block'}:{display:'none'} }
				/>
				
				<img className="validationInputFieldIndication"src={validationFaild}
				style={mailUsed === true || mailNotExist === true || validate === false ? {display:'block'}:{display:'none'} }
				/>

							<p className="validationErrorText" style={ mailNotExist === true ? {display:'block'} : {display:'none'} }>Указанный адрес не существует</p>
							<p className="validationErrorText" style={ mailUsed === true ? {display:'block'} : {display:'none'} }>Указанный адрес уже используется.Нажмите <a href="/About">Войти</a></p>
							
			
			</div>
			
			<div className="codeField" 
				 style={codeSended === true ? {display:'block'}:{display:'none'}}>
				
				<p>Введите код</p>	
				
				   <div className="inputRowComponent"> 
					<input 
						className="validationInputField" placeholder="• • • • •"
						maxLength="5"
						onChange={ ()=>{this.passwordHandler(event.target.value)}}
					/>

<p className="validationErrorText" style={ codeSended === true ? {display:'block'} : {display:'none'} }>Не получили код?Нажмите <a href="#">Выслать ещё раз</a></p>
				 <img className="validationInputFieldIndication"src={validationSuccess}
        			  style={generatedCode === passwordInput ? {display:'block'}:{display:'none'} }
     			  />
     
     			<img className="validationInputFieldIndication"src={validationFaild}
        		style={generatedCode !== passwordInput ? {display:'block'}:{display:'none'} }
      			/>	
						
							
		
					</div>
			</div>
		</div>

				<button className="passwordSendButton" 
						style={validate !== true || mailUsed === true || mailNotExist === true ? {opacity:0.5} : { opacity:1}}		
						onClick={ ()=>{this.validationButtonHandler(event)}}> 

					<p style={codeSended == false ? {display:'block'} : {display:'none'}}>Выслать код</p>
					<p style={codeSended == true ? {display:'block'} : {display:'none'}}>Войти</p>
					
				 </button>
				 </div>
		</div>
	);
  }
}