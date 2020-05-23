import React from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import axios from "axios";
import JSMpeg from 'jsmpeg-player';


export default class Stream extends React.Component {

    state={
    	streamID:'5ec018a6632eba3714ae0610',
      userID:'5eb3d90369e0e7316090df6f',
      portID:" ",
      terminated:false,
    };


    componentDidMount() {
      console.log('mount');
      this.getStreamPort();
   // this.requestsAxios();

    };
    componentDidUpdate(){
      this.playerRendering();
    };

//--------------------------------__________________--------------------------------- //


//---------запросы user id и stream id для определения порта потока-------//


    // getStream = () => {
      // console.log('ID потока получен');
      // axios.get('http:\//localhost:3000/api/stream');
    // };
// 
// getUser = () => {
// console.log('User ID получен');
        // return axios.get('http:\//localhost:3000/api/user/');
    // };
// 
     getStreamPort = () => {
        console.log('Порт получен');
       axios.post(`http:\//localhost:3000/api/stream/open/${this.state.streamID}`,{ id:`${this.state.userID}`})
       .then((response)=>{
        console.log(response);
            this.setState({portID:response.data})
       });
      };
// 
// 
// 
    // requestsAxios = () => {
      // console.log('requests start')
      // axios.all([this.getStream(), this.getUser()])
      // .then (axios.spread( (strm,usr) => {
        // const strmID = strm.data[5]._id;
        // console.log("STREAM:" + strmID);
        // const usrID = usr.data[0]._id ;
        // this.setState({streamID:strmID,userID:usrID});
        // console.log('stream ID и User Id записаны');
        // this.getStreamPort();
        // console.log('Requests ended');
      // }));
    // };
// 
// 
//--------------------------------------------------------------------------//
// 


    playerRendering = () => {
      const portid = this.state.portID;
      setTimeout(()=>{

      const streamURL = `ws://localhost:${portid}`;
      let canvas = document.getElementById('canvas');
      const player = new JSMpeg.Player(streamURL, {canvas:canvas,poster:"img/loader.gif"} );
      console.log('player create');
      },800);
    };



    streamActions=()=>{
      if (this.state.terminated === false || undefined) {
          this.setState({terminated:true});
      axios.post(`http:\//localhost:3000/api/stream/close/${this.state.streamID}`,{id:`${this.state.userID}`});
      JSMpeg.Player(`ws://localhost:${portid}`, {canvas}).stop();
     }else{
      setTimeout(()=>{

      this.getStreamPort();
      this.setState({terminated:false})
      },500);
     }
    }



    render(){
      const {portID,terminated} = this.state;
        return (
        <div id="Stream">
          
          <div className="player">
                          <p className="terminatedText"
                           style={terminated === true ? {display:"block"}:{display:'none'} }>
                           Трансляция остановлена
                           </p>
        	     <canvas id="canvas"></canvas>
          
                  <button  className="passwordSendButton streamActions__button"
                       onClick={()=>{this.streamActions()}}
                       style={terminated === true || undefined ? {display:'block'}:{display:'none'}} >
                       <p>Начать трансляцию</p>
                  </button>          



               <button  className="streamActions__button"
                    onClick={()=>{this.streamActions()}} 
                    style={terminated === false || undefined ? {display:'block'}:{display:'none'}} >
                    <p>Завершить трансляцию</p>
               </button>          



                <div className='NeuroMask' style={this.state.portID != ' ' ? {display:"block"}:{display:"none"}}>
                  <span className="NM_item NM_item_1"></span>
                  <span className="NM_item NM_item_2"></span>
                  <span className="NM_item NM_item_3"></span>
                  <span className="NM_item NM_item_4"></span>
                  <span className="NM_item NM_item_5"></span>
                  <span className="NM_item NM_item_6"></span>
                </div>

          </div>

        </div>

      	);
      }
    }