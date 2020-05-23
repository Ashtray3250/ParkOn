import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import logo from './img/logo.png';
import back_personal from './img/back_personal.png';

export default class About extends React.Component {



    render(){
        return(
            <div className="About">
            
              <div className="aboutHeader">
                  
                  <div className="backToPersonal">
                    <Link to="/Personal" >
                      <img src={back_personal} />
                    </Link>
                  </div>

                <div className="aboutLogo">
                  <img src={logo}  />
                </div>
              
              </div>
            
              <div className="aboutTextWraper">
                <p className="aboutText">
                  Команда ParkON благодарит вас
                  за скачивание нашего приложения.
                  Количество камер и возможности 
                  будут развиваться пропорционально
                  с желанием аудитории пользоваться
                  нашим сервисом.
                <br/>
                <br/>
                 Проект реализован благодаря
                 Команде ParkON  , ее вере 
               <br/>и целеустремленности.
               <br/> Спасибо им:Дима, Магдалина, Стас, Татьяна, Елена,
                 Саша, Абзал, Евгения, Евгений.
               <br/>
               <br/>
                 Будьте с нами)
               </p>
              </div>

            </div>




          ); 
        }
      }