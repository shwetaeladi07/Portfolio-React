import { initScrollReveal } from "./scrollReveal";
import { hoverChangeExperience } from "./hoverChangeExperience";
import { typeWrite } from "./typeWrite";
import { hoverChangeDescription } from "./hoverChangeDescription";
import { menu } from "./menu";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".Bachloers",
  `BCA is Bachelor of Computer Applications.
 A three-year undergraduate degree in technology and computer applications .
The core subjects of BCA are computer graphics and animation, computer networks, operating systems, database management systems, programming in python.`,
  "Amity University Mumbai",
  "Bachloers",
  "2023"
);

hoverChangeExperience(
  ".Qspider",
  ` This course is blended with IT industry experience where even a fresher can start working on project in IT industry easily
and  gives desired knowledge on application development which is the entry level criteria for any interview.
This package gives confidence to a fresher to start working on a developing a project from the day of joining.
and course will give you the complete aspects of building an enterprise application. `,
  "Qspider",
  "Aug 2022 - Jan 2023"
);

hoverChangeExperience(
  ".Reserve my Slot",
  `Had a great experience while working for first project and got to learn many things,
This is UI/UX of appointment of spa, where you can book your appointment without waiting in line.`,
"UI/UX Designer",
  "Reserve my Slot",
  "Jan 2022 - April 2022"
);

hoverChangeExperience(
  ".CoffeeShop",
  `Coffeeshop is an UI for customers to order coffee beforehand and collect it to your nearest cafe,
it is a beautiful design with images and simples design which can be easy to understand.`,
  "UI Designer",
  "CoffeeShop",
  "April 2022"
);

hoverChangeDescription(
  ".html",
  "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
);
hoverChangeDescription(
  ".css",
  "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
);
hoverChangeDescription(
  ".js",
  "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
);
hoverChangeDescription(
  ".sass",
  "Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."
);
hoverChangeDescription(
  ".react",
  "React is a free and open-source front-end JavaScript library for building user interfaces based on components."
);
hoverChangeDescription(
  ".styled",
  "Styled-components is a library that allows you to write CSS in JS while building custom components in Reactjs ."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap."
);

