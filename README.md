# decentraland-dynamicTextureBox
dynamictexturebox is a box consisting of a panel for each face. the fundamental difference compared to a normal box is that this can be texturized in every face.
The box is rotatable and scalable like a normal box. The example scene shows its main peculiarities. The box code is contained in the folder 

```src/DynamicBox.tsx```

the component its plug and play. you just have to import it into your scene and include it in the render function

```import { DynamicBox } from 'src/DynamicBox'```
```
<DynamicBox 
        position={{ 
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
            x: this.state.rotationX,
            y: this.state.rotationY,
            z: this.state.rotationZ
        }}
        frontTexture={this.state.frontTexture}
        backTexture={this.state.backTexture}
        leftTexture={this.state.leftTexture}
        rightTexture={this.state.rightTexture}
        upTexture={this.state.upTexture}
        downTexture={this.state.downTexture}
/>
```

You can learn more about our JSX-style lifecycle and rendering in our documentation: https://docs.decentraland.org/

Install the CLI

Download and install the Decentraland CLI by running the following command

```npm i -g decentraland```

For a more details, follow the steps in the Installation guide.

Previewing the scene

Once you've installed the CLI, download this example and navigate to its directory from your terminal or command prompt.

from the scene directory:

```$:  dcl preview```
Any dependencies are installed and then the CLI will open the scene in a new browser tab automatically.
