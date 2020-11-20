import React from "react";

class TileView extends React.Component {
 

  render() {
    return (
      <div
        className="tile nav-tile tile-01"
        style={{ background: this.props.color }}
      >
        <a className="tile-nav scroll-link" href={this.props.href} data-soffset={0}>
          <div className="nav-hover porto-bg-four">
            <h5>
                {this.props.description}
            </h5>
          </div>
          <span>{this.props.title}</span>
          <img alt="" title src={this.props.icon} />
        </a>
      </div>
    );
  }
}
export default TileView;
