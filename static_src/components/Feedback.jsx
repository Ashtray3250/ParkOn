import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import back_personal from './img/back_personal.png';
import sup_icon from "./img/sup_icon.png";
import axios from 'axios';


export default class Feedback extends React.Component {


    state={
        textareaInput:' ',
        feedbackSended:false,
    };


    textareaInput = (event)=>{
        const value = event.target.value;
        console.log(value);
        setTimeout(()=>{
        this.setState({textareaInput:value});
        },100)
    };


    feedbackSend = () => {
        axios.post(`http://localhost:3000/api/mail/${this.props.userID}`,{
          "to": "Info.ParkOn@mail.ru",
          "subject": "Тестовое письмо для проекта",
          "text": `${this.state.textareaInput}`,
          "html": `<div style='border: 2px solid green;>${this.state.textareaInput}<br/><strong>${this.props.userID}<strong></div>`
        })
        .then((response)=>{

        this.setState({feedbackSended:true});
        alert('Ваше обращение отправлено!');
          },
            (error) => {  
            alert('Что-то пошло не так.Обращение не отправлено');
            }
        )
    }


    render(){
        return <div className="feedback">
                    <div className="feedback_header">
                        
                        <Link to="/Personal" className="backToPersonal">
                          <img src={back_personal} />
                        </Link>
                          <p style={{color:"white",fontSize:'22px',margin:0}}>Обратная связь</p>
                        <img src={sup_icon}/>
                       </div>

            
            <textarea  name="FeedbackArea"  cols="30" rows="10" style={ {resize:"none"} }
                       placeholder="Вы можете оставить отзыв, сообщить о неполадке или просто пообщаться с нами;) "
                       onChange={ ()=>{this.textareaInput(event)} }>
                       </textarea> 
            

            <button className="send_it"
                    onClick={()=>{this.feedbackSend()}} >
                Отправить 
            </button>
          </div>
      
        }
      }