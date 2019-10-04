import React from "react";

class DashBoardWidgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="column is-half">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <strong className="has-text-link">{this.props.codeName}</strong>
            <p className="desc">{this.props.description}</p>
            <p className="">
              <span className="languageColor" />
              {this.props.language}
            </p>
          </article>
        </div>
      </div>
    );
  }
}

export default DashBoardWidgets;
