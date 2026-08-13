export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style System',
      'Colorful Style Sheets',
    ],
    correctAnswer: 1,
    explanation:
      'CSS stands for Cascading Style Sheets. It is used to control the presentation, layout, colors, spacing, and overall appearance of HTML elements.',
  },

  {
    id: 2,
    question: 'Which HTML tag is used to link an external CSS file?',
    options: [
      '<style>',
      '<css>',
      '<link>',
      '<script>',
    ],
    correctAnswer: 2,
    explanation:
      'The <link> element is used inside the <head> section to connect an external CSS stylesheet to an HTML document.',
  },

  {
    id: 3,
    question: 'Which CSS property is used to change the text color?',
    options: [
      'font-color',
      'text-color',
      'color',
      'foreground',
    ],
    correctAnswer: 2,
    explanation:
      'The color property controls the color of text. For example: color: blue;',
  },

  {
    id: 4,
    question: 'Which CSS property is used to change the background color?',
    options: [
      'bg-color',
      'background-color',
      'color-background',
      'background',
    ],
    correctAnswer: 1,
    explanation:
      'background-color sets the background color of an element. The background property can also be used for more advanced background styling.',
  },

  {
    id: 5,
    question: 'Which CSS property controls the size of text?',
    options: [
      'text-size',
      'font-size',
      'font-style',
      'size',
    ],
    correctAnswer: 1,
    explanation:
      'The font-size property controls how large or small the text appears.',
  },

  {
    id: 6,
    question: 'Which CSS property is used to make text bold?',
    options: [
      'font-weight',
      'text-bold',
      'font-bold',
      'text-weight',
    ],
    correctAnswer: 0,
    explanation:
      'font-weight controls the thickness of text. A common value for bold text is font-weight: 700;',
  },

  {
    id: 7,
    question: 'Which CSS property adds space inside an element?',
    options: [
      'margin',
      'padding',
      'spacing',
      'gap',
    ],
    correctAnswer: 1,
    explanation:
      'Padding creates space between an element’s content and its border.',
  },

  {
    id: 8,
    question: 'Which CSS property adds space outside an element?',
    options: [
      'padding',
      'margin',
      'border-spacing',
      'outside-space',
    ],
    correctAnswer: 1,
    explanation:
      'Margin creates space outside an element, separating it from other elements.',
  },

  {
    id: 9,
    question: 'Which value of position makes an element stay in the same place while scrolling?',
    options: [
      'absolute',
      'relative',
      'fixed',
      'static',
    ],
    correctAnswer: 2,
    explanation:
      'position: fixed removes the element from the normal document flow and positions it relative to the viewport.',
  },

  {
    id: 10,
    question: 'Which CSS layout system is best suited for one-dimensional layouts?',
    options: [
      'Grid',
      'Flexbox',
      'Float',
      'Table',
    ],
    correctAnswer: 1,
    explanation:
      'Flexbox is designed primarily for one-dimensional layouts, either a row or a column.',
  },

  {
    id: 11,
    question: 'Which CSS layout system is designed for two-dimensional layouts?',
    options: [
      'Flexbox',
      'Grid',
      'Float',
      'Position',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Grid is designed for two-dimensional layouts involving rows and columns.',
  },

  {
    id: 12,
    question: 'Which property is used to create rounded corners?',
    options: [
      'corner-radius',
      'border-radius',
      'radius',
      'border-corner',
    ],
    correctAnswer: 1,
    explanation:
      'border-radius is used to create rounded corners on elements.',
  },

  {
    id: 13,
    question: 'Which CSS property controls the stacking order of positioned elements?',
    options: [
      'stack-order',
      'layer',
      'z-index',
      'position-index',
    ],
    correctAnswer: 2,
    explanation:
      'z-index controls the stacking order of positioned elements. Higher z-index values generally appear above lower values.',
  },

  {
    id: 14,
    question: 'Which pseudo-class is used when the mouse pointer is over an element?',
    options: [
      ':active',
      ':focus',
      ':hover',
      ':visited',
    ],
    correctAnswer: 2,
    explanation:
      ':hover applies styles when the user places the mouse pointer over an element.',
  },

  {
    id: 15,
    question: 'Which CSS property controls the transparency of an element?',
    options: [
      'transparent',
      'opacity',
      'visibility',
      'alpha',
    ],
    correctAnswer: 1,
    explanation:
      'The opacity property controls the transparency level of an element. A value of 0 is completely transparent and 1 is fully opaque.',
  },

  {
    id: 16,
    question: 'Which unit is relative to the root element font size?',
    options: [
      'em',
      'rem',
      '%',
      'px',
    ],
    correctAnswer: 1,
    explanation:
      'The rem unit is relative to the font-size of the root HTML element, while em is generally relative to the current element or parent font size.',
  },

  {
    id: 17,
    question: 'Which CSS property is used to control the space between Flexbox or Grid items?',
    options: [
      'spacing',
      'margin',
      'gap',
      'space',
    ],
    correctAnswer: 2,
    explanation:
      'The gap property controls the spacing between rows and columns in Grid and between flex items in Flexbox.',
  },

  {
    id: 18,
    question: 'What does display: none do?',
    options: [
      'Makes the element transparent',
      'Hides the element and removes it from the layout',
      'Moves the element behind other elements',
      'Makes the element smaller',
    ],
    correctAnswer: 1,
    explanation:
      'display: none completely removes the element from the document layout. It does not take up space.',
  },

  {
    id: 19,
    question: 'Which CSS property is commonly used to create a shadow around an element?',
    options: [
      'element-shadow',
      'box-shadow',
      'shadow',
      'border-shadow',
    ],
    correctAnswer: 1,
    explanation:
      'box-shadow creates shadows around an element’s box.',
  },

  {
    id: 20,
    question: 'Which CSS rule correctly changes all paragraph text to blue?',
    options: [
      'p { color: blue; }',
      'p:color = blue;',
      'paragraph { text-color: blue; }',
      '<p color="blue">',
    ],
    correctAnswer: 0,
    explanation:
      'The selector p targets all paragraph elements, and the color property changes their text color.',
  },
];