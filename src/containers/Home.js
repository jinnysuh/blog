import React, {Component} from 'react'
import Popup from './Popup';
import Video from '../components/Video'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      post: 'write your username',
      popupOn: false
    }
  }

  render() {
    const {post, popupOn} = this.state
    return (
      <div>
     
      <a href = "https://www.youtube.com/channel/UCFckiz3s8f4GTG8v11lk1cA">  
      <img src="https://s3.ap-northeast-2.amazonaws.com/twinkle-seoul/pictures/284/1074.jpg"
         style={{
          width: '300px'
        }}/></a>
        <p className="App-intro">
          <strong>Welcome to my website!!</strong>
        </p>
        
       <Video videoCode="xB2wfk7XJZw" />
        <p>-- Made by <strong><em>Mikey</em>. and <em>Jinny</em></strong></p>
        
        <p>Hi!I like to read books and play minecraft in rest times.</p>
        <p>My favorite kind of book is called <em>'Warriors'.</em> <a href="http://www.warriorcats.com/">Warriors website</a></p>
        <p>I like computer programming.</p>
      
        <p>{post}</p>
        <input
          value={post}
          onChange={event => this.setState({post: event.target.value})}
          placeholder="write it and press enter"
          onKeyUp={event => {
            if (event.key === 'Enter') {
              this.setState({popupOn: true})
            }
          }}
        />
        <Popup show={popupOn} onHide={() => this.setState({popupOn: false})} text={post} />
        <button
          className="btn btn-default"
          onClick={() => this.setState({popupOn: true})}
        >
          Done
        </button>
      
       
        
      </div>
         
    )
  }
}