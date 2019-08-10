import React , {Component} from 'react'
import './ZeedogSet.css'
import ZeedogPt from './ZeedogPt';
import buttonBack from '../assets/img/return-btn.png'
import dropDown from '../assets/img/dropdown-balloon-pressed.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

const initialState = {
    raca :{pt_name: ''},
    list:[]
}


export default class ZeedogSet extends Component{

    state = {...initialState}

  componentWillMount(){
    const baseUrl ="http://localhost:3002";
    axios(baseUrl).then(resp => {
        console.log(resp.data)
    })
   }


    renderTemp() {
        return(
            <div className="component_Pt">
            <Link to="/">
                <button className="btn-return">
                    <img src={buttonBack} alt="ToBack"/>
                </button>
            </Link>
            <ZeedogPt title="Descubra o tamanho ideal" text1="Veja o que cachorros da mesma raça usam">
            </ZeedogPt>

            <span className="dropDown">
            
                <img src={dropDown} alt="pressed"/>
                <div className="teste"></div>
            </span>
               
            </div>
        )
   
    }


  

    render(){
        return(
            this.renderTemp()
        )
    } 
}




