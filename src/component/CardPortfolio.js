import React from "react";
import "../Porfolio.css";

class CardPortfolio extends React.Component {
  constructor(props) {
    super(props);
    this.card = React.createRef();
    this.state = {
      width: 0,
      height: 0,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  }
  handleMouseMove = (e) => {
    this.setState({
      mouseX: e.pageX - this.card.current.offsetLeft - this.state.width / 2,
      mouseY: e.pageY - this.card.current.offsetTop - this.state.height / 2,
    });
  };
  handleMouseEnter = () => {
    clearTimeout(this.mouseLeaveDelay);
  };
  handleMouseLeave = () => {
    this.setState({mouseLeaveDelay: setTimeout(()=>{
        this.setState({
          mouseX : 0,
          mouseY : 0
        });
      }, 1000)
    })
  };
  render() {
    const mousePX=this.state.mouseX / this.state.width;
    const mousePY= this.state.mouseY / this.state.height;
    const rX = mousePX * 30;
    const rY = mousePY * -30;
    const tX = mousePX * -40;
    const tY = mousePY * -40;
    return (
      <div
        class="card-wrap"
        onMouseMove={this.handleMouseMove}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        ref={this.card}
      >
        <div
          class="card"
          style={{
            transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
          }}
        >
          <div
            class="card-bg"
            style={{
              backgroundImage: "url(" + this.props.image + ")",
              transform:  `translateX(${tX}px) translateY(${tY}px)`
            }}
          ></div>
          <div class="card-info">
            <h1>{this.props.header}</h1>
            <p >
            {this.props.content}
            </p>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      width: this.card.current.offsetWidth,
      height: this.card.current.offsetHeight
    })
  
  }
}
export default CardPortfolio;
