import React, {Component} from 'react'
import {bg,fg, bird0, bird1, bird2, pipeN, pipeS, gameover, _ok_, splash, ready} from '../common/Sprite';
import {width, height} from '../common/common';
import {rungame, states} from '../store/store';
import {observer} from 'mobx-react';

const SpriteWrapper = observer(class SpriteWrapper extends Component {
  render = () => {
    const gameSprite = this.props.gameSprite;
    const rotate = 'rotate('+ gameSprite.rotation +'rad)'
    const translate = 'translate(' + gameSprite.cx + 'px,' + gameSprite.cy + 'px)'
    const ctrans = (gameSprite.rotation == null) ? translate : translate + ' ' + rotate;
    const onClickHandler = (this.props.onClickHandler) == null ? null : this.props.onClickHandler;
    var style = {
      transform: ctrans,
      position: 'absolute'
    }
    return (
      <div style={style} onClick={onClickHandler}>
        {this.props.children}
      </div>)
  }
})

const Bg = observer(
  class Bg extends Component {
  render = () => {
      return <SpriteWrapper gameSprite={this.props.bg}> {bg} </SpriteWrapper>;
  }

})

const Fg = observer(
  class Fg extends Component {
  render = () => {
      return <SpriteWrapper gameSprite={this.props.fg}> {fg} </SpriteWrapper>;
  }

})

export const Bird = observer(
   class Bird extends Component {

      render = () => {
          let wbird;
          switch(this.props.bird.frame) {
            case 1:
            case 3:
              wbird = bird1
              break
            case 2:
              wbird = bird2
              break
            case 0:
            default:
              wbird = bird0
              break
          }

          return <SpriteWrapper gameSprite={this.props.bird}> {wbird} </SpriteWrapper>;
      }
   }
)

const Pipe = observer(
  class Pipe extends Component {
  render = () => {
    let wpipe;
    switch(this.props.pipe.type) {
      default:
      case "N":
        wpipe = pipeN
        break
      case "S":
        wpipe = pipeS
        break
    }

    return <SpriteWrapper gameSprite={this.props.pipe}> {wpipe} </SpriteWrapper>;

  }
})

const Gameover = observer(
  class Gameover extends Component {

  render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2 - 94, cy: height-400}}> {gameover} </SpriteWrapper>;
  }

})

export const OK = observer(
  class OK extends Component {

  render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2 - 40, cy: height-340}} onClickHandler={rungame} > {_ok_} </SpriteWrapper>;
  }

})

export const Splash = observer(
  class Splash extends Component {

  render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2 - 59, cy: height-300}}> {splash} </SpriteWrapper>;
  }

})

export const Ready = observer(
  class Ready extends Component {

  render = () => {
      return <SpriteWrapper gameSprite={{cx: width/2 - 87, cy: height-380}}> {ready} </SpriteWrapper>;
  }

})

const Game = observer(class Game extends Component {
  render() {
    const {bgs, fgs, bird, pipes} = this.props.store
    const { currentstate } = this.props.game;

    const style = {
      width: width,
      height: height
    }
    return (
      <div className="App" id="fakingcanvas" style={style}>
        { bgs.map( (bg) => ( <Bg bg={bg} key={bg.id} /> )     )}
        { pipes.map( (pipe) => (  <Pipe pipe={pipe} key={pipe.id} /> )   )}
        <Bird bird={bird} />
        { (currentstate === states.Score) ? <Gameover /> : null }
        { (currentstate === states.Score) ? <OK /> : null }
        { (currentstate === states.Splash) ? <Splash /> : null }
        { (currentstate === states.Splash) ? <Ready /> : null }
        { fgs.map( (fg) => ( <Fg fg={fg} key={fg.id} /> )     )}
        <h1>FLAPPYBIRD GAME</h1>
        <h2>click to make the bird float and go through the green pillars!</h2>
        
      </div>
    ) 
  }
})


export default Game;