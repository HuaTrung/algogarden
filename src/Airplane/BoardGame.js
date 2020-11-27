import React from "react";
import * as PIXI from "pixi.js";
import bar_window_image from "../assets/airplane/window/BarWindow.png";
import main_window_image from "../assets/airplane/window/MainWindow.png";

import white_image from "../assets/airplane/square/square_white.png";
import blue_image from "../assets/airplane/square/square_blue.png";
import yellow_image from "../assets/airplane/square/square_yellow.png";
import green_image from "../assets/airplane/square/square_green.png";
import blue_wounded_image from "../assets/airplane/square/square_blue_wounded.png";
import play_button_pressed_image from "../assets/airplane/button/play_button_pressed.png";
import play_button_image from "../assets/airplane/button/play_button.png";
import switch_button_pressed_image from "../assets/airplane/button/switch_button_pressed.png";
import switch_button_image from "../assets/airplane/button/switch_button.png";
import { db } from "./Firebase";

class BoardGame extends React.Component {
  constructor(props) {
    super(props);
    var tmp = new Array(10);
    for (var i = 0; i < tmp.length; i++) {
      tmp[i] = new Array(10);
    }
    var tmp1 = new Array(10);
    for (var i = 0; i < tmp1.length; i++) {
      tmp1[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    var tmp2 = new Array(10);
    for (var i = 0; i < tmp2.length; i++) {
      tmp2[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    var tmp3 = new Array(10);
    for (var i = 0; i < tmp3.length; i++) {
      tmp3[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    this.state = {
      app_pixi: PIXI.Application,
      gameCanvas: HTMLDivElement,
      board: tmp1,
      shooting_board: tmp2,
      uid: 1,
      game_state: "not_ready",
    };
    this.board = tmp3;
    this.pointDraw = 24;
    this.boardGame = tmp;
    this.isLoadYourBoard = true;
  }

  loadYourBoard() {
    if (typeof this.state.board == "undefined") console.log(this.state.board);
    else {
      var boardDraw;
      if (this.isLoadYourBoard) boardDraw = this.state.board;
      else boardDraw = this.state.shooting_board;
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          if (typeof boardDraw[i][j] == "undefined" || boardDraw[i][j] === 0) {
            this.boardGame[i][j].texture = this.white_cell;
            continue;
          }
          if (boardDraw[i][j] == 1)
            this.boardGame[i][j].texture = this.green_cell;
          if (boardDraw[i][j] == 2)
            this.boardGame[i][j].texture = this.yellow_cell;
          if (boardDraw[i][j] == 3)
            this.boardGame[i][j].texture = this.blue_cell;
        }
      }
    }
  }

  setupBoard() {
    const game = this;
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        var tmp = PIXI.Sprite.from(this.white_cell);
        tmp.anchor.set(0.5);
        tmp.x = this.startX + 20 + this.cell * j;
        tmp.y = this.startY + this.cell * i;
        tmp.width = this.cell;
        tmp.height = this.cell;
        // Opt-in to interactivity
        tmp.interactive = true;

        // Shows hand cursor
        tmp.buttonMode = true;
        tmp["x_coor"] = i;
        tmp["y_coor"] = j;
        // Pointers normalize touch and mouse
        async function onclick_cell() {
          if (game.isLoadYourBoard) {
            if (game.pointDraw <= 16 && game.pointDraw > 8) {
              if (this.texture == game.yellow_cell) {
                this.texture = game.white_cell;
                game.pointDraw++;
                game.board[this.x_coor][this.y_coor] = 0;
              } else {
                this.texture = game.yellow_cell;
                game.pointDraw--;
                game.board[this.x_coor][this.y_coor] = 2;
              }
            } else {
              if (game.pointDraw <= 24 && game.pointDraw > 16) {
                if (this.texture === game.blue_cell) {
                  this.texture = game.white_cell;
                  game.pointDraw++;
                  game.board[this.x_coor][this.y_coor] = 0;
                } else {
                  this.texture = game.blue_cell;
                  game.pointDraw--;
                  game.board[this.x_coor][this.y_coor] = 3;
                }
              } else {
                if (game.pointDraw <= 8 && game.pointDraw > 0) {
                  if (this.texture == game.green_cell) {
                    this.texture = game.white_cell;
                    game.pointDraw++;
                    game.board[this.x_coor][this.y_coor] = 0;
                  } else {
                    this.texture = game.green_cell;
                    game.pointDraw--;
                    game.board[this.x_coor][this.y_coor] = 1;
                  }
                }
              }
            }
            console.log(game.pointDraw);
            if(game.pointDraw==0){
              console.log(game);
              game.setState({
                board:game.board,
              })
            }
          } else {
            game.state.shooting_board[this.x_coor][this.y_coor] = 1;
            await db.ref("game_1").push({
              your_board: game.state.board,
              enemy_shooting_board: game.state.shooting_board,
              uid: game.state.uid,
              game_state: "shooting",
              timestamp: Date.now(),
            });
          }
        }
        function onhover_cell() {}

        tmp.on("pointerdown", onclick_cell).on("pointerover", onhover_cell);
        this.boardGame[i][j] = tmp;
        this.state.app_pixi.stage.addChild(this.boardGame[i][j]);
      }
    }
  }

  async componentDidMount() {
    this.state.app_pixi = new PIXI.Application({
      width: this.state.gameCanvas.offsetWidth,
      height: this.state.gameCanvas.offsetHeight,
      backgroundColor: 0xeceff1,
    });
    this.state.gameCanvas.appendChild(this.state.app_pixi.view);
    this.state.app_pixi.start();
    var state = this.state;
    const app = this.state.app_pixi;

    this.play_button = new PIXI.Texture.from(play_button_image);
    this.switch_button = new PIXI.Texture.from(switch_button_image);
    this.switch_button_pressed = new PIXI.Texture.from(
      switch_button_pressed_image
    );

    this.play_button_pressed = new PIXI.Texture.from(play_button_pressed_image);
    this.hoverCell =
      "url('../assets/airplane/button/switch_button_pressed.png'),auto";
    this.white_cell = new PIXI.Texture(
      new PIXI.BaseTexture(white_image),
      new PIXI.Rectangle(15, 15, 70, 70)
    );
    // white_cell.baseTexture.resolution=100;
    this.blue_cell = new PIXI.Texture(
      new PIXI.BaseTexture(blue_image),
      new PIXI.Rectangle(15, 15, 70, 70)
    );
    this.yellow_cell = new PIXI.Texture(
      new PIXI.BaseTexture(yellow_image),
      new PIXI.Rectangle(15, 15, 70, 70)
    );
    this.green_cell = new PIXI.Texture(
      new PIXI.BaseTexture(green_image),
      new PIXI.Rectangle(15, 15, 70, 70)
    );

    this.blue_wounded_cell = new PIXI.Texture(
      new PIXI.BaseTexture(blue_wounded_image),
      new PIXI.Rectangle(15, 15, 70, 70)
    );
    this.cell = app.screen.width / 20;

    this.startX = app.screen.width / 2 - 5 * this.cell;
    this.startY = app.screen.height - 12 * this.cell;
    const game = this;
   function onclick_play() {
      console.log(state);
      this.texture = game.play_button_pressed;
      db.ref("game_1").push({
        your_board: state.board,
        enemy_shooting_board: state.shooting_board,
        uid: state.uid,
        game_state: "ready",
        timestamp: Date.now(),
      });
    }
    function outclick_play() {
      this.texture = game.play_button;
    }
    var play_button_sp = new PIXI.Sprite.from(this.play_button);
    play_button_sp.x = 0;
    play_button_sp.y = 0;
    play_button_sp.width = 50;
    play_button_sp.height = 50;
    play_button_sp.interactive = true;
    play_button_sp.buttonMode = true;
    play_button_sp
      .on("pointerdown", onclick_play)
      .on("pointerup", outclick_play);

    app.stage.addChild(play_button_sp);

    async function onclick_switch() {
      this.texture = game.switch_button_pressed;
      game.isLoadYourBoard = !game.isLoadYourBoard;
      game.loadYourBoard();
    }
    function outclick_switch() {
      this.texture = game.switch_button;
    }
    var switch_button_sp = new PIXI.Sprite.from(this.switch_button);
    switch_button_sp.x = 0 + 100;
    switch_button_sp.y = 0;
    switch_button_sp.width = 50;
    switch_button_sp.height = 50;
    switch_button_sp.interactive = true;
    switch_button_sp.buttonMode = true;
    switch_button_sp
      .on("pointerdown", onclick_switch)
      .on("pointerup", outclick_switch);

    app.stage.addChild(switch_button_sp);

    this.setupBoard();
    db.ref("game_1").on("value", (snapshot) => {
      let board = [];
      let shooting_board = [];
      snapshot.forEach((snap) => {
        if (this.state.uid === snap.val().uid) {
          board = snap.val().your_board;
          shooting_board = snap.val().enemy_shooting_board;
        }
      });
      if (board.length != 0) {
        this.setState({
          board: board,
        });
      }
      if (shooting_board.length != 0) {
        this.setState({
          shooting_board: shooting_board,
        });
      }
    });
  }
  componentWillUnmount() {
    this.state.app_pixi.stop();
  }
  componentDidUpdate() {
    this.loadYourBoard();
  }
  render() {
    let component = this.state;
    return (
      <div>
        <div>
          <p>{this.a}</p>
        </div>
        <div
          ref={(thisDiv) => {
            component.gameCanvas = thisDiv;
          }}
          style={{ height: "600px" }}
        ></div>
      </div>
    );
  }
}

export default BoardGame;
