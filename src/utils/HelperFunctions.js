


export function viewQuestion(e, i) {
  let availScreenWidth  = window.screen.availWidth;
  let mobileScreen = availScreenWidth<=910;

  //Reset classname associated elements
  let questionHeaders = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.p-title`);
  let userImgs = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.question-card-img`);
  let questions = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.question`);
  let questionCards = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.question-card`);
  let showQuestions = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.p-question`);
  let hidePreviews = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.answer-form`);
  let showViewBtns = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.p-question-btn`);
  let sideLineBreakQs = document
    .getElementById("show-questions-container")
    .querySelectorAll(`.side-line-break`);

  Object.keys(questionCards).forEach((i) => {
    userImgs[i].style["animation"] = "img-shrink 1.5s ease";
    userImgs[i].style["width"] = "115px";
    userImgs[i].style["height"] = "115px";
    userImgs[i].style["border"] = "groove 2px #b9b9b9";

    questionCards[i].style["border"] = "solid 2px #f3f3f3";
    sideLineBreakQs[i].style["border"] = "1.5px solid #f3f3f3";
    sideLineBreakQs[i].style["background-color"] = "#f3f3f3";

    hidePreviews[i].style["animation"] = hidePreviews[i].style[
      "animation"
    ].includes("fadein")
      ? "fadeout 1s ease"
      : "";

    hidePreviews[i].style["display"] = "none";

    questionHeaders[i].style["animation"] = questionHeaders[i].style[
      "animation"
    ].includes("q-text-growth")
      ? "q-text-shrink 1s"
      : "";

    if (mobileScreen){
      questionHeaders[i].style["width"]="100%";
      questionHeaders[i].style["padding-left"]= '0px';

    }
    else{
      questionHeaders[i].style["font-size"] = "16px";
      questions[i].style["width"] = "calc(532px - 168px)";

      // questionHeaders[i].style["padding-bottom"] = "1%";
      // questionHeaders[i].style["padding-left"] = "0px";
    }


    showQuestions[i].style["animation"] = showQuestions[i].style[
      "animation"
    ].includes("fadeOut")
      ? "fadein 1s"
      : "";

    showViewBtns[i].style["animation"] = showQuestions[i].style[
      "animation"
    ].includes("fadeOut")
      ? "fadein 2s"
      : "";

    showViewBtns[i].style["display"] = "block";
    showQuestions[i].style["display"] = "block";
  });

  //Reset #id associated elements

  let hidePreview = document
    .getElementById("show-questions-container")
    .querySelector(`#p-question-${i}`);
  let showQuestion = document
    .getElementById("show-questions-container")
    .querySelector(`#form-${i}`);
  let hideViewBtn = document
    .getElementById("show-questions-container")
    .querySelector(`#viewBtn-${i}`);
  let question = document
    .getElementById("show-questions-container")
    .querySelector(`#question-${i}`);
  let questionHeader = document
    .getElementById("show-questions-container")
    .querySelector(`#p-title-${i}`);
  let userImg = document
    .getElementById("show-questions-container")
    .querySelector(`#question-card-img-${i}`);
  let questionCard = document
    .getElementById("show-questions-container")
    .querySelector(`#question-card-${i}`);
  let sideLineBreakQ = document
    .getElementById("show-questions-container")
    .querySelector(`#side-line-break-q-${i}`);

  // question.style["width"] = "calc(532px - 188px)";

  questionCard.style["border"] = "inset 2px #1C6EA4";

  userImg.style["animation"] = "img-growth 1.5s ease";
  userImg.style["width"] = "130px";
  userImg.style["height"] = "130px";
  userImg.style["border"] = "inset 3px #1C6EA4";

  sideLineBreakQ.style["border"] = "1.2px inset #000000";
  sideLineBreakQ.style["background-color"] = "#0D3550";

  hidePreview.style["animation"] = "fadeOut 1s";
  hideViewBtn.style["animation"] = "fadeOut 1s";
  hidePreview.style.display = "none";
  hideViewBtn.style.display = "none";

  questionHeader.style["animation"] = "q-textgrowth 1s";
  questionHeader.style["font-size"] = "24px";
  if(mobileScreen==false){
  questionHeader.style["padding-bottom"] = "5px";
  questionHeader.style["padding-left"] = "55px";
  showQuestion.style["margin-left"]="0";
  showQuestion.style["text-align"]="center";


  }
  else{
    questionHeader.style["width"] = "65%";
    userImg.style["margin-left"] = "175px";


  }

  showQuestion.style["animation"] = "fadein 1s";
  showQuestion.style.display = "inline-block";
  }

