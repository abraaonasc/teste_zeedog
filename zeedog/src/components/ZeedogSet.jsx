import React , {Component} from 'react'
import './ZeedogSet.css'
import ZeedogPt from './ZeedogPt';
import buttonBack from '../assets/img/return-btn.png'
import dropDown from '../assets/img/dropdown-balloon-pressed.png'
import {Link} from 'react-router-dom'
import axios from 'axios'

const initialState = {
    user :{raca: ''},
    list:[]
}


export default class ZeedogSet extends Component{
    state = {...initialState}

  componentWillMount(){
    const baseUrl ="http://localhost:3002/raca";
    axios(baseUrl).then(resp => {
        console.log(resp.data)
        this.setState({list: resp.data})
        for (const raca in resp.data) {
            if (resp.data.hasOwnProperty(raca)) {
                const element = resp.data[raca];
                var racaDom = element.pt_name
                console.log(racaDom)
            }
        }
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
                <div className="teste">
                    <ul>
                    </ul>
                </div>
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




