import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { fetchGitUser } from "../../Application/Actions/GitUserAction";
import DashBoardWidgetArea from "./DashboardWidgetArea";
import "../../assets/scss/base.scss";
import { bindActionCreators } from "redux";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.fetchGitUser();
  }

  componentDidMount() {
    document.addEventListener("DOMContentLoaded", () => {
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classNameList.toggle("is-active");
            $target.classNameList.toggle("is-active");
          });
        });
      }
    });
  }

  render() {
    const { propsUser } = this.props;
    return (
      <div className="dashboard-container">
        <div className="columns is-variable bd-klmn-columns is-3">
          <div className="column is-3">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={propsUser.avatar_url} alt="supreet singh" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{propsUser.name}</p>
                    <p className="subtitle is-6">{propsUser.login}</p>
                    <a className="button is-light is-fullwidth">Follow</a>
                  </div>
                </div>

                <div className="content">
                  <div className="subtitle is-fullwidth is-6">
                    {propsUser.bio}
                  </div>
                  <div className="subtitle is-fullwidth is-6">
                    <i className="fas fa-user-friends" />
                    {propsUser.company}
                  </div>
                  <div className="subtitle is-fullwidth is-6">
                    {" "}
                    <i className="fas fa-map-marker-alt" />
                    {propsUser.location}
                  </div>
                  <div className="subtitle is-fullwidth is-6">
                    <i className="far fa-envelope" />
                    {propsUser.email}
                  </div>
                  <div className="subtitle is-fullwidth  is-6" />

                  <br />
                  <div className="subtitle is-fullwidth is-6">
                    {" "}
                    <a href="">Block or report user</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-9">
            <nav className="bd-tabs">
              <div className="tabs">
                <ul>
                  <li className="is-active">
                    <a href="/">Overview</a>
                  </li>

                  <li>
                    <a href="/">
                      Repositories{" "}
                      <span className="tagRound">{propsUser.public_repos}</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      Projects{" "}
                      <span className="tagRound">{propsUser.public_gists}</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      Stars <span className="tagRound">7</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      Followers{" "}
                      <span className="tagRound">{propsUser.followers}</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      Following{" "}
                      <span className="tagRound">{propsUser.following}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <DashBoardWidgetArea />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    propsUser: state.GitUserReducer.gitUser
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchGitUser: fetchGitUser }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
