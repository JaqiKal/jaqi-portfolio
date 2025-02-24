/**
 * <src/data/PortfolioData.js />
 * This file contains the data for the portfolio section.
 */
import cameraImg from '../assets/images/camera.png';
import libraryImg from '../assets/images/library.webp';
import taskmasterImg from '../assets/images/taskmaster.webp';
import tictactoeImg from '../assets/images/tictactoe.webp';
import footprintImg from '../assets/images/footprint.webp';
import gratidudesImg from '../assets/images/gratidudes.png';
import musicnonstopImg from '../assets/images/musicnonstop.png';



const portfolioItems = [
    {
        title: "Pixavibe",
        image: cameraImg,
        url:"https://github.com/JaqiKal/pixavibe-frontend/",
        description: "A Full-Stack web application designed to facilitate content sharing among users, similar to Instagram. Utilizing Django Rest Framework for the back-end and React for the front-end, the application provides a seamless user experience for browsing, posting, and interacting with content. Code Institute project 5 of 5",
    },
    {
        title: "ScrollStack",
        image: libraryImg,
        url:"https://scrollstack-af4b226be9f2.herokuapp.com/",
        description: "A Full-Stack application for personal library management, built with Django, PostgreSQL, and Bootstrap. Deployed with Heroku. Code Institute project 4 of 5",
    },
    {
        title: "Task Master",
        image: taskmasterImg,
        url:"https://task-maestro-fc8139fbc4e1.herokuapp.com/",
        description: "This is a user-friendly to-do list app. A command-line application that allows users to manage a common dataset. Built with Python, deployed with Heroku. Code Institute project 3 of 5",
    },
    {
        title: "TicTacToe",
        image: tictactoeImg,
        url:"https://jaqikal.github.io/tic-tac-toe//",
        description: "A two-player game where the objective is to align three of your symbols (X or O) in a row, column, or diagonal to win the game. Tech stack is HTML5, CSS3, and JavaScript. Code Institute project 2 of 5",
    },
    {
        title: "Manus Herba",        
        image: footprintImg,
        url:"https://jaqikal.github.io/wellness-therapy/",
        description: "My very first attemt at any type of code :). A Single Page App crafted with HTML and CSS, the website aims at a seamless and user-friendly interface for a wellness therapy center. Code Institute project 1 of 5",
    },
    {
        title: "Hackathon 2024 September 🎶 Classical Music Month!",        
        image: musicnonstopImg,
        url:"https://github.com/music-non-stop/music_non_stop",
        description: "My 2nd Hacakthon project. I tried my hand as Scrum Master, documentation and frontend",
    },
    {
        title: "Hackathon 2024 March 😃 World Happiness Day!",        
        image: gratidudesImg,
        url:"https://github.com/JaqiKal/GratidudesHackaton",
        description: "My first Hackathon project, built with HTML, CSS & JavaScript. I did frontend and documentation.",
    },
];

export default portfolioItems;