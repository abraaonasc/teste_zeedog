import React from 'react'
import {Switch , Route , Redirect} from 'react-router'

//import ZeedogPt from '../components/ZeedogPt'
//import ZeedogEn from '../components/ZeedogEn'
import Home from '../components/Home'
import ZeedogSet from '../components/ZeedogSet'
import ZeedogSetEn from '../components/ZeedogSetEn'
import Detalhe from '../components/Detalhe'


export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ZeedogPt" component={ZeedogSet} />
        <Route exact path="/ZeedogEn" component={ZeedogSetEn} />
        <Route exact path="/Detalhe" component={Detalhe} />
        <Redirect from="*" to="/"></Redirect>
    </Switch>