import vote from "../images/vote.png";
import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestionAnswer } from "../actions/questions";
import { withRouter } from "react-router-dom";
// import equal from "fast-deep-equal";
import {
  viewQuestion,
  viewAnswer,
  QTabChange,
  getCount,
  getTotal,
  findPercentage,
} from "../utils/HelperFunctions";

class Dashboard extends Component {
  handleAnswer = (e, q) => {
    e.preventDefault();
    // console.log('e: ' ,e, '\ne.target: ',e.target, '\ne.t.v : ', e.target.value, '\ne.elements: ', e.target.elements, '\ncheck: ', e.target.elements.group.value|| 0 < e.target.elements.group.value.length , '\ne.value ', e.target.elements.group.value);
    if (
      e.target.elements.group.value ||
      0 < e.target.elements.group.value.length
    ) {
      const { dispatch, questions } = this.props;
      let option = e.target.elements.group.value;
      let question = "";

      for (let i = 0; i <= Object.keys(questions).length - 1; i++) {
        if (q.id === Object.keys(questions)[i]) {
          question = questions[Object.keys(questions)[i]];
          break;
        }
      }
      dispatch(handleAddQuestionAnswer(question.id, option));
    }
  };

  render() {
    let { unanswered, answered, authedUser } = this.props;

    return (
      <div className="question-table">
        <div className="button-container">
          <div onClick={(event) => QTabChange(event)} className="unanswered">
            Unanswered Questions
          </div>

          <div onClick={(event) => QTabChange(event)} className="answered">
            Answered Questions
          </div>
        </div>

        <span id="show-questions-container">
          {unanswered.length &&
            unanswered.map((x, i) => (
              <div
                className="question-card"
                id={`question-card-${unanswered[i].uId}`}
                key={`question-card-${i}`}
              >
                <div className="who" key={`who1-${i}`}>
                  <p key={`who1-p-${i}`}> {unanswered[i].user.name} asks:</p>
                </div>

                <div
                  className="question-card-body"
                  key={`question-card-body1-${i}`}
                >
                  <img
                    className="question-card-img"
                    src={unanswered[i].user.avatarURL}
                    alt="Portfolio"
                    id={`question-card-img-${unanswered[i].uId}`}
                    key={"question-card-img-1-" + i}
                  />

                  <div
                    className="side-line-break"
                    id={`side-line-break-q-${unanswered[i].uId}`}
                    key={"side-line-break-1" + i}
                  />

                  <div
                    className="question"
                    id={`question-${unanswered[i].uId}`}
                    key={`answer-${i}`}
                  >
                    <p
                      className="p-title"
                      id={`p-title-${unanswered[i].uId}`}
                      key={`p-title-${i}`}
                    >
                      {" "}
                      Would You Rather{" "}
                    </p>
                    <p
                      className="p-question"
                      id={`p-question-${unanswered[i].uId}`}
                      key={`p-question-${i}`}
                    >
                      ...{unanswered[i].optionOne.text.substring(0, 20)}...
                    </p>
                    <button
                      id={`viewBtn-${unanswered[i].uId}`}
                      key={`viewBtn-${i}`}
                      onClick={(event) =>
                        viewQuestion(event, unanswered[i].uId)
                      }
                      className="p-question-btn"
                    >
                      View Full
                    </button>

                    <form
                      onSubmit={(event) =>
                        this.handleAnswer(event, unanswered[i])
                      }
                      className="answer-form"
                      id={`form-${unanswered[i].uId}`}
                      key={`form-${i}`}
                    >
                      <fieldset key={`form-fieldset-${i}`}>
                        <label htmlFor="optionOne" key={`form-label1-${i}`}>
                          <input
                            className="radioBtn"
                            id="optionOne"
                            type="radio"
                            name="group"
                            value="optionOne"
                            key={`form-radioBtn1-${i}`}
                          />
                          <span key={`form-span1-${i}`}>
                            {unanswered[i].optionOne.text.trim()}?
                          </span>
                        </label>
                        <label htmlFor="optionTwo" key={`form-label2-${i}`}>
                          <input
                            className="radioBtn"
                            id="optionTwo"
                            type="radio"
                            name="group"
                            value="optionTwo"
                            key={`form-radionBtn2-${i}`}
                          />
                          <span key={`form-span2-${i}`}>
                            {" "}
                            {unanswered[i].optionTwo.text.trim()}?
                          </span>
                        </label>
                        <input
                          className="submit-answer"
                          type="submit"
                          value="Submit"
                          key={`form-submit-${i}`}
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            ))}
        </span>

        <span id="show-answers-container">
          {answered.length &&
            answered.map((x, i) => (
              <div
                className="question-card"
                id={`answer-card-${answered[i].uId}`}
                swer-card
                key={`an-${i}`}
              >
                <div className="who" key={`who2-${i}`}>
                  <p key={`who2-p-${i}`}> {answered[i].user.name} asks:</p>
                </div>

                <div
                  className="question-card-body"
                  key={`question-card-body2-${i}`}
                >
                  <img
                    className="question-card-img"
                    src={answered[i].user.avatarURL}
                    alt="Portfolio"
                    id={`answer-card-img-${answered[i].uId}`}
                    key={"question-card-img-2-" + i}
                  />
                  <div
                    className="side-line-break"
                    id={`side-line-break-${answered[i].uId}`}
                    key={"side-line-break-1" + i}
                  />
                  <div
                    className="question"
                    id={`answer-${answered[i].uId}`}
                    key={`answer-${i}`}
                  >
                    <p
                      className="p-title"
                      id={`p-title-answer-${answered[i].uId}`}
                      key={`p-title-answer-${i}`}
                    >
                      Would You Rather
                    </p>
                    <p
                      className="p-question"
                      id={`p-answer-${answered[i].uId}`}
                      key={`p-answer-${i}`}
                    >
                      ...{answered[i].optionOne.text.substring(0, 20)}...
                    </p>
                    <button
                      id={`viewBtn-answer-${answered[i].uId}`}
                      onClick={(event) =>
                        viewAnswer(event, answered[i].uId, answered[i], i)
                      }
                      className="p-question-btn"
                      key={`viewBtn-answer-${i}`}
                    >
                      View Full
                    </button>
                    <div
                      className="vote-one"
                      id={`vote-one-${answered[i].uId}`}
                      key={`vote-one-${i}`}
                    >
                      {answered[i].optionOne.votes.includes(authedUser) && (
                        <img
                          className="vote-img"
                          id={`vote-img-${
                            answered[i].uId + i.toString() + "1"
                          }`}
                          src={vote}
                          alt="vote"
                          key={`vote-img-${i}-1`}
                        />
                      )}

                      <p className="p-wyr" key={`p-wyr-${i}`}>
                        {`Would you rather ${answered[i].optionOne.text
                          .trim()
                          .toLowerCase()} ?`}
                      </p>
                      <div
                        className="percentage-bar"
                        key={`percentage-bar-${i}`}
                      >
                        <p
                          className={`p-percentage`}
                          id={`p-percentage-one-${answered[i].uId}`}
                          key={`p-percentage-one-${i}`}
                        >
                          {`${findPercentage(answered[i], "option-one")}%`}
                        </p>
                      </div>
                      <p className={`p-min-max`} key={`p-min-max-${i}`}>
                        {`${getCount(
                          answered[i],
                          "option-one"
                        )} out of ${getTotal(answered[i])} votes`}
                      </p>
                    </div>

                    <div
                      className="vote-two"
                      id={`vote-two-${answered[i].uId}`}
                      key={`vote-two-${i}`}
                    >
                      {answered[i].optionTwo.votes.includes(authedUser) && (
                        <img
                          className="vote-img"
                          id={`vote-img-${
                            answered[i].uId + i.toString() + "2"
                          }`}
                          src={vote}
                          alt="vote"
                          key={`vote-img-${i}-2`}
                        />
                      )}
                      <p className="p-wyr" key={`p-wyr-${i}`}>
                        {`Would you rather ${answered[i].optionTwo.text
                          .trim()
                          .toLowerCase()} ?`}
                      </p>
                      <div
                        className="percentage-bar"
                        key={`percentage-bar-${i}`}
                      >
                        <p
                          className={`p-percentage`}
                          id={`p-percentage-two-${answered[i].uId}`}
                          key={`percentage-two-${i}`}
                        >
                          {`${findPercentage(answered[i], "option-two")}%`}
                        </p>
                      </div>
                      <p className={`p-min-max`} key={`p-min-max-${i}`}>
                        {`${getCount(
                          answered[i],
                          "option-two"
                        )} out of ${getTotal(answered[i])} votes`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </span>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  // console.log(
  //   "PROPS:\n",
  //   "Q: ",
  //   questions,
  //   "\nU:",
  //   users,
  //   "\n auth: ",
  //   authedUser
  // );
  let formattedQuestions = [];
  for (let i = 0; i <= Object.keys(questions).length - 1; i++) {
    if (questions[Object.keys(questions)[i]] !== undefined) {
      formattedQuestions.push({ ...questions[Object.keys(questions)[i]] });
    }
  }

  // console.log('www', formattedQuestions );

  let sortedQ = formattedQuestions.sort((a, b) =>
    a.timestamp < b.timestamp ? 1 : -1
  );
  // console.log('\n sorted', sortedQ);
  // sortedQ = sortedQ.map((x,i) => {return formattedQuestions[sortedQ[i]]});
  // console.log('\n sorted again', sortedQ);

  sortedQ.forEach((x, i) => {
    // console.log('\n author: ', sortedQ[i].author)
    Object.keys(users).forEach((value, index) => {
      // console.log('\n users: ', users[value])

      if (sortedQ[i].author === users[value].id) {
        sortedQ[i] = {
          ...sortedQ[i],
          user: users[value],
          uId: sortedQ[i].timestamp.toString() + sortedQ[i].id,
        };
      }
    });
  });
  // console.log('\n sortedQ sorted a third time: ', sortedQ)

  let unanswered = Object.keys(sortedQ).map((x, i) => {
    // console.log('\n sortedQ ', sortedQ[i].user.id, '\nua: ' ,users[authedUser].answers, '\ncheck: ', (sortedQ[i].id in users[authedUser].answers));
    if (
      sortedQ[i].optionOne.votes.includes(authedUser) === false &&
      sortedQ[i].optionTwo.votes.includes(authedUser) === false
    )
      return sortedQ[i];
    return undefined;
  });

  unanswered = unanswered.filter((value, index) => {
    // console.log('filer: ', unanswered[index], unanswered[index] !== undefined)
    return unanswered[index] !== undefined;
  });

  let answered = Object.keys(sortedQ).map((x, i) => {
    // console.log(
    //   "\n one ",
    //   sortedQ[i].optionOne.votes,
    //   "\nauthuser: ",
    //   authedUser,
    //   "\ntwo: ",
    //   sortedQ[i].optionTwo.votes,
    //   "\ncheck: ",
    //   sortedQ[i].optionTwo.votes.includes(authedUser)
    // );
    if (
      sortedQ[i].optionOne.votes.includes(authedUser) ||
      sortedQ[i].optionTwo.votes.includes(authedUser)
    )
      return sortedQ[i];
    return undefined;
  });

  answered = answered.filter((value, index) => {
    return answered[index] !== undefined;
  });

  // console.log("answered ", answered, '\n unanaswered', unanswered);

  return {
    questions,
    users,
    sortedQ: sortedQ,
    unanswered: unanswered,
    answered: answered,
  };
}
export default withRouter(connect(mapStateToProps)(Dashboard));
