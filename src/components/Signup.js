import { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";

import { handleAddUser } from "../actions/users";
import * as DataAPI from "../utils/_DATA";
import { givenUsers } from "../utils/Constants";

function selectUser(e, id) {
  console.log(e.target.id, id);
  let dropdownBtn = document.getElementById("signup-dropdown-basic-button");
  let placeholder = document.getElementsByClassName("signup-Q2")[0];
  placeholder.style["border-color"] = "black";
  placeholder.value = id;

  let imageTextfield = document.getElementsByClassName("signup-Q2");
  imageTextfield.textContent = e.target.id;
  dropdownBtn.style.color = "black";
  dropdownBtn.setAttribute("data-user", id);
}

class Signup extends Component {
  state = {
    givenUsers: {
      "woman.png": givenUsers["woman.png"],
      "burglar.png": givenUsers["burglar.png"],
      "girl.png": givenUsers["girl.png"],
      "student.png": givenUsers["student.png"],
      "bussiness-man.png": givenUsers["bussiness-man.png"],
    },
  };

  handleQuestion = (e) => {
    e.preventDefault();
    // console.log('e: ' ,e, '\ne.target: ',e.target, '\ne.t.v : ', e.target.value, '\ne.elements: ', e.target.elements[0], '\ncheck: ');
    let optionOneText = document.getElementsByClassName("signup-Q1")[0];
    let optionTwoText = document.getElementsByClassName("signup-Q2")[0];
    let { dispatch } = this.props;
    let optionOneCheck =
      optionOneText.value.trim().length < 1 ||
      optionOneText.value.trim() === "" ||
      !optionOneText.value.trim();
    let optionTwoCheck =
      optionTwoText.value.trim().length < 1 ||
      optionTwoText.value.trim() === "" ||
      !optionTwoText.value.trim();
    let id = optionOneText.value.trim() + DataAPI.generateUID().toString();
    if (optionOneCheck) {
      console.log("OPTION ONE INPUT is an Empty Field");
      optionOneText.style.border = "solid 2px #cc0000";
    } 
    else optionOneText.style.border = "solid 2px #b9b9b9";

    if (optionTwoCheck) {
      console.log("OPTION TWO INPUT is an Empty Field");
      optionTwoText.style.border = "solid 2px #cc0000";
    } 
    else optionTwoText.style.border = "solid 2px #b9b9b9";

    if(!optionOneCheck && !optionTwoCheck){
        if (!DataAPI.isValidHttpUrl(optionTwoText.value.trim()) && givenUsers[optionTwoText.value.trim()] === undefined ){
            optionTwoText.style.border = "solid 2px #cc0000";
            optionTwoText.placeholder = "Invalid Url - Try again               ";
            optionTwoText.value= "";
        }
        else if (!optionOneCheck && !optionTwoCheck) {
        console.log("option one and option two are validated");
        dispatch(
            handleAddUser(
            id,
            optionOneText.value.trim(),
            optionTwoText.value.trim()
            )
        );
        optionOneText.value = "";
        optionTwoText.value = "";
        optionTwoText.style.border = "solid 2px #b9b9b9";
        optionOneText.placeholder = "Enter a Username";
        optionTwoText.placeholder = "Paste Image Link or Click      to Choose";
        const { history } = this.props;
        history.push("/");
        }
    }
  };

  render() {

    let { givenUsers } = this.state;

    return (
      <div className="signup-container">
        <h1 className="signup-header">Create Your Own User !</h1>

        <p className="signup-hint">Complete the form below:</p>

        <h2 className="signup-label1">What would you like to be called?</h2>
        <form
          onSubmit={(event) => this.handleQuestion(event)}
          className="signup-form"
        >
          <input className="signup-Q1" placeholder="Enter a Username" />
          <h4 className="signup-hr">AND</h4>
          <h2 className="signup-label2">
            What image would you like as your avatar?
          </h2>
          <input
            className="signup-Q2"
            placeholder="Paste Image Link or Click      to Choose"
          />
          <DropdownButton id="signup-dropdown-basic-button" title="">
            {Object.keys(givenUsers).map((x, i) => (
              <Dropdown.Item
                className="signup-dropdown-item"
                key={`signup-dropdown-item-${i}`}
                onClick={(event) =>
                  selectUser(event, Object.keys(givenUsers)[i].toString())
                }
                id={Object.keys(givenUsers)[i].toString()}
              >
                <img
                  src={givenUsers[Object.keys(givenUsers)[i]]}
                  alt={Object.keys(givenUsers)[i].toString()}
                  key={`signup-dropdown-img-${i}`}
                />
                {Object.keys(givenUsers)[i].toString()}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <input className="signup-submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default withRouter(connect(mapStateToProps)(Signup));