export function viewAnswer(e, uId, q, i) {
  let availScreenWidth  = window.screen.availWidth;
  let mobileScreen = availScreenWidth<=910;

    //Reset classname associated elements

    let questionHeaders = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.p-title`);
    let userImgs = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.question-card-img`);
    let questions = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.question`);
    let questionCards = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.question-card`);
    let showQuestions = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.p-question`);
    let showViewBtns = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.p-question-btn`);
    let yourVotes = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.vote-one`);
    let othersVotes = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.vote-two`);
    let sideLineBreaks = document
      .getElementById("show-answers-container")
      .querySelectorAll(`.side-line-break`);
   
    Object.keys(questionCards).forEach((i) => {
      userImgs[i].style["animation"] = "img-shrink 1.5s ease";
      userImgs[i].style["width"] = "115px";
      userImgs[i].style["height"] = "115px";
      userImgs[i].style["border"] = "groove 2px #b9b9b9";
      userImgs[i].style["margin-top"] = "20px";

     
      yourVotes[i].style["display"] = "none";
      othersVotes[i].style["display"] = "none";
      if (!mobileScreen){
        sideLineBreaks[i].style["height"] = "115px";

      }
      else
        sideLineBreaks[i].style["height"] = "0.5px";

      sideLineBreaks[i].style["border"] ="1.5px solid #f3f3f3";
      sideLineBreaks[i].style["background-color"] ="#f3f3f3";

      sideLineBreaks[i].style["animation"] = sideLineBreaks[i].style[
        "animation"
      ].includes("side-line-break-growth")
        ? "side-line-break-shrink 1.5s ease"
        : "";
    
      questions[i].style["width"] = "calc(532px - 168px)";

      questionCards[i].style["border"] = "solid 2px #f3f3f3";

      questionHeaders[i].style["animation"] = "q-text-shrink 1s";
      questionHeaders[i].textContent = "Would You Rather";
      questionHeaders[i].style["font-size"] = "16px";
      questionHeaders[i].style["padding-bottom"] = "1%";
      questionHeaders[i].style["padding-left"] = "0px";

      showQuestions[i].style["animation"] = "fadein 1s";
      showViewBtns[i].style["animation"] = "fadein 2s";
      showViewBtns[i].style["display"] = "block";
      showQuestions[i].style["display"] = "block";
    });

    //Reset #id associated elements

    let hidePreview = document
      .getElementById("show-answers-container")
      .querySelector(`#p-answer-${uId}`);
    let hideViewBtn = document
      .getElementById("show-answers-container")
      .querySelector(`#viewBtn-answer-${uId}`);
    let question = document
      .getElementById("show-answers-container")
      .querySelector(`#answer-${uId}`);
    let questionHeader = document
      .getElementById("show-answers-container")
      .querySelector(`#p-title-answer-${uId}`);
    let userImg = document
      .getElementById("show-answers-container")
      .querySelector(`#answer-card-img-${uId}`);
    let questionCard = document
      .getElementById("show-answers-container")
      .querySelector(`#answer-card-${uId}`);
    let yourVote = document
      .getElementById("show-answers-container")
      .querySelector(`#vote-one-${uId}`);
    let othersVote = document
      .getElementById("show-answers-container")
      .querySelector(`#vote-two-${uId}`);
    let sideLineBreak = document
      .getElementById("show-answers-container")
      .querySelector(`#side-line-break-${uId}`);
    let percentageBarOne = document
      .getElementById("show-answers-container")
      .querySelector(`#p-percentage-one-${uId}`);
    let percentageBarTwo = document
      .getElementById("show-answers-container")
      .querySelector(`#p-percentage-two-${uId}`);
    let voteImg1 = document
      .getElementById("show-answers-container")
      .querySelector(`#vote-img-${uId + i.toString() + "1"}`);
    let voteImg2 = document
      .getElementById("show-answers-container")
      .querySelector(`#vote-img-${uId + i.toString() + "2"}`);
    if (mobileScreen==true){
      sideLineBreak.style["height"] = "0.5px";
    }
    else {
      sideLineBreak.style["height"] = "310px";
      sideLineBreak.style["animation"] = "side-line-break-growth 1.5s ease";
      userImg.style["margin-top"] = "110px!important";
    }
    sideLineBreaks[i].style["border"] = "1.2px inset #000000";
    sideLineBreaks[i].style["background-color"] = "#0D3550";



    question.style["width"] = "calc(532px - 188px)";

    questionCard.style["border"] = "inset 2px #1C6EA4";

    userImg.style["animation"] = "img-growth 1.5s ease";
    userImg.style["width"] = "130px";
    userImg.style["height"] = "130px";
    
    userImg.style["border"] = "inset 3px #1C6EA4";

    hidePreview.style["animation"] = "fadeOut 1s";
    hideViewBtn.style["animation"] = "fadeOut 1s";
    hidePreview.style.display = "none";
    hideViewBtn.style.display = "none";

    questionHeader.style["animation"] = "a-textgrowth 1s";
    questionHeader.textContent = "Results: ";
    questionHeader.style["font-size"] = "24px";
    questionHeader.style["padding-bottom"] = "5px";
    questionHeader.style["padding-left"] = "110px";

    if (voteImg1 !== null) voteImg1.style["animation"] = "vote-img-growth 2s";
    else if (voteImg2 !== null)
      voteImg2.style["animation"] = "vote-img-growth 2s";

    percentageBarOne.style["width"] = `${
      findPercentage(q, "option-one") === "0"
        ? "10"
        : findPercentage(q, "option-one")
    }%`;
    percentageBarTwo.style["width"] = `${
      findPercentage(q, "option-two") === "0"
        ? "10"
        : findPercentage(q, "option-two")
    }%`;

    yourVote.style["animation"] = "display 1s";
    othersVote.style["animation"] = "display 1s";
    yourVote.style["display"] = "block";
    othersVote.style["display"] = "block";
  }

