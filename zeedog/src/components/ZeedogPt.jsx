import './ZeedogPt.css'
import React from 'react'
import button from  '../assets/img/button-pt.png'
import {Link} from 'react-router-dom'

function SectionPt(props) {
    
    return (
        <section className="zeedogPt"  >
            <p className="text">{props.text}</p>
            <h2 className="title">{props.title}</h2>
            <p className="text">{props.text1}</p>
            <Link to="/ZeedogPt">
                <button className="ptActive" >
                    <img src={button} alt='button'   />
                </button>
            </Link>
        </section>
    );
  }

  export default SectionPt;
  








  