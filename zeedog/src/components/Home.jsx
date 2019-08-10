import React from 'react'
import ZeedogPt from '../components/ZeedogPt'
import ZeedogEn from '../components/ZeedogEn'

function appInitial(props) {
    
    return (

        <div className="appInitial">
            <ZeedogPt text="PT" title="TÁ COM DÚVIDA NO TAMANHO?" text1="RELAXA QUE A GENTE TE AJUDA!" />
            <ZeedogEn text="En" title="NOT SURE ABOUT THE SIZE?" text1="NO WORRIES, WE'LL HELP YOU!"/>
        </div>
    );
  }

  export default appInitial;
  



