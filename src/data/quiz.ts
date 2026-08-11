export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // 0-indexed option index
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Systems",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 0,
    explanation: "CSS stands for Cascading Style Sheets. It is used to format the layout of web pages."
  },
  {
    id: 2,
    question: "Which HTML attribute is used to define inline CSS styles?",
    options: [
      "class",
      "styles",
      "style",
      "font"
    ],
    correctAnswer: 2,
    explanation: "The inline 'style' attribute is used to specify a unique style for a single HTML element."
  },
  {
    id: 3,
    question: "Which CSS property controls the text size?",
    options: [
      "font-style",
      "text-size",
      "font-size",
      "text-style"
    ],
    correctAnswer: 2,
    explanation: "The 'font-size' property sets the size of the font."
  },
  {
    id: 4,
    question: "How do you select an element with id 'header' in CSS?",
    options: [
      ".header",
      "#header",
      "*header",
      "header"
    ],
    correctAnswer: 1,
    explanation: "The '#' symbol is used to select elements by their unique ID attribute."
  },
  {
    id: 5,
    question: "Which box model property adds space inside an element's border?",
    options: [
      "margin",
      "padding",
      "outline",
      "spacing"
    ],
    correctAnswer: 1,
    explanation: "Padding generates space around content inside of defined borders, while margin is outside."
  },
  {
    id: 6,
    question: "Which value of 'position' places an element relative to the browser viewport?",
    options: [
      "relative",
      "absolute",
      "fixed",
      "static"
    ],
    correctAnswer: 2,
    explanation: "position: fixed keeps an element fixed relative to the viewport window."
  },
  {
    id: 7,
    question: "What property is used to set the stack order of positioned elements?",
    options: [
      "z-index",
      "stack-level",
      "layer",
      "order"
    ],
    correctAnswer: 0,
    explanation: "z-index specifies the stack order of positioned elements along the Z-axis."
  },
  {
    id: 8,
    question: "Which property makes layout elements flexible horizontally or vertically in flexbox?",
    options: [
      "display: block;",
      "display: flex;",
      "display: inline-block;",
      "display: grid;"
    ],
    correctAnswer: 1,
    explanation: "display: flex initializes the CSS Flexbox layout module."
  },
  {
    id: 9,
    question: "Which shorthand rule overrides all other CSS rules for a property?",
    options: [
      "!override",
      "!important",
      "!priority",
      "!force"
    ],
    correctAnswer: 1,
    explanation: "The !important rule overrides all previous styling rules for that property."
  },
  {
    id: 10,
    question: "Which CSS math function clamp font sizes dynamically across viewports?",
    options: [
      "calc()",
      "min()",
      "clamp()",
      "max()"
    ],
    correctAnswer: 2,
    explanation: "clamp(min, val, max) clamps a value between defined minimum and maximum bounds."
  }
];
