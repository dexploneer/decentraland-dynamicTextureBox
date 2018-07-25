import { createElement, ScriptableScene } from 'metaverse-api'
import { DynamicBox } from 'src/DynamicBox'

export interface IState {
  posX:number,
  posY:number,
  posZ:number,
  scaleX:number,
  scaleY:number,
  scaleZ:number,
  rotationY:number,
  frontTexture:string,
  backTexture:string,
  leftTexture:string,
  rightTexture:string
}

const MOVEMENT = 0.01;
const ROTATION = 0.1;
const TEXTURE_FOLDER = 'texture';

export default class Scene extends ScriptableScene<any, IState> {
  state = { 
    posX: 5, 
    posY: 10, 
    posZ: 5,
    scaleX: 1,
    scaleY: 4,
    scaleZ: 1,
    rotationY: 0,
    frontTexture: "",
    backTexture: "",
    leftTexture: "",
    rightTexture: ""
  }

  props = {
    texturized: 0
  }

  loop() {
    setTimeout(() => {
      if(this.state.posY > this.state.scaleY / 2) {
        this.setState({ posY: this.state.posY - MOVEMENT });
      }
      else {
        if(this.state.rotationY < 360) {
          this.setState({ rotationY: this.state.rotationY + ROTATION });
        }
        else {
          this.setState({ rotationY: 0 });
          if(this.props.texturized == 1) {
            this.setState({ frontTexture: "texture/complete.jpg", backTexture: "texture/complete.jpg", scaleX: 4 });
            this.props.texturized = 2;
          }
        }

        if(this.state.rotationY >= 0 && this.state.frontTexture == ""){ 
          this.setState({ frontTexture: TEXTURE_FOLDER + "/0.jpg" });
        }
        else if(this.state.rotationY >= 90 && this.state.rightTexture == ""){ 
          this.setState({ rightTexture: TEXTURE_FOLDER + "/1.jpg" });
        }
        else if(this.state.rotationY >= 180 && this.state.backTexture == ""){ 
          this.setState({ backTexture: TEXTURE_FOLDER + "/2.jpg" });
        }
        else if(this.state.rotationY >= 270 && this.state.leftTexture == ""){ 
          this.setState({ leftTexture: TEXTURE_FOLDER + "/3.jpg" });
          this.props.texturized = 1;
        }
      }

      this.loop();
    });
  }

  sceneDidMount() {
      this.loop();

  }

  sceneWillUnmount() {

  }

  async render() {   
    return (
      <scene>
        <DynamicBox position={{ 
            x: this.state.posX, 
            y: this.state.posY, 
            z: this.state.posZ 
        }}
        scale={{
            x: this.state.scaleX,
            y: this.state.scaleY,
            z: this.state.scaleZ
        }} 
        rotation={{
            x: 0,
            y: this.state.rotationY,
            z: 0
        }}
        frontTexture={this.state.frontTexture}
        backTexture={this.state.backTexture}
        leftTexture={this.state.leftTexture}
        rightTexture={this.state.rightTexture}
        />
      </scene>
    )
  }
}
