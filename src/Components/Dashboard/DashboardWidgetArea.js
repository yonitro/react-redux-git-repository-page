import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchGitApi } from "../../Application/Actions/GitActions";
import "../../assets/scss/base.scss";

import { bindActionCreators } from "redux";
const DashBoardWidgets = lazy(() => import("./DashBoardWidgets"));

class DashBoardWidgetArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.fetchGitApi();
  }

  render() {
    const { propsData } = this.props;

    const renderdList = propsData.length ? (
      propsData.map(git => {
        return (
          <Suspense
            key={git.id}
            fallback={
              <div>
                <i className="anim fas fa-circle-notch fa-spin" />
              </div>
            }
          >
            <DashBoardWidgets
              codeName={git.name}
              description={git.description}
              language={git.language}
              key={git.id}
            />
          </Suspense>
        );
      })
    ) : (
      <div>
        <i className="anim fas fa-circle-notch fa-spin" />
      </div>
    );
    return (
      <>
        <br /> <br />
        <div className="subtitle is-fullwidth is-6">Popular repositories </div>
        <div className="columns is-multiline">{renderdList}</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    propsData: state.GitReducer.gitData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGitApi: fetchGitApi }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoardWidgetArea);
