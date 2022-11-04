const quizData = {
    title: "Nodejs Quiz"
  };
  const questions = [
    {
      text: "Which of the following statement is true?",
      type: "mc",
      answers: [
        { text: "Node.js is a server-side language.", correct: true },
        { text: "Node.js is a client-side language.", correct: false },
        { text: "Node.js is both a server and client-side language.", correct: false },
        { text: "None of the above.", correct: false }
      ]
    },
    {
      text: "Node.js is written in which language?",
      type: "mc",
      answers: [
        { text: "C++", correct: false },
        { text: "JavaScript", correct: false },
        { text: "C", correct: false },
        { text: "All the above", correct: true }
      ]
    },
    {
        text: "How modules in Node.js can be connected from one component to another ?",
        type: "mc",
        answers: [
          { text: "Expose", correct: false },
          { text: "Module", correct: false },
          { text: "Exports", correct: true },
          { text: "All the above", correct: false }
        ]
      },
      {
        text: "Which of the below modules is not a built-in module in Node.js ?",
        type: "mc",
        answers: [
          { text: "Zlib", correct: false },
          { text: "HTTPS", correct: false },
          { text: "dgram", correct: false },
          { text: "fsread", correct: true }
        ]
      },
      {
        text: "Which of the below command will show all the modules installed locally ?",
        type: "mc",
        answers: [
          { text: "npm ls -g", correct: false },
          { text: "npm ls", correct: true },
          { text: "node ls -g", correct: false },
          { text: "node ls", correct: false}
        ]
      },
      {
        text: "Which of the below fs module is used to truncate a file ?",
        type: "mc",
        answers: [
          { text: "fs.delete(fd, len, callback)", correct: false },
          { text: "fs.remove(fd, len, callback", correct: false },
          { text: "fs.ftruncate(fd, len, callback)", correct: true },
          { text: "None of the above.", correct: false }
        ]
      },
      {
        text: "Which template engines can be used with Node.js ?",
        type: "mc",
        answers: [
          { text: "Jade", correct: false },
          { text: "Vash", correct: false },
          { text: "Handlebars", correct: true },
          { text: "All the above", correct: false }
        ]
      },
      {
        text: "How do we return a path string from the given path object in Node.js ?",
        type: "mc",
        answers: [
          { text: "path.get()", correct: false },
          { text: "path.set()", correct: false },
          { text: "path.format()", correct: true },
          { text: "path.return()", correct: false }
        ]
      },
      {
        text: "What is the default scope in the Node.js application ?",
        type: "mc",
        answers: [
          { text: "Global", correct: false },
          { text: "Local", correct: true },
          { text: "Global Function", correct: false },
          { text: "Local to object", correct: false }
        ]
      },
      {
        text: "Which of the below method is used to return the current working directory of the process ?",
        type: "mc",
        answers: [
          { text: "cwd()", correct: true },
          { text: "cmd()", correct: false },
          { text: "pwd()", correct: false },
          { text: "None of the above", correct: false }
        ]
      },
    {
      text: "Who invented nodejs",
      type: "txt",
      answers: ["Ryan Dahl"]
    }
  ];
  
  module.exports = { quizData, questions };
  