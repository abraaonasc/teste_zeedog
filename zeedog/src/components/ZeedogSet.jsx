import React , {Component} from 'react'
import './ZeedogSet.css'
import ZeedogPt from './ZeedogPt';
import buttonBack from '../assets/img/return-btn.png'
import dropDown from '../assets/img/dropdown-balloon-pressed.png'
import {Link} from 'react-router-dom'
import axios from 'axios'



class ZeedogSet extends Component {
    constructor(props) {
      super(props);  
      this.state = {
        list: [],
        raca:"",
        open:false,
      };
  
    //   this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.renderBreed();
    }

    toggleBox = () => {
        this.setState(prevState => ({ open: !prevState.open }));
      };
 

    renderBreed = async() => {
        try {
            let res = await axios.get('http://localhost:3002/raca');
            let posts = res.data;
            // this will re render the view with new data
            this.setState({
                list: Object.keys(posts).map((_) => posts[_]),
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        const { open } = this.state;
        const list = this.state.list || [];
        console.group('Listas:')
        console.log(list);
        console.groupEnd();
        return(
        <div className="component_Pt">
            <Link to="/">
                <button className="btn-return">
                    <img src={buttonBack} alt="ToBack"/>
                </button>
            </Link>
            <ZeedogPt title="Descubra o tamanho ideal" text1="Veja o que cachorros da mesma raça usam">
            </ZeedogPt>

            <span className={`${open ? "show" : "hide"} dropDown`} onClick={this.toggleBox} >

                <img src={dropDown} alt="pressed"/>
                <div className="teste">
                    <ul>
                    {list.map(value => <li className={value.pt_name}> <a href="#"   >{value.pt_name}</a> </li>)}    
                    </ul>
                </div>
            </span>
               
            </div>
        );
    }
}

export default ZeedogSet;