export function QTabChange(e) {
    e.preventDefault();

    let unanswered = document.getElementsByClassName("unanswered");
    let answered = document.getElementsByClassName("answered");
    let showQuestions = document.getElementById("show-questions-container");
    let showAnswers = document.getElementById("show-answers-container");

    if (e.target.className === "unanswered") {
      unanswered[0].style.color = "black";
      unanswered[0].style["box-shadow"] =
        "0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)";
      answered[0].style.color = "#b9b9b9";
      answered[0].style["box-shadow"] =
        "0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)";
      showQuestions.style["animation"] = "fadein 3s";
      showQuestions.style["display"] = "block";
      showAnswers.style["animation"] = "fadeout 3s";
      showAnswers.style["display"] = "none";
    } else if (e.target.className === "answered") {
      answered[0].style.color = "black";
      answered[0].style["box-shadow"] =
        "0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #020405, 2px 2px 4px 2px rgba(255, 5, 5, 0)";
      unanswered[0].style.color = "#b9b9b9";
      unanswered[0].style["box-shadow"] =
        "0px 12px 0px -10px rgb(255, 255, 255), 0px 0px 0px 0px #FFFFFF, 0px 5px 10px -10px #ffffff, 0px 5px 10px -10px #FFFFFF,  0px 2px  #f3f3f3, 2px 2px 4px 2px rgba(255, 5, 5, 0)";
      showAnswers.style["animation"] = "fadein 3s";
      showAnswers.style["display"] = "block";
      showQuestions.style["animation"] = "fadeOut 3s";
      showQuestions.style["display"] = "none";
    }
  }

export function getCount(question, who) {
    let optOneLen =
      question.optionOne.votes.length > 0
        ? question.optionOne.votes.length
        : 0;
    let optTwoLen =
      question.optionTwo.votes.length > 0
        ? question.optionTwo.votes.length
        : 0;
    let max = Math.max(optOneLen, optTwoLen);
    let min = Math.min(optOneLen, optTwoLen);
    let winner =
      optOneLen > optTwoLen
        ? "option-one"
        : optOneLen < optTwoLen
        ? "option-two"
        : "both";

    return who === "option-one"
      ? winner === "option-one"
        ? max
        : min
      : who === "option-two"
      ? winner === "option-two"
        ? max
        : min
      : 0;
  }

export function getTotal(question) {
    let optOneLen =
      question.optionOne.votes.length > 0
        ? question.optionOne.votes.length
        : 0;
    let optTwoLen =
      question.optionTwo.votes.length > 0
        ? question.optionTwo.votes.length
        : 0;
    let max = Math.max(optOneLen, optTwoLen);
    let min = Math.min(optOneLen, optTwoLen);
    return max + min;
  }

export function findPercentage(question, who) {
    let optOneLen =
      question.optionOne.votes.length > 0
        ? question.optionOne.votes.length
        : 0;
    let optTwoLen =
      question.optionTwo.votes.length > 0
        ? question.optionTwo.votes.length
        : 0;

    let max = Math.max(optOneLen, optTwoLen);
    let min = Math.min(optOneLen, optTwoLen);
    let winner =
      optOneLen > optTwoLen
        ? "option-one"
        : optOneLen < optTwoLen
        ? "option-two"
        : "both";
        let result =
        who === "option-one"
          ? winner === "option-one"
            ? min === 0
              ? "100"
              : ((max / (max + min)) * 100).toFixed(1)
            : winner === "option-two"
            ? min === 0
              ? "0"
              : ((min / (max + min)) * 100).toFixed(1)
            : ((max / (max + min)) * 100).toFixed(1)
          : who === "option-two"
          ? winner === "option-two"
            ? min === 0
              ? "100"
              : ((max / (max + min)) * 100).toFixed(1)
            : winner === "option-one"
            ? min === 0
              ? "0"
              : ((min / (max + min)) * 100).toFixed(1)
            : ((max / (max + min)) * 100).toFixed(1)
          : 0;

      return result;
    }
