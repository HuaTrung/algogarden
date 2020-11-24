import React from "react";
import * as PIXI from "pixi.js";
import cell_board from "../assets/airplane/pixeluipack/9-Slice/list.png";
import cell_board_pressed from "../assets/airplane/pixeluipack/9-Slice/Colored/blue_pressed.png";

class BoardGame extends React.Component {
  constructor(props) {
    super(props);
    var tmp = new Array(10);
    for (var i = 0; i < tmp.length; i++) {
      tmp[i] = new Array(10);
    }
    this.state = {
      app: PIXI.Application,
      gameCanvas: HTMLDivElement,
      boardGame: tmp,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  }

  setup = () => {
    const app = this.state.app;

    const cell = app.screen.width / 20;

    const startX = app.screen.width / 2 - 5 * cell;
    const startY = app.screen.height - 12 * cell;

    const white_cell = PIXI.Texture.from(cell_board);
    const white_cell_pressed = PIXI.Texture.from(cell_board_pressed);

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        this.state.boardGame[i] = PIXI.Sprite.from(white_cell);
        this.state.boardGame[i].anchor.set(0.5);
        this.state.boardGame[i].x = startX + cell * j;
        this.state.boardGame[i].y = startY + cell * i;
        this.state.boardGame[i].width = cell;
        this.state.boardGame[i].height = cell;
        // Opt-in to interactivity
        this.state.boardGame[i].interactive = true;

        // Shows hand cursor
        this.state.boardGame[i].buttonMode = true;

        // Pointers normalize touch and mouse
        this.state.boardGame[i].on("pointerdown", function () {
          if (this.texture == white_cell_pressed) {
            this.texture = white_cell;
          } else {
            this.texture = white_cell_pressed;
          }
        });
        app.stage.addChild(this.state.boardGame[i]);
      }
    }
    // app.stage.addChild(bunny);
  };

  componentDidMount() {
    this.state.app = new PIXI.Application({
      width: this.state.gameCanvas.offsetWidth,
      height: this.state.gameCanvas.offsetHeight,
      backgroundColor: 0xeceff1,
    });
    this.state.gameCanvas.appendChild(this.state.app.view);
    this.state.app.start();
    this.setup();
  }
  componentWillUnmount() {
    this.state.app.stop();
  }
  render() {
    let component = this.state;
    return (
      <div
        ref={(thisDiv) => {
          component.gameCanvas = thisDiv;
        }}
        style={{ height: "600px" }}
      ></div>
    );
  }
}

export default BoardGame;
