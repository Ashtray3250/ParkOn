import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import about_icon from "./img/about_icon.png";
import learn_icon from "./img/learn_icon.png";
import sup_icon from "./img/sup_icon.png";
import logo from './img/logo.png'
import private_personal from './img/private_personal.png'

export default class Personal extends React.Component {

    state={
        
    };

    


    render(){
        return (
        <div className="personal">
            <div className="personal_top">
                <div className="personal_header">
                
                      <p>Меню</p>
                  <Link className="close" to="/MapModule" >
                        </Link>    
                </div>  
            </div>
            

            

            <div className="linkpersonal">
          <div className="linkList">
            <div className="personal_link">
                    <img className="personal_icons" src={private_personal}/>
                        <Link to="/Personalroom" >
                              Личный кабинет
                        </Link>                                
                    </div>

                    <div className="personal_link">
                    <img className="personal_icons" src={about_icon}/>
                        <Link to="/About" >
                              О приложении
                        </Link>                       
                                
                    </div>

                    <div className="personal_link">    
                    <img className="personal_icons" src={learn_icon}/>
                        <Link to="/Letstraining" >
                              Обучение
                        </Link>
                              
                    </div>          
        
                        
                        
                    <div className="personal_link bottom">
                    <img className="personal_icons" src={sup_icon}/>
                          <Link to="/Feedback" >
                                 Обратная связь
                          </Link>
                              
                    </div>
                </div>
            </div>
        </div>
        );
    }
 }