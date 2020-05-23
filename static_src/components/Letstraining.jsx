import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import markGreen from "./img/markGreen.png";
import markRed from "./img/markRed.png";
import camera from "./img/photo.png";
import findme from "./img/someicon.png";
import plus from "./img/plus.png";
import stroke from "./img/stroke.png";
import MapModule from './MapModule';


export default class Letstraining extends React.Component {



    render(){
        return(
       <div className="mainadvise" style={{textAlign:"none"}}>
          <div className="AdviseTopRow">
            <Link to="/Personal" >
              <img src={stroke}/>
            </Link>
          </div>
          
            <div className="advice ">
            <div className="adviceText">
                  Камеры ParkOn. 
                  Зеленый цвет - свободно
                  Красный - мест нет 
                  Цифрами указано 
                  количество мест. Нажав на иконку вы можете посмотреть трансляцию с камеры 
            </div>
              <div className="red_green_icons">

              <div className="redicon">
                    <img className="ico" src={camera}/>
                    <br/>
                    <p className="num"></p>
                  </div>

              <div className="greenicon">
                <img className="ico" src={camera}/>
                <br/>
                <p className="num">9+</p>


</div>
  </div>
    </div>


<div className="advice">
  <div className="gradient_home">
    <div className="home_main">
      <div className="home"></div>
        </div>
     </div>

<div className="advice">
  <div className="adviceText">
                  Кнопка “Домой” -быстрый доступ к информации по парковочным местам рядом с домом. Сохранить или изменить адрес дома можно в личном кабинете
      </div>        
        </div> 
           </div>

           <div className="advice">
  <div className="adviceText">
  Быстрый доступ к поиску
   адреса места парковки
    с 
    помощью голоса   
    </div>

  <div className="gradient_photo">
    <div className="micro_main">
      <div className="micro">
        
      </div>
        </div>
     </div>      
</div>

            


                          
                          
 
              <Link to="/MapModule" className="done">
                 Завершить
              </Link>
      </div>
      )
    }
  }