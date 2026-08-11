import { Topic } from '../types';

export const topicsData: Topic[] = [
  {
    id: "topic-01",
    tag: "#01",
    title: "CSS HOME",
    iconClass: "fa-solid fa-house",
    definition: "CSS (Cascading Style Sheets) web pages ko style aur layout provide karne ke liye use hota hai. Yeh HTML ke sath mil kar front-end development ka essential part hai.",
    proTip: "CSS cascades downwards: if two rules have equal specificity, the lower one in the stylesheet wins!",
    practice: {
      question: "Write a CSS rule to set the background color of the body to lightgray.",
      solution: "body { background-color: lightgray; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/default.asp",
    extraInfoLabel: "CSS HOME",
    nextTarget: "topic-02"
  },
  {
    id: "topic-02",
    tag: "#02",
    title: "CSS Introduction",
    iconClass: "fa-solid fa-circle-info",
    definition: "CSS ka use HTML elements ko visually style karne aur layout dene ke liye hota hai. Yeh presentation aur HTML ke structure ko separate karta hai.",
    syntax: '<link rel="stylesheet" href="style.css">',
    exampleCode: "h1 {\n  color: blue;\n  font-size: 24px;\n}",
    proTip: "Separating HTML structure and CSS design makes your site faster, maintainable, and SEO-friendly.",
    practice: {
      question: "Change all <p> elements color to darkgreen.",
      solution: "p { color: darkgreen; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_intro.asp",
    extraInfoLabel: "CSS Introduction",
    prevTarget: "topic-01",
    nextTarget: "topic-03"
  },
  {
    id: "topic-03",
    tag: "#03",
    title: "CSS Syntax",
    iconClass: "fa-solid fa-code",
    definition: "CSS rule set me ek selector aur ek declaration block hota hai. Selector HTML element par point karta hai jise aap style karna chahte hain.",
    exampleCode: "p {\n  color: red;\n  text-align: center;\n}",
    proTip: "Always end your CSS declarations with a semicolon (;) to prevent syntax errors.",
    practice: {
      question: "Target h2 and set font-size to 20px and color to navy.",
      solution: "h2 {\n  font-size: 20px;\n  color: navy;\n}"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_syntax.asp",
    extraInfoLabel: "CSS Syntax",
    prevTarget: "topic-02",
    nextTarget: "topic-04"
  },
  {
    id: "topic-04",
    tag: "#04",
    title: "CSS Selectors",
    iconClass: "fa-solid fa-crosshairs",
    definition: "CSS Selectors ka kaam HTML elements ko find ya select karna hota hai (Element, ID, Class, Universal, Grouping selectors).",
    exampleCode: "/* ID Selector */\n#myHeader { background-color: lightblue; }\n\n/* Class Selector */\n.main-text { font-size: 16px; }\n\n/* Universal Selector */\n* { margin: 0; padding: 0; }",
    proTip: "IDs (#) are unique and must be used once per page, while Classes (.) can be reused on multiple elements.",
    practice: {
      question: "Select element with id 'hero' and make its color purple.",
      solution: "#hero { color: purple; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_selectors.asp",
    extraInfoLabel: "CSS Selectors",
    prevTarget: "topic-03",
    nextTarget: "topic-05"
  },
  {
    id: "topic-05",
    tag: "#05",
    title: "CSS Colors",
    iconClass: "fa-solid fa-palette",
    definition: "CSS colors standard color names, HEX codes, RGB, HSL, RGBA, and HSLA values se specify hote hain.",
    exampleCode: "h1 { color: #ff5733; }\np { color: rgb(34, 139, 34); }\ndiv { background-color: rgba(0, 0, 0, 0.5); }",
    proTip: "Use RGBA or HSLA when you need semi-transparent colors with alpha transparency.",
    practice: {
      question: "Set div background to transparent black with 50% opacity using RGBA.",
      solution: "div { background-color: rgba(0, 0, 0, 0.5); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_colors.asp",
    extraInfoLabel: "CSS Colors",
    prevTarget: "topic-04",
    nextTarget: "topic-06"
  },
  {
    id: "topic-06",
    tag: "#06",
    title: "CSS Backgrounds",
    iconClass: "fa-solid fa-image",
    definition: "CSS Background properties element ke background visual effects set karti hain (background-color, background-image, background-repeat, background-size, background-position).",
    exampleCode: "body {\n  background-image: url('bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}",
    proTip: "Use `background-size: cover;` to make background images fill the container responsively without stretching distortion.",
    practice: {
      question: "Prevent a background image from repeating.",
      solution: "body { background-repeat: no-repeat; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_background.asp",
    extraInfoLabel: "CSS Backgrounds",
    prevTarget: "topic-05",
    nextTarget: "topic-07"
  },
  {
    id: "topic-07",
    tag: "#07",
    title: "CSS Borders",
    iconClass: "fa-regular fa-square",
    definition: "CSS border property se element ke charon taraf border ki style, width, aur color set kiya jata hai.",
    exampleCode: "p {\n  border-style: solid;\n  border-width: 2px;\n  border-color: #3b82f6;\n  /* Shorthand: */\n  border: 2px solid #3b82f6;\n}",
    proTip: "Shorthand syntax `border: width style color;` reduces CSS file size and code duplication.",
    practice: {
      question: "Create a dashed green border of 3px around a box element.",
      solution: ".box { border: 3px dashed green; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_border.asp",
    extraInfoLabel: "CSS Borders",
    prevTarget: "topic-06",
    nextTarget: "topic-08"
  },
  {
    id: "topic-08",
    tag: "#08",
    title: "CSS Margins",
    iconClass: "fa-solid fa-arrows-up-down-left-right",
    definition: "CSS Margin property element ke bahar (outside border) khali space create karti hai. Vertical margins collapse bhi ho sakti hain.",
    exampleCode: "div {\n  margin-top: 10px;\n  margin-bottom: 20px;\n  /* Shorthand: top right bottom left */\n  margin: 10px 15px 20px 15px;\n  /* Centering block: */\n  margin: 0 auto;\n}",
    proTip: "`margin: 0 auto;` horizontally centers a block element that has a defined width.",
    practice: {
      question: "Center a 500px wide container horizontally on the screen.",
      solution: ".container { width: 500px; margin: 0 auto; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_margin.asp",
    extraInfoLabel: "CSS Margins",
    prevTarget: "topic-07",
    nextTarget: "topic-09"
  },
  {
    id: "topic-09",
    tag: "#09",
    title: "CSS Padding",
    iconClass: "fa-solid fa-expand",
    definition: "CSS Padding element ke content aur uske border ke andar space generate karti hai.",
    exampleCode: "button {\n  padding: 10px 20px; /* 10px vertical, 20px horizontal */\n  background-color: #2563eb;\n  color: white;\n}",
    proTip: "Padding adds to the total element size unless `box-sizing: border-box;` is applied.",
    practice: {
      question: "Add 15px padding on top and bottom, and 30px on left and right for a button.",
      solution: "button { padding: 15px 30px; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_padding.asp",
    extraInfoLabel: "CSS Padding",
    prevTarget: "topic-08",
    nextTarget: "topic-10"
  },
  {
    id: "topic-10",
    tag: "#10",
    title: "CSS Height/Width",
    iconClass: "fa-solid fa-ruler-combined",
    definition: "Height aur width properties se content box ka size set hota hai. Percentage (%) relative sizing ke liye use hoti hai.",
    exampleCode: ".card {\n  height: 200px;\n  width: 100%;\n  max-width: 400px;\n}",
    proTip: "Use `max-width` instead of fixed `width` so elements shrink gracefully on mobile screens.",
    practice: {
      question: "Set element height to 300px and max-width to 600px.",
      solution: ".box { height: 300px; max-width: 600px; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_dimension.asp",
    extraInfoLabel: "CSS Height and Width",
    prevTarget: "topic-09",
    nextTarget: "topic-11"
  },
  {
    id: "topic-11",
    tag: "#11",
    title: "CSS Box Model",
    iconClass: "fa-solid fa-cube",
    definition: "HTML elements ko boxes ki tarah samjha jata hai. Box Model me Content, Padding, Border, aur Margin shamil hote hain.",
    exampleCode: "* {\n  box-sizing: border-box;\n}",
    proTip: "Always set `box-sizing: border-box;` globally in CSS so padding and border are included in the element total width/height.",
    practice: {
      question: "Apply border-box box-sizing to all elements on the page.",
      solution: "* { box-sizing: border-box; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_boxmodel.asp",
    extraInfoLabel: "CSS Box Model",
    prevTarget: "topic-10",
    nextTarget: "topic-12"
  },
  {
    id: "topic-12",
    tag: "#12",
    title: "CSS Outline",
    iconClass: "fa-regular fa-square-check",
    definition: "Outline element ke border ke bahar draw hoti hai. Border ke beraks outline element ki dimensions or layout me jagah nahi leti.",
    exampleCode: "input:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: 4px;\n}",
    proTip: "Never remove `outline: none;` without providing a visible focus indicator for accessibility users.",
    practice: {
      question: "Add a 2px blue dashed outline with 4px outline offset on input focus.",
      solution: "input:focus { outline: 2px dashed blue; outline-offset: 4px; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_outline.asp",
    extraInfoLabel: "CSS Outline",
    prevTarget: "topic-11",
    nextTarget: "topic-13"
  },
  {
    id: "topic-13",
    tag: "#13",
    title: "CSS Text",
    iconClass: "fa-solid fa-font",
    definition: "CSS text formatting properties se color, text-align, text-transform, text-decoration, letter-spacing, and line-height control hoti hain.",
    exampleCode: "h1 {\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  line-height: 1.5;\n}",
    proTip: "Setting line-height to 1.5 - 1.6 improves long paragraph readability significantly.",
    practice: {
      question: "Make text uppercase with 1.6 line height and center alignment.",
      solution: "p { text-transform: uppercase; line-height: 1.6; text-align: center; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_text.asp",
    extraInfoLabel: "CSS Text",
    prevTarget: "topic-12",
    nextTarget: "topic-14"
  },
  {
    id: "topic-14",
    tag: "#14",
    title: "CSS Fonts",
    iconClass: "fa-solid fa-italic",
    definition: "Font properties font-family, font-size, font-weight, aur font-style define karti hain.",
    exampleCode: "body {\n  font-family: 'Inter', system-ui, sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n}",
    proTip: "Always declare fallback font families like `sans-serif` or `serif` at the end of font-family.",
    practice: {
      question: "Set font-family to Arial with sans-serif fallback and font-weight 700.",
      solution: "body { font-family: Arial, sans-serif; font-weight: 700; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_font.asp",
    extraInfoLabel: "CSS Fonts",
    prevTarget: "topic-13",
    nextTarget: "topic-15"
  },
  {
    id: "topic-15",
    tag: "#15",
    title: "CSS Icons",
    iconClass: "fa-solid fa-icons",
    definition: "Font Awesome, Google Material Icons, ya SVG icons libraries se custom vectors render hote hain.",
    exampleCode: '<i class="fa-solid fa-heart" style="color: red;"></i>',
    proTip: "Icons styled as font icons can be resized with `font-size` and colored with `color` property.",
    practice: {
      question: "How do you resize a FontAwesome icon using CSS?",
      solution: ".my-icon { font-size: 2rem; color: #3b82f6; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_icons.asp",
    extraInfoLabel: "CSS Icons",
    prevTarget: "topic-14",
    nextTarget: "topic-16"
  },
  {
    id: "topic-16",
    tag: "#16",
    title: "CSS Links",
    iconClass: "fa-solid fa-link",
    definition: "Links ko standard pseudo-classes (`:link`, `:visited`, `:hover`, `:active`) se style kiya jata hai.",
    exampleCode: "a {\n  color: #2563eb;\n  text-decoration: none;\n}\na:hover {\n  text-decoration: underline;\n  color: #1d4ed8;\n}",
    proTip: "Follow the LVHA order strictly: :link -> :visited -> :hover -> :active for rules to apply correctly.",
    practice: {
      question: "Remove underline from links by default and add underline on hover.",
      solution: "a { text-decoration: none; }\na:hover { text-decoration: underline; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_link.asp",
    extraInfoLabel: "CSS Links",
    prevTarget: "topic-15",
    nextTarget: "topic-17"
  },
  {
    id: "topic-17",
    tag: "#17",
    title: "CSS Lists",
    iconClass: "fa-solid fa-list",
    definition: "List properties (`list-style-type`, `list-style-position`, `list-style-image`) se unordered/ordered lists ke markers modify hote hain.",
    exampleCode: "ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}",
    proTip: "Set `list-style-type: none;` and `padding: 0;` on `<ul>` to turn lists into clean navigation menus.",
    practice: {
      question: "Remove bullets and padding from an un-ordered list.",
      solution: "ul { list-style: none; padding: 0; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_list.asp",
    extraInfoLabel: "CSS Lists",
    prevTarget: "topic-16",
    nextTarget: "topic-18"
  },
  {
    id: "topic-18",
    tag: "#18",
    title: "CSS Tables",
    iconClass: "fa-solid fa-table",
    definition: "Tables ko borders, border-collapse, padding, alternate row background colors (zebra striping) se visually improve kiya jata hai.",
    exampleCode: "table {\n  width: 100%;\n  border-collapse: collapse;\n}\nth, td {\n  padding: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\ntr:nth-child(even) {\n  background-color: #f9fafb;\n}",
    proTip: "Always use `border-collapse: collapse;` on tables to remove default double borders.",
    practice: {
      question: "Add zebra striping on even table rows.",
      solution: "tr:nth-child(even) { background-color: #f3f4f6; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_table.asp",
    extraInfoLabel: "CSS Tables",
    prevTarget: "topic-17",
    nextTarget: "topic-19"
  },
  {
    id: "topic-19",
    tag: "#19",
    title: "CSS Display",
    iconClass: "fa-solid fa-eye",
    definition: "Display property layout behavior define karti hai: `none`, `block`, `inline`, `inline-block`, `flex`, `grid`.",
    exampleCode: ".hidden { display: none; }\n.flex-container { display: flex; }\n.grid-container { display: grid; }",
    proTip: "`display: none;` hides the element completely from page layout, whereas `visibility: hidden;` hides it while preserving space.",
    practice: {
      question: "Hide an element completely without taking any space in layout.",
      solution: ".element { display: none; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_display_visibility.asp",
    extraInfoLabel: "CSS Display",
    prevTarget: "topic-18",
    nextTarget: "topic-20"
  },
  {
    id: "topic-20",
    tag: "#20",
    title: "CSS Max-width",
    iconClass: "fa-solid fa-arrows-left-right",
    definition: "Setting `max-width` instead of fixed `width` ensures the element shrinks automatically on smaller screens.",
    exampleCode: ".wrapper {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n}",
    proTip: "Combine `width: 100%;` and `max-width: 1200px;` for responsive layout containers.",
    practice: {
      question: "Make a card container responsive up to a max width of 800px.",
      solution: ".card-container { width: 100%; max-width: 800px; margin: 0 auto; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_max-width.asp",
    extraInfoLabel: "CSS Max-width",
    prevTarget: "topic-19",
    nextTarget: "topic-21"
  },
  {
    id: "topic-21",
    tag: "#21",
    title: "CSS Position",
    iconClass: "fa-solid fa-location-crosshairs",
    definition: "Position property specifies layout positioning algorithm: `static` (default), `relative`, `fixed`, `absolute`, `sticky`.",
    exampleCode: ".parent { position: relative; }\n.badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}",
    proTip: "An absolute element positions itself relative to its nearest ancestor that has `position: relative` (or fixed/sticky).",
    practice: {
      question: "Position an element fixed to the top left corner of the screen.",
      solution: ".sticky-header { position: fixed; top: 0; left: 0; width: 100%; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_positioning.asp",
    extraInfoLabel: "CSS Position",
    prevTarget: "topic-20",
    nextTarget: "topic-22"
  },
  {
    id: "topic-22",
    tag: "#22",
    title: "CSS Z-index",
    iconClass: "fa-solid fa-layer-group",
    definition: "Z-index property controls stack ordering of positioned elements on the Z-axis (front to back).",
    exampleCode: ".modal-overlay {\n  position: fixed;\n  z-index: 9999;\n}",
    proTip: "Z-index only works on elements with a position value other than static (e.g. relative, absolute, fixed, sticky).",
    practice: {
      question: "Bring a modal window to the front over other layers.",
      solution: ".modal { position: fixed; z-index: 1000; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_zindex.asp",
    extraInfoLabel: "CSS Z-index",
    prevTarget: "topic-21",
    nextTarget: "topic-23"
  },
  {
    id: "topic-23",
    tag: "#23",
    title: "CSS Overflow",
    iconClass: "fa-solid fa-arrows-to-dot",
    definition: "Overflow property controls what happens when content exceeds container bounds: `visible`, `hidden`, `scroll`, `auto`.",
    exampleCode: ".scroll-box {\n  height: 200px;\n  overflow-y: auto;\n}",
    proTip: "Use `overflow: auto;` to add scrollbars only when content exceeds container height.",
    practice: {
      question: "Hide content that spills outside of a div container.",
      solution: "div { overflow: hidden; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_overflow.asp",
    extraInfoLabel: "CSS Overflow",
    prevTarget: "topic-22",
    nextTarget: "topic-24"
  },
  {
    id: "topic-24",
    tag: "#24",
    title: "CSS Float",
    iconClass: "fa-solid fa-align-left",
    definition: "Float property (`left`, `right`) allows elements to float alongside text wrapping around them.",
    exampleCode: "img.float-left {\n  float: left;\n  margin-right: 15px;\n}\n.clearfix::after {\n  content: '';\n  display: table;\n  clear: both;\n}",
    proTip: "Use clearfix micro-hack on parent container when floating child elements to avoid height collapse.",
    practice: {
      question: "Clear floats after floated elements.",
      solution: ".container::after { content: ''; display: table; clear: both; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_float.asp",
    extraInfoLabel: "CSS Float",
    prevTarget: "topic-23",
    nextTarget: "topic-25"
  },
  {
    id: "topic-25",
    tag: "#25",
    title: "CSS Inline-block",
    iconClass: "fa-solid fa-grip",
    definition: "Inline-block elements flow horizontally on the same line like inline elements, but accept custom width and height properties.",
    exampleCode: ".nav-item {\n  display: inline-block;\n  width: 120px;\n  height: 40px;\n}",
    proTip: "Modern layouts use Flexbox or CSS Grid instead of inline-block for structural layout control.",
    practice: {
      question: "Make span elements behave with custom height and width inline.",
      solution: "span { display: inline-block; width: 100px; height: 30px; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_inline-block.asp",
    extraInfoLabel: "CSS Inline-block",
    prevTarget: "topic-24",
    nextTarget: "topic-26"
  },
  {
    id: "topic-26",
    tag: "#26",
    title: "CSS Align",
    iconClass: "fa-solid fa-align-center",
    definition: "CSS alignment methods include `text-align`, `margin: auto`, Flexbox `justify-content`/`align-items`, and Grid `place-items`.",
    exampleCode: "/* Flexbox Centering */\n.center-flex {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Grid Centering */\n.center-grid {\n  display: grid;\n  place-items: center;\n}",
    proTip: "`display: grid; place-items: center;` is the shortest 2-line modern CSS solution to center anything vertically and horizontally.",
    practice: {
      question: "Center a box both vertically and horizontally using CSS Grid.",
      solution: ".wrapper { display: grid; place-items: center; height: 100vh; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_align.asp",
    extraInfoLabel: "CSS Align",
    prevTarget: "topic-25",
    nextTarget: "topic-27"
  },
  {
    id: "topic-27",
    tag: "#27",
    title: "CSS Combinators",
    iconClass: "fa-solid fa-diagram-project",
    definition: "Combinators define selector relationships: Descendant (`div p`), Child (`div > p`), Adjacent Sibling (`div + p`), General Sibling (`div ~ p`).",
    exampleCode: "/* Direct child selector */\ndiv > p { color: blue; }\n\n/* Immediately adjacent sibling */\nh2 + p { font-weight: bold; }",
    proTip: "Use direct child selector (`>`) to style immediate children without affecting deeply nested child elements.",
    practice: {
      question: "Select only paragraph elements that are immediate children of div.",
      solution: "div > p { color: darkblue; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_combinators.asp",
    extraInfoLabel: "CSS Combinators",
    prevTarget: "topic-26",
    nextTarget: "topic-28"
  },
  {
    id: "topic-28",
    tag: "#28",
    title: "CSS Pseudo-class",
    iconClass: "fa-solid fa-bolt",
    definition: "Pseudo-class element ki special state target karti hai (`:hover`, `:focus`, `:active`, `:first-child`, `:nth-child()`, `:not()`).",
    exampleCode: "button:hover {\n  background-color: #1e40af;\n  transform: translateY(-2px);\n}\nli:nth-child(odd) {\n  background: #f3f4f6;\n}",
    proTip: "Use `:focus-visible` to show focus outlines only when navigating with keyboard.",
    practice: {
      question: "Style odd list items with background color #eee.",
      solution: "li:nth-child(odd) { background-color: #eee; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_pseudo_classes.asp",
    extraInfoLabel: "CSS Pseudo-class",
    prevTarget: "topic-27",
    nextTarget: "topic-29"
  },
  {
    id: "topic-29",
    tag: "#29",
    title: "CSS Pseudo-element",
    iconClass: "fa-solid fa-wand-magic-sparkles",
    definition: "Pseudo-elements element ke specific structural section ko style karne ke liye double colon (`::`) se target hote hain (`::before`, `::after`, `::first-letter`, `::selection`).",
    exampleCode: ".card::before {\n  content: '';\n  position: absolute;\n  top: 0; left: 0;\n  width: 100%; height: 4px;\n  background: linear-gradient(to right, #3b82f6, #8b5cf6);\n}",
    proTip: "`::before` and `::after` require `content: '';` property to render in DOM.",
    practice: {
      question: "Create a red bullet before blockquote paragraph using ::before.",
      solution: "blockquote::before { content: '★ '; color: red; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_pseudo_elements.asp",
    extraInfoLabel: "CSS Pseudo-elements",
    prevTarget: "topic-28",
    nextTarget: "topic-30"
  },
  {
    id: "topic-30",
    tag: "#30",
    title: "CSS Opacity",
    iconClass: "fa-solid fa-circle-half-stroke",
    definition: "Opacity property transparency level set karti hai range 0.0 (completely transparent) se 1.0 (opaque) tak.",
    exampleCode: "img {\n  opacity: 0.8;\n  transition: opacity 0.3s ease;\n}\nimg:hover {\n  opacity: 1.0;\n}",
    proTip: "Using `opacity` on a container makes all child elements transparent too. Use RGBA background color for background-only transparency.",
    practice: {
      question: "Make an element 50% semi-transparent.",
      solution: ".semi-transparent { opacity: 0.5; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_image_transparency.asp",
    extraInfoLabel: "CSS Opacity",
    prevTarget: "topic-29",
    nextTarget: "topic-31"
  },

  // Topics 31 - 58
  {
    id: "topic-31",
    tag: "#31",
    title: "CSS Navigation Bar",
    iconClass: "fa-solid fa-bars",
    definition: "A navigation bar is a styled list of links forming horizontal or vertical header menus.",
    exampleCode: "ul.nav {\n  display: flex;\n  list-style: none;\n  gap: 20px;\n  background: #1e293b;\n  padding: 10px 20px;\n}",
    proTip: "Use `gap` property in flexbox navigation lists to set consistent spacing between nav links.",
    practice: {
      question: "Create a horizontal flex nav bar list with 15px gap.",
      solution: "ul.nav { display: flex; list-style: none; gap: 15px; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_navbar.asp",
    extraInfoLabel: "CSS Navigation Bar",
    prevTarget: "topic-30",
    nextTarget: "topic-32"
  },
  {
    id: "topic-32",
    tag: "#32",
    title: "CSS Dropdowns",
    iconClass: "fa-solid fa-caret-down",
    definition: "Dropdown components display hidden contextual content options when hovering or focusing an element.",
    exampleCode: ".dropdown-menu {\n  display: none;\n  position: absolute;\n  top: 100%;\n}\n.dropdown:hover .dropdown-menu {\n  display: block;\n}",
    proTip: "Position the dropdown menu `absolute` inside a `relative` parent wrapper container.",
    practice: {
      question: "Show dropdown menu on hovering parent container.",
      solution: ".parent:hover .dropdown { display: block; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_dropdowns.asp",
    extraInfoLabel: "CSS Dropdowns",
    prevTarget: "topic-31",
    nextTarget: "topic-33"
  },
  {
    id: "topic-33",
    tag: "#33",
    title: "CSS Image Gallery",
    iconClass: "fa-solid fa-images",
    definition: "CSS Image gallery responsive CSS Grid/Flexbox layouts with zoom hover animation and border styling render karti hai.",
    exampleCode: ".gallery {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}",
    proTip: "`repeat(auto-fit, minmax(200px, 1fr))` creates automatic responsive grid columns without media queries!",
    practice: {
      question: "Write responsive grid columns auto-fitting at min 250px.",
      solution: ".grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_image_gallery.asp",
    extraInfoLabel: "CSS Image Gallery",
    prevTarget: "topic-32",
    nextTarget: "topic-34"
  },
  {
    id: "topic-34",
    tag: "#34",
    title: "CSS Image Sprites",
    iconClass: "fa-solid fa-shapes",
    definition: "Multiple small icons & images are combined into a single sprite image sheet to minimize server HTTP requests.",
    exampleCode: ".icon-home {\n  width: 32px; height: 32px;\n  background: url('sprite.png') 0 0;\n}\n.icon-user {\n  width: 32px; height: 32px;\n  background: url('sprite.png') -32px 0;\n}",
    proTip: "Use SVG sprites (`<use href='#id'>`) in modern web dev instead of raster image sprites.",
    practice: {
      question: "How do you shift sprite icon coordinates in CSS?",
      solution: "Use background-position: -32px 0;"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_image_sprites.asp",
    extraInfoLabel: "CSS Image Sprites",
    prevTarget: "topic-33",
    nextTarget: "topic-35"
  },
  {
    id: "topic-35",
    tag: "#35",
    title: "CSS Attribute Selectors",
    iconClass: "fa-solid fa-brackets-curly",
    definition: "Attribute selectors target elements based on attributes or attribute values (`[attr]`, `[attr='val']`, `[attr^='val']`, `[attr$='val']`).",
    exampleCode: "input[type='text'] {\n  border: 1px solid #ccc;\n}\na[href^='https'] {\n  color: #10b981;\n}",
    proTip: "`[href^='https']` styles external secure links green automatically.",
    practice: {
      question: "Target all input fields with type 'password'.",
      solution: "input[type='password'] { border-color: red; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_attribute_selectors.asp",
    extraInfoLabel: "CSS Attribute Selectors",
    prevTarget: "topic-34",
    nextTarget: "topic-36"
  },
  {
    id: "topic-36",
    tag: "#36",
    title: "CSS Forms",
    iconClass: "fa-solid fa-pen-to-square",
    definition: "Form controls like inputs, textareas, selects, and submit buttons styled with padding, custom borders, focus rings, and transition state effects.",
    exampleCode: "input[type='text'] {\n  width: 100%;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border: 1px solid #cbd5e1;\n  transition: border-color 0.2s;\n}\ninput[type='text']:focus {\n  border-color: #2563eb;\n  outline: none;\n}",
    proTip: "Add smooth CSS transitions on border-color and box-shadow for modern input focus state experience.",
    practice: {
      question: "Add 8px border-radius and 10px padding to form input fields.",
      solution: "input { border-radius: 8px; padding: 10px; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_form.asp",
    extraInfoLabel: "CSS Forms",
    prevTarget: "topic-35",
    nextTarget: "topic-37"
  },
  {
    id: "topic-37",
    tag: "#37",
    title: "CSS Counters",
    iconClass: "fa-solid fa-list-ol",
    definition: "CSS Counters allow maintaining dynamic numbering variables (`counter-reset`, `counter-increment`, `counter()`) directly in stylesheets.",
    exampleCode: "body {\n  counter-reset: section-counter;\n}\nh2::before {\n  counter-increment: section-counter;\n  content: 'Section ' counter(section-counter) ': ';\n}",
    proTip: "CSS counters can count nested headings (e.g. 1.1, 1.2) using `counters()` function.",
    practice: {
      question: "Initialize a counter named 'my-counter' on section container.",
      solution: "section { counter-reset: my-counter; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_counters.asp",
    extraInfoLabel: "CSS Counters",
    prevTarget: "topic-36",
    nextTarget: "topic-38"
  },
  {
    id: "topic-38",
    tag: "#38",
    title: "CSS Website Layout",
    iconClass: "fa-solid fa-window-maximize",
    definition: "Modern website layouts structure header, main content, sidebar, and footer sections responsively using CSS Grid or Flexbox.",
    exampleCode: ".layout {\n  display: grid;\n  grid-template-areas:\n    'header header'\n    'nav main'\n    'footer footer';\n}",
    proTip: "`grid-template-areas` makes visual responsive web layout restructuring intuitive and human-readable.",
    practice: {
      question: "What CSS layout module is ideal for overall 2D web app page structures?",
      solution: "CSS Grid layout module."
    },
    extraInfoLink: "https://www.w3schools.com/css/css_website_layout.asp",
    extraInfoLabel: "CSS Website Layout",
    prevTarget: "topic-37",
    nextTarget: "topic-39"
  },
  {
    id: "topic-39",
    tag: "#39",
    title: "CSS Units",
    iconClass: "fa-solid fa-ruler",
    definition: "CSS length units include absolute units (`px`) and relative units (`%`, `em`, `rem`, `vw`, `vh`, `ch`).",
    exampleCode: "html { font-size: 16px; }\nh1 { font-size: 2.5rem; } /* 40px */\n.hero { height: 100vh; }",
    proTip: "Use `rem` for typography and spacing to support user font scaling preferences accessibility across devices.",
    practice: {
      question: "If root font-size is 16px, how many pixels is 2rem equal to?",
      solution: "32px (16px * 2 = 32px)."
    },
    extraInfoLink: "https://www.w3schools.com/css/css_units.asp",
    extraInfoLabel: "CSS Units",
    prevTarget: "topic-38",
    nextTarget: "topic-40"
  },
  {
    id: "topic-40",
    tag: "#40",
    title: "CSS Specificity",
    iconClass: "fa-solid fa-ranking-star",
    definition: "Specificity is the weight score calculated by browser matching algorithms to determine which selector wins when conflicting CSS rules exist (Inline > ID > Class/Pseudo > Tag).",
    exampleCode: "/* Weight: 0,1,0,0 */\n.btn { color: red; }\n\n/* Weight: 1,0,0,0 - Wins! */\n#submit-btn { color: blue; }",
    proTip: "Keep specificity low across components so styles remain easy to override cleanly.",
    practice: {
      question: "Which selector has higher specificity: #myId or .myClass?",
      solution: "#myId has higher specificity (1,0,0) than .myClass (0,1,0)."
    },
    extraInfoLink: "https://www.w3schools.com/css/css_specificity.asp",
    extraInfoLabel: "CSS Specificity",
    prevTarget: "topic-39",
    nextTarget: "topic-41"
  },
  {
    id: "topic-41",
    tag: "#41",
    title: "CSS !important",
    iconClass: "fa-solid fa-exclamation",
    definition: "The `!important` rule overrides all specificity scoring rules for a property declaration.",
    exampleCode: "p {\n  color: red !important;\n}",
    proTip: "Avoid using `!important` unless overriding third-party widget CSS styles.",
    practice: {
      question: "Override any background color rule on an alert element.",
      solution: ".alert { background-color: darkred !important; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_important.asp",
    extraInfoLabel: "CSS !important",
    prevTarget: "topic-40",
    nextTarget: "topic-42"
  },
  {
    id: "topic-42",
    tag: "#42",
    title: "CSS Math Functions",
    iconClass: "fa-solid fa-calculator",
    definition: "CSS math functions `calc()`, `min()`, `max()`, and `clamp()` perform dynamic calculations directly in CSS properties.",
    exampleCode: ".sidebar { width: calc(100% - 250px); }\nh1 { font-size: clamp(1.5rem, 5vw, 3rem); }",
    proTip: "`clamp(min, preferred, max)` provides smooth fluid typography across all viewport screens without breaking layout.",
    practice: {
      question: "Create a fluid responsive heading font-size using clamp between 1rem and 2.5rem.",
      solution: "h1 { font-size: clamp(1rem, 4vw, 2.5rem); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_math_functions.asp",
    extraInfoLabel: "CSS Math Functions",
    prevTarget: "topic-41",
    nextTarget: "topic-43"
  },
  {
    id: "topic-43",
    tag: "#43",
    title: "CSS Rounded Corners",
    iconClass: "fa-solid fa-vector-square",
    definition: "The `border-radius` property adds smooth rounded corner curves to elements or makes circular avatars with `50%`.",
    exampleCode: ".card { border-radius: 12px; }\n.avatar { border-radius: 50%; width: 60px; height: 60px; }",
    proTip: "`border-radius: 9999px;` creates modern pill-shaped buttons regardless of element width.",
    practice: {
      question: "Make a 100px square image perfectly circular.",
      solution: "img { width: 100px; height: 100px; border-radius: 50%; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_borders.asp",
    extraInfoLabel: "CSS Rounded Corners",
    prevTarget: "topic-42",
    nextTarget: "topic-44"
  },
  {
    id: "topic-44",
    tag: "#44",
    title: "CSS Border Images",
    iconClass: "fa-solid fa-crop-simple",
    definition: "The `border-image` property allows using custom graphic images as borders instead of simple solid colors.",
    exampleCode: ".custom-border {\n  border: 10px solid transparent;\n  border-image: url(border.png) 30 round;\n}",
    proTip: "Always set a fallback standard `border` property when using `border-image`.",
    practice: {
      question: "Which property allows an image to wrap around border edges?",
      solution: "border-image"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_border_images.asp",
    extraInfoLabel: "CSS Border Images",
    prevTarget: "topic-43",
    nextTarget: "topic-45"
  },
  {
    id: "topic-45",
    tag: "#45",
    title: "CSS Backgrounds Advanced",
    iconClass: "fa-solid fa-photo-film",
    definition: "Advanced background properties include multiple images layer blending (`background-image: url1, url2`), `background-origin`, and `background-clip`.",
    exampleCode: "div {\n  background-image: url(logo.png), url(pattern.png);\n  background-position: right top, left top;\n  background-repeat: no-repeat, repeat;\n}",
    proTip: "Use `background-clip: text; color: transparent;` to create vibrant gradient text title effects!",
    practice: {
      question: "Apply gradient text effect in CSS.",
      solution: "h1 { background: linear-gradient(to right, #3b82f6, #8b5cf6); -webkit-background-clip: text; color: transparent; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_backgrounds.asp",
    extraInfoLabel: "CSS Backgrounds Advanced",
    prevTarget: "topic-44",
    nextTarget: "topic-46"
  },
  {
    id: "topic-46",
    tag: "#46",
    title: "CSS Colors Advanced",
    iconClass: "fa-solid fa-droplet",
    definition: "Advanced color formats include RGBA, HSLA, OKLCH, and HSL color models.",
    exampleCode: ".glass {\n  background-color: hsla(220, 90%, 56%, 0.15);\n  backdrop-filter: blur(10px);\n}",
    proTip: "HSL (Hue, Saturation, Lightness) makes color palette generation and theme light/dark modifications intuitive.",
    practice: {
      question: "What does HSL stand for?",
      solution: "Hue, Saturation, Lightness."
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_colors.asp",
    extraInfoLabel: "CSS Colors Advanced",
    prevTarget: "topic-45",
    nextTarget: "topic-47"
  },
  {
    id: "topic-47",
    tag: "#47",
    title: "CSS Color Keywords",
    iconClass: "fa-solid fa-key",
    definition: "Special CSS color keywords like `currentColor`, `transparent`, and `inherit` compute dynamic colors based on parent or font context.",
    exampleCode: "button {\n  color: #2563eb;\n  border: 2px solid currentColor; /* inherits button font color automatically */\n}",
    proTip: "`currentColor` keeps icon SVG fills and border lines automatically in sync with text color.",
    practice: {
      question: "Make an icon border match its font text color automatically.",
      solution: ".icon-box { border: 2px solid currentColor; }"
    },
    extraInfoLink: "https://www.w3schools.com/cssref/css_colors_legal.php",
    extraInfoLabel: "CSS Color Keywords",
    prevTarget: "topic-46",
    nextTarget: "topic-48"
  },
  {
    id: "topic-48",
    tag: "#48",
    title: "CSS Gradients",
    iconClass: "fa-solid fa-fill-drip",
    definition: "Gradients display smooth color transitions without images (`linear-gradient()`, `radial-gradient()`, `conic-gradient()`).",
    exampleCode: ".hero-bg {\n  background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);\n}",
    proTip: "Use degree angles like `135deg` for modern angled gradient hero section designs.",
    practice: {
      question: "Create a linear gradient background from blue to purple angled at 45 degrees.",
      solution: ".card { background: linear-gradient(45deg, blue, purple); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_gradients.asp",
    extraInfoLabel: "CSS Gradients",
    prevTarget: "topic-47",
    nextTarget: "topic-49"
  },
  {
    id: "topic-49",
    tag: "#49",
    title: "CSS Shadows",
    iconClass: "fa-solid fa-box-shadow",
    definition: "Shadow effects add elevation and depth via `box-shadow` for elements and `text-shadow` for typography.",
    exampleCode: ".card {\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n}",
    proTip: "Layer multiple soft subtle `box-shadow` values for realistic smooth elevation depth.",
    practice: {
      question: "Add a soft shadow with 10px blur and 10% black opacity.",
      solution: ".shadow-box { box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_shadows.asp",
    extraInfoLabel: "CSS Shadows",
    prevTarget: "topic-48",
    nextTarget: "topic-50"
  },
  {
    id: "topic-50",
    tag: "#50",
    title: "CSS Text Effects",
    iconClass: "fa-solid fa-paragraph",
    definition: "CSS text effects include `text-overflow: ellipsis`, `word-break: break-word`, `writing-mode`, and `text-stroke`.",
    exampleCode: ".truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}",
    proTip: "Combining `white-space: nowrap`, `overflow: hidden`, and `text-overflow: ellipsis` truncates single-line overflow with `...` cleanly.",
    practice: {
      question: "Truncate overflow text with three dots (...) on a single line.",
      solution: ".text-cut { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_text_effects.asp",
    extraInfoLabel: "CSS Text Effects",
    prevTarget: "topic-49",
    nextTarget: "topic-51"
  },
  {
    id: "topic-51",
    tag: "#51",
    title: "CSS Web Fonts",
    iconClass: "fa-solid fa-font-awesome",
    definition: "Web fonts loaded via `@font-face` rule allow hosting custom brand font files (.woff2, .ttf) locally or remotely.",
    exampleCode: "@font-face {\n  font-family: 'MyCustomFont';\n  src: url('/fonts/custom.woff2') format('woff2');\n  font-display: swap;\n}",
    proTip: "Always specify `font-display: swap;` in `@font-face` to prevent Flash of Unstyled Text (FOUT).",
    practice: {
      question: "Why should you use font-display: swap for web fonts?",
      solution: "It shows fallback text immediately while the web font downloads, preventing invisible text."
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_fonts.asp",
    extraInfoLabel: "CSS Web Fonts",
    prevTarget: "topic-50",
    nextTarget: "topic-52"
  },
  {
    id: "topic-52",
    tag: "#52",
    title: "CSS 2D Transforms",
    iconClass: "fa-solid fa-rotate",
    definition: "2D Transform functions (`translate()`, `rotate()`, `scale()`, `skew()`) modify element geometry in 2D space.",
    exampleCode: ".card:hover {\n  transform: translateY(-8px) scale(1.02);\n}",
    proTip: "Hardware-accelerated CSS properties like `transform` and `opacity` render buttery-smooth 60fps animations.",
    practice: {
      question: "Rotate an element 45 degrees clockwise.",
      solution: ".icon { transform: rotate(45deg); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_2dtransforms.asp",
    extraInfoLabel: "CSS 2D Transforms",
    prevTarget: "topic-51",
    nextTarget: "topic-53"
  },
  {
    id: "topic-53",
    tag: "#53",
    title: "CSS 3D Transforms",
    iconClass: "fa-solid fa-cube",
    definition: "3D Transforms manipulate objects in 3D coordinate space using `perspective`, `rotateX()`, `rotateY()`, and `transform-style: preserve-3d`.",
    exampleCode: ".card-flip {\n  perspective: 1000px;\n}\n.card-inner {\n  transform-style: preserve-3d;\n  transition: transform 0.6s;\n}\n.card-flip:hover .card-inner {\n  transform: rotateY(180deg);\n}",
    proTip: "Set `perspective` on parent container to create realistic 3D depth for child rotateY cards.",
    practice: {
      question: "Rotate card 180 degrees along Y axis.",
      solution: ".flip { transform: rotateY(180deg); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_3dtransforms.asp",
    extraInfoLabel: "CSS 3D Transforms",
    prevTarget: "topic-52",
    nextTarget: "topic-54"
  },
  {
    id: "topic-54",
    tag: "#54",
    title: "CSS Transitions",
    iconClass: "fa-solid fa-gauge-high",
    definition: "CSS transitions smoothly animate state property changes over a given duration (`transition: property duration timing-function delay`).",
    exampleCode: "button {\n  background-color: #2563eb;\n  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\nbutton:hover {\n  background-color: #1d4ed8;\n}",
    proTip: "Avoid using `transition: all;` for performance. Explicitly name target properties like `transition: transform 0.2s, opacity 0.2s;`.",
    practice: {
      question: "Animate transform changes smoothly over 300 milliseconds.",
      solution: ".btn { transition: transform 0.3s ease; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_transitions.asp",
    extraInfoLabel: "CSS Transitions",
    prevTarget: "topic-53",
    nextTarget: "topic-55"
  },
  {
    id: "topic-55",
    tag: "#55",
    title: "CSS Animations",
    iconClass: "fa-solid fa-spinner",
    definition: "CSS animations construct continuous or keyframe-based visual sequences using `@keyframes` and `animation` shorthand properties.",
    exampleCode: "@keyframes pulse {\n  0%, 100% { opacity: 1; transform: scale(1); }\n  50% { opacity: 0.7; transform: scale(1.05); }\n}\n.badge {\n  animation: pulse 2s infinite ease-in-out;\n}",
    proTip: "Use `animation-fill-mode: forwards;` to keep the keyframe state reached at the end of animation execution.",
    practice: {
      question: "Make an animation loop infinitely.",
      solution: ".spinner { animation: spin 1s infinite linear; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_animations.asp",
    extraInfoLabel: "CSS Animations",
    prevTarget: "topic-54",
    nextTarget: "topic-56"
  },
  {
    id: "topic-56",
    tag: "#56",
    title: "CSS Tooltips",
    iconClass: "fa-solid fa-comment-dots",
    definition: "Tooltips display contextual popup information when hovering target UI elements.",
    exampleCode: ".tooltip {\n  position: relative;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  position: absolute;\n  bottom: 125%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #0f172a;\n  color: #fff;\n  padding: 6px 12px;\n  border-radius: 6px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}",
    proTip: "Animate `opacity` together with `visibility` for fade-in tooltips without click phantom issues.",
    practice: {
      question: "Center a tooltip horizontally relative to its parent button.",
      solution: ".tooltiptext { left: 50%; transform: translateX(-50%); }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css_tooltips.asp",
    extraInfoLabel: "CSS Tooltips",
    prevTarget: "topic-55",
    nextTarget: "topic-57"
  },
  {
    id: "topic-57",
    tag: "#57",
    title: "CSS Style Images",
    iconClass: "fa-solid fa-image-portrait",
    definition: "CSS styling on image elements: `object-fit: cover`, borders, hover scale, grayscale/blur `filter`, and responsive image wrappers.",
    exampleCode: "img.responsive-cover {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 12px;\n  filter: grayscale(20%);\n  transition: filter 0.3s;\n}\nimg.responsive-cover:hover {\n  filter: grayscale(0%);\n}",
    proTip: "`object-fit: cover;` clips image aspect ratio to container bounds without distortion.",
    practice: {
      question: "Prevent image aspect ratio stretch when setting fixed height.",
      solution: "img { object-fit: cover; }"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_images.asp",
    extraInfoLabel: "CSS Style Images",
    prevTarget: "topic-56",
    nextTarget: "topic-58"
  },
  {
    id: "topic-58",
    tag: "#58",
    title: "CSS Image Reflection",
    iconClass: "fa-solid fa-clone",
    definition: "The `-webkit-box-reflect` property creates dynamic mirror reflection effects below image elements.",
    exampleCode: ".reflect-img {\n  -webkit-box-reflect: below 2px linear-gradient(transparent, rgba(0, 0, 0, 0.4));\n}",
    proTip: "Gradient masks inside `-webkit-box-reflect` make reflection fade out naturally.",
    practice: {
      question: "Which webkit property creates a mirrored visual reflection of an image?",
      solution: "-webkit-box-reflect: below 0px;"
    },
    extraInfoLink: "https://www.w3schools.com/css/css3_object-fit.asp",
    extraInfoLabel: "CSS Image Reflection",
    prevTarget: "topic-57"
  }
];
