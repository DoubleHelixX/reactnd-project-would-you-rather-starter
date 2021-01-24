import { connect } from "react-redux";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Leaderboards extends Component {
  render() {
    let { rankings } = this.props;

    return (
      <div className="leaderboards-container">
        {Object.keys(rankings).map((x, i) => (
          <div className="l-card" key={`l-card-${i}`} attr={rankings[i].id}>
            <img
              className="l-img"
              src={rankings[i].avatarURL}
              alt="leaderboard-user-avatar"
              key={`l-img-${i}`}
            />

            <img
              className="l-img-prize"
              alt="leaderboard-user-prize"
              key={`l-img-prize-${i}`}
            />
            <div className="side-line-break" />

            <span className="l-body">
              <h2 className="l-user"> {rankings[i].name}</h2>
              <span className="l-answered">
                <p className="l-answered-left">Answered Questions:</p>
                <p className="l-answered-right">
                  {Object.keys(rankings[i].answers).length === undefined
                    ? 0
                    : Object.keys(rankings[i].answers).length}
                </p>
              </span>
              <hr />
              <span className="l-created">
                <p className="l-created-left">Created Questions:</p>
                <p className="l-created-right">
                  {" "}
                  {Object.keys(rankings[i].questions).length === undefined
                    ? 0
                    : Object.keys(rankings[i].questions).length}
                </p>
              </span>
            </span>
            <div className="side-line-break" />

            <div className="l-score-card">
              <p className="l-header">Score</p>
              <p className="l-tally">
                <span>
                  {(Object.keys(rankings[i].questions).length === undefined
                    ? 0
                    : Object.keys(rankings[i].questions).length) +
                    (Object.keys(rankings[i].answers).length === undefined
                      ? 0
                      : Object.keys(rankings[i].answers).length)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  // console.log(" this is the leaderboards users", users);
  // Object.keys(users).sort((a, b) => console.log("a and b", users[a], users[b]));

  let rankings = Object.keys(users).sort((a, b) =>
    Object.keys(users[a].answers).length +
      Object.keys(users[a].questions).length <
    Object.keys(users[b].answers).length +
      Object.keys(users[b].questions).length
      ? 1
      : -1
  );

  // console.log(" this is the leaderboards rankings", rankings);

  rankings = Object.keys(rankings).map((value, index) => {
    if (rankings[value] in users) return users[rankings[value]];
    return undefined
  });

  // console.log(" this is the leaderboards rankings sorted", rankings);

  return {
    rankings: rankings,
  };
}

export default withRouter(connect(mapStateToProps)(Leaderboards));
