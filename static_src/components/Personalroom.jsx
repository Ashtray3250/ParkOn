import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import about_icon from "./img/about_icon.png";
import learn_icon from "./img/learn_icon.png";
import sup_icon from "./img/sup_icon.png";
import logo from './img/logo.png';
import private_personal from './img/private_personal.png';
import back_personal from './img/back_personal.png';


export default class Personalroom extends React.Component {

    state={
        
    };




    render(){
        return (
        <div className="personal">
           
            <div className="personal_top">
                <div className="personalRoomHeader">
                <Link to="/Personal" className="backToPersonal">
                <img src={back_personal} />
                </Link>
                      <p>Личный кабинет</p>
                  <img  src={private_personal} className="personalRoomHeaderImage"/>
                       
                </div>  
                <div className="example">
            <p>ivanovivan@mail.ru</p>   
            </div>

            </div>

            

            <div className="linkpersonal">

            <div className="email_personal">
                <p>Вы можете изменить домашний адрес. </p>            
                       <input  type="Введите адрес"
                        placeholder="Введите адрес"
                        />

                    </div>              
              <Link to="/MapModule" className="save">
                 Сохранить
              </Link>

            </div>
        </div>
        );
    }
 }