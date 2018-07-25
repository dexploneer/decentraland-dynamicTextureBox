import { createElement, Vector3Component } from "metaverse-api";

export interface IProps {
  position:Vector3Component,
  scale:Vector3Component,
  rotation?:Vector3Component | { x: 0, y: 0, z: 0 },
  frontTexture?:string | '',
  backTexture?:string | '',
  leftTexture?:string | '',
  rightTexture?:string | '',
  upTexture?:string | '',
  downTexture?:string | ''
}

export const DynamicBox = (props: IProps) => {
    return (
      <entity position={props.position} rotation={props.rotation}>
        <material id="DBFront_material" albedoTexture={ props.frontTexture } roughness={1}/>
        <material id="DBBack_material" albedoTexture={ props.backTexture } roughness={1}/>
        <material id="DBLeft_material" albedoTexture={ props.leftTexture } roughness={1}/>
        <material id="DBRight_material" albedoTexture={ props.rightTexture } roughness={1}/>
        <material id="DBUp_material" albedoTexture={ props.upTexture } roughness={1}/>
        <material id="DBDown_material" albedoTexture={ props.downTexture } roughness={1}/>

        <plane scale={props.scale} 
               position={{ x:0, y: 0, z: -(props.scale.z / 2) }} 
               color="#FFFFFF" 
               material="#DBFront_material"
               id="box_front"/>
        <plane scale={props.scale} 
               position={{ x:0, y: 0, z: +(props.scale.z / 2) }} 
               rotation={{ x: 0, y: 180, z: 0 }} 
               color="#FFFFFF" 
               material="#DBBack_material"
               id="box_back"/>
        <plane scale={{ x: props.scale.z, y: props.scale.y, z: props.scale.x }} 
               position={{ x:-(props.scale.x / 2) , y: 0, z: 0 }} 
               rotation={{ x: 0, y: 90, z: 0 }} 
               color="#FFFFFF" 
               material="#DBLeft_material"
               id="box_left"/>
        <plane scale={{ x: props.scale.z, y: props.scale.y, z: props.scale.x }} 
               position={{ x:+(props.scale.x / 2) , y: 0, z: 0 }} 
               rotation={{ x: 0, y: 270, z: 0 }} 
               color="#FFFFFF" 
               material="#DBRight_material"
               id="box_right"/>
        <plane scale={{ x: props.scale.x, y: props.scale.z, z: props.scale.z }}
               position={{ x: 0, y: (props.scale.y / 2), z: 0 }}
               rotation={{ x: 90, y: 0, z: 0}}
               color="#FFFFFF"
               material="#DBUp_material"
               id="box_up"/>
        <plane scale={{ x: props.scale.x, y: props.scale.z, z: props.scale.z }}
               position={{ x: 0, y: -(props.scale.y / 2), z: 0 }}
               rotation={{ x: 270, y: 0, z: 0}}
               color="#FFFFFF"
               material="#DBDown_material"
               id="box_down"/>      
      </entity>     
    );
};
