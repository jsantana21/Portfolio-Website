import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Juan Santana | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Juan Santana',
  subtitle: 'A Software Engineer',
  cta: 'Get to know me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '    Hi, I’m Juan Santana and I graduated from Boston University in May 2020 with a degree in Computer Science. My interests are in Full Stack Engineering (or Software Engineering in general). I love to create web applications with slick and clean user experiences and well designed backends.',
  paragraphTwo: '    Back in school, I alongside three of my class peers designed and built a web application, Tune My Ride where the user can generate a Spotify playlist based of their music preferences and the duration of their start and destination on the Boston subway system, MBTA. It was built using Javascript, NodeJS, and API calls to Spotify and the MBTA database. To look at more course group projects I have done in the past, please checkout my GitHub linked at the bottom of this page. ',
  paragraphThree: 'I’m looking to begin my professional career as soon as possible. If you like what you see and believe that I am a fit candidate for your job then please check out my resume and contact me below.',
  resume: 'https://drive.google.com/file/d/1QSvYXxwt937KhwStmqnCJ5sYn5ME9Q81/view?usp=sharing', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'E-Commerce Web Store Project',
    info: 'Currently, I am planning on creating an e-Commerce site based off of Amazon using using React and Javascript in the frontend and Commerce.js as a third party API for the backend include features such as product list and details, shopping cart, checking out, and payment using Stripe.',
    info2: '',
    url: 'https://github.com/jsantana21/E-Commerce-Amazon-Clone-Project',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Task List Manager Web Application Project',
    info: 'I implemented a simple task list application using the MEAN (MongoDB, Express, Angular, NodeJS) tech stack and also includes a user authentication feature.',
    info2: 'This project demonstrates understanding of CRUD operation, building an API, and other essential features needed in any web application.',
    url: 'https://github.com/jsantana21/Task-List-Manager-Application',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Sudoku Game / Puzzle Solver Project',
    info: 'I developed a generated user interface where the user can play a game of Sudoku using Python’s pygame module.js',
    info2: 'Alongside the GUI, I implemented a solver algorithm that can solve any solvable 9x9 Sudoku puzzle by use of the backtracking algorithm.',
    url: 'https://github.com/jsantana21/Sudoku-Puzzle-Game-and-Solver', 
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Sorting Algorithm Visualizer Project',
    info: 'I created an algorithm that visually shows how sorting algorithms such as bubble, quick, merge, and insertion sort go about sorting a random array of data value using Python’s tkinter module.',
    info2: 'I made this project to demonstrate proficiency in coding sorting algorithms often seen in technical interviews.',
    url: 'https://github.com/jsantana21/Sorting-Algorithm-Visualizer', 
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'juansantanajunior@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/juan-santana-2063b0124',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jsantana21/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
