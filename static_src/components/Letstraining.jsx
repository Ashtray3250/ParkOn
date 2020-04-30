import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import markGreen from "./img/markGreen.png";
import markRed from "./img/markRed.png";
import number from "./img/number.png";
import zero from "./img/zero.png";
import camera from "./img/photo.png";
import findme from "./img/someicon.png";
import plus from "./img/plus.png";

export default class Letstraining extends React.Component {

    state={
        
    };

    


    render(){
        return <div className="mainadvise">
  <div className="firstadvice">
<div className="greenicon">
              <img className="ico" src={camera}/>
              
              <img className="num" src={number}/>
              
</div>
         <div className="green">Иконка на карте указывает на наличие камеры ParkOn
              Зеленый цвет указывает на наличие свободных мест
</div>
</div>
              
              
              <div className="secondadvice">
              <div className="redicon">


              <img className="camred" src={camera}/>
              <img className="zerored" src={zero}/>
              </div>
              <div className="red">
              Красный же на их отсутствие. Цифрами указано кол-во свободных мест, нажав на иконку вы можете посмотреть трансляцию с камеры.
                          </div> 
                          </div>

                          <div className="thirdadvice">
                          <div className="zoom">
                            
                          </div>

                          <div className="zoomplus"></div>
                            <div className="zoomminus"></div>
                            <div className="minus"></div>
                            <div className="circle"></div>
                            <div className="circles"></div>

                           Иконки мастштабирования карты. Так же можно управлять масштабом двумя пальцами, сужая и разводя их на экране смартфона.
                          
                          
                          </div> 

                          
                          

                          <div className="fourthadvice">
                          <img className="find" src={findme}/>
              Иконка определения Вашего местоположения на карте. Нажимая на нее в первый раз, пожалуйста, предоставьте разрешение приложению.
              
              </div> 
              
              <Link to="/Map" className="done">
                      Завершить
                  </Link>
</div>
        }
    }