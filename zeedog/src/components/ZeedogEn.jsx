import './ZeedogEn.css'
import React from 'react'
import button from  '../assets/img/button-en.png'
import {Link} from 'react-router-dom'

export default props =>
    <section className="zeedogEn">
        <p className="text">{props.text}</p>
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text1}</p>
        <Link to="ZeedogEn">
            <button className="ptActive">
                <img src={button} alt='button' />
            </button>
        </Link>
    </section>

    