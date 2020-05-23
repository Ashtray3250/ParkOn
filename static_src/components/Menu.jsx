import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import markGreen from "./img/markGreen.png";
import markRed from "./img/markRed.png";
import camera from "./img/photo.png";
import MapModule from './MapModule';


export default class Menu extends React.Component {



    render(){
        return(
       <div className="menu_profile">
           <div className="menu_close">
           <Link to="/MapModule" className="close_button">X</Link>   
           <p className="menu_main">Меню</p> 
           </div>
          
            <div className="advice ">
              <Link to="/MapModule" className="done">
                 Завершить
              </Link>
      </div>
    </div>
      )
    }
  }