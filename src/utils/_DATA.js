export let users = {
  batman: {
    id: 'batman',
    name: 'The Dark Knight',
    avatarURL: "https://cdn.pixabay.com/photo/2020/11/28/03/19/batman-5783520_1280.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  Joker: {
    id: 'joker',
    name: 'The Man Who Laughs',
    avatarURL: "https://cdn.pixabay.com/photo/2020/12/09/16/08/joker-5817831_1280.png",
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'Detective John Doe',
    avatarURL: "https://cdn.pixabay.com/photo/2020/11/28/03/21/litle-detective-5783530_1280.jpg" ,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

export let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'batman',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['batman'],
      text: 'Wear a cape to fight crime',
    },
    optionTwo: {
      votes: [],
      text: 'Wear a robotic suit to fight crime'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: ['batman'],
      text: 'Become a superhero',
    },
    optionTwo: {
      votes: ['joker'],
      text: 'Become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'batman',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'trust johndoe as a honest detective',
    },
    optionTwo: {
      votes: ['batman'],
      text: "Suspect everyone with your gut feeling"
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'joker',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'Blow up gotham haHAHAHAHAhahaha',
    },
    optionTwo: {
      votes: ['batman'],
      text: 'Go on a date with Harley so she can shutup -__-'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'joker',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['joker'],
      text: 'Destroy another robin',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'Find a boy wonder side-kick of my own'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: [],
      text: 'Die a hero',
    },
    optionTwo: {
      votes: [],
      text: 'Live long enough to become the villian'
    }
  },
  "lvsruwaxfqmcrn7tb80jx": {
    id: 'lvsruwaxfqmcrn7tb80jx',
    author: 'batman',
    timestamp: 1493579767190,
    optionOne: {
      votes: [],
      text: 'Find love and charish it in my life',
    },
    optionTwo: {
      votes: [],
      text: 'Stay single in order to protect the one I would love'
    }
  },
  "lbuf1r4mbxxa252atho7": {
    id: 'lbuf1r4mbxxa252atho7',
    author: 'joker',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'Bother Batman today',
    },
    optionTwo: {
      votes: [],
      text: 'Recover from my beating first and heal .. then bother Batman HAHahahahahAHA'
    }
  },
  "u4fzp4x35225u3f0ofk7c": {
    id: 'u4fzp4x35225u3f0ofk7c',
    author: 'joker',
    timestamp: 1493579767190,
    optionOne: {
      votes: [],
      text: 'Make Batman kill me today',
    },
    optionTwo: {
      votes: ['joker'],
      text: 'Recruit more henchmen by the docks'
    }
  },
  "8rj9t2gtt5nszief2bj": {
    id: '8rj9t2gtt5nszief2bj',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'Let Batman do whatever he wants',
    },
    optionTwo: {
      votes: ['joker'],
      text: 'Arrest Batman for being a vigilante'
    }
  },
  "69d6rr5mjjnarw5r2k5bq7": {
    id: '69d6rr5mjjnarw5r2k5bq7',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe','joker'],
      text: 'Retire from being a detective at this crazy city',
    },
    optionTwo: {
      votes: ['batman'],
      text: 'Stay determined to bring these monsters to justice no matter what'
    }
  },
  "tbxzn3e7roix8kexz7m74h": {
    id: 'tbxzn3e7roix8kexz7m74h',
    author: 'batman',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'Let robin drive the Batmobile',
    },
    optionTwo: {
      votes: ['joker', 'batman'],
      text: 'Give him a Robincycle of his own'
    }
  },
}

//other ids I could use to make more questions
//  iolgp31zprl4y23ftaqp 
//  vzwvdep4lojsy93yden9
// fm5d4fa0vgq4urjr92k44l 
// lpavmbss1ia7nrflmg70tt 
// cv680xviaj7ubv75p5599g 
// h58c0l8szjbs2wyd7047s 
// chea2qg2x1kiiwwgwkmdpc 
// 9m3jtr6gafs5fmex8e0arr 
// 824958pzmla4r070flu6ds

console.log('ids', generateUID (), '\n', generateUID () ,'\n', generateUID () , '\n',generateUID () , '\n',generateUID () , '\n',generateUID () , '\n',generateUID () , '\n',generateUID ()  );
function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res({questions, users})
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, option }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: option
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [option]: {
            ...questions[qid][option],
            votes: questions[qid][option].votes.concat([authedUser])
          }
        }
      }
      // console.log('\n in api func: ', questions);
      res({users,questions})
    }, 500)
  })
}


