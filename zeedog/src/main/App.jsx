import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'


import Router from '../Router/Router'
import Footer from '../components/Footer'


export default props =>
<BrowserRouter>
    <div className="app">
        <Router></Router>
        <Footer />
    </div>
</BrowserRouter>