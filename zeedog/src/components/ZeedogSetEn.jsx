import React , {Component} from 'react'
import './ZeedogSetEn.css'
import ZeedogEn from './ZeedogEn';
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
            <div className="component_En">
            <Link to="/">
                <button className="btn-return">
                    <img src={buttonBack} alt="ToBack"/>
                </button>
            </Link>
            <ZeedogEn title="FIND OUT WHAT SIZES FIT YOUR DOG BEST">
            </ZeedogEn>

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




