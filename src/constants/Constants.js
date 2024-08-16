// This is the quasi-data warehouse meant to store all display data.
// The pricipal idea is to keep all this information in a single location
// for ease of management and simplify the potential process of adding a
// real database in the future.

import headshot from "./../img/Header/headshot.jpeg";
import about_me_headshot from "./../img/Main/AboutMe/headshot.jpeg";
import example_list_trail_blazers_img from "./../img/Main/Portfolio/trail-blazers.png";
import example_list_react_portfolio_img from "./../img/Main/Portfolio/react-portfolio.png";
import example_list_pwa_text_editor_img from "./../img/Main/Portfolio/pwa-text-editor.png";
import example_list_nosql_social_network_api_img from "./../img/Main/Portfolio/umn-edx-nosql-social-network-api.jpg";
import example_list_tindog_img from "./../img/Main/Portfolio/tindog.png";
import example_list_orm_e_commerce_back_end_img from "./../img/Main/Portfolio/umn-edx-orm-e-commerce-back-end.jpg";
import example_list_employee_tracker_img from "./../img/Main/Portfolio/umn-edx-employee-tracker.jpg";
import example_list_express_note_taker_img from "./../img/Main/Portfolio/express-note-taker.png";
import example_list_svg_logo_maker_img from "./../img/Main/Portfolio/umn-edx-svg-logo-maker.svg";
import example_list_generate_readme_img from "./../img/Main/Portfolio/umn-edx-generate-readme.jpg";
import example_list_live_events_img from "./../img/Main/Portfolio/live-events-api.png";
import example_list_weather_dashboard_img from "./../img/Main/Portfolio/weather-dashboard.png";
import example_list_workday_scheduler_img from "./../img/Main/Portfolio/workday-scheduler.png";
import example_list_timed_quiz_img from "./../img/Main/Portfolio/timed-quiz.png";
import example_list_password_generator_img from "./../img/Main/Portfolio/password-generator.png";
import example_list_professional_portfolio_img from "./../img/Main/Portfolio/professional-portfolio.png";
import example_list_refactor_challenge_img from "./../img/Main/Portfolio/refactor-challenge.png";
import example_list_other_code_examples_img from "./../img/Main/Portfolio/code_examples.png";

export const headshot_src = headshot;

export const header_name = "Ian Bui";

// Keeping this array separate as it controls the order of links even if not DRY
export const tab_list = ["about_me", "resume", "portfolio", "contact"];

export const tab_data = {
  "about_me": {
    "key": "about_me",
    "name": "About Me"
  },
  "portfolio": {
    "key": "portfolio",
    "name": "Portfolio"
  },
  "contact": {
    "key": "contact",
    "name": "Contact"
  },
  "resume": {
    "key": "resume",
    "name": "Resume"
  }
};

export const about_me_headshot_src = about_me_headshot;

export const about_me_bio = [
  {
    "key": "line0",
    "content": "I am a web developer based in the Twin Cities area in Minnesota.  Although my professional experience has been in Ruby on Rails, I have knowledge in the MERN Stack and can easily pick up new technologies.",
  },
  {
    "key": "line1",
    "content": "I've recently completed a web development bootcamp through the University of Minnesota where the focus was on MERN including its underlying technologies (MongoDB, ExpressJS, ReactJS, NodeJS) and potential work with others such as Sequelize/MySQL.",
  },
  {
    "key": "line2",
    "content": "Feedback from my previous jobs all say that I'm a very diligent developer with a great attention to detail creating code that is forward-thinking.  It is also very easy for me to get very passionate about each company's mission.",
  },
];

export const examples_list = [
  {
    "key": "trail-blazers",
    "title": "Trail-Blazers (Group Project)",
    "description": "Hiking trail finder and tracker using the MERN Stack",
    "tech": "MERN Stack (MongoDB, ExpressJS, ReactJS, and NodeJS) and Bootstrap for React",
    "link": "https://github.com/Moe1401/hiking-guide",
    "image": example_list_trail_blazers_img,
    "deployed_link": "https://trail-blazerz.herokuapp.com/",
    "decommissioned": true,
  },
  {
    "key": "react-portfolio",
    "title": "ReactJS Portfolio (This Site)",
    "description": "Professional portfolio using ReactJS and ExpressJS",
    "tech": "ExpressJS, ReactJS, and NodeJS",
    "link": "https://github.com/thinkbui/umn-edx-react-portfolio",
    "image": example_list_react_portfolio_img,
    "deployed_link": "https://thinkbui.herokuapp.com/",
  },
  {
    "key": "pwa-text-editor",
    "title": "PWA Text Editor",
    "description": "Brief study of Progressive Web Applications completing code for a text editor that can function offline",
    "tech": "NodeJS and ExpressJS",
    "link": "https://github.com/thinkbui/umn-edx-progressive-web-applications-text-editor",
    "image": example_list_pwa_text_editor_img,
    "deployed_link": "https://umn-edx-pwa-text-editor.herokuapp.com/",
  },
  {
    "key": "nosql-social-network-api",
    "title": "NoSQL Social Network API",
    "description": "Web API to manage activity on a social network using MongoDB",
    "tech": "NodeJS, ExpressJS, MongoDB, Mongoose, and DayJS",
    "link": "https://github.com/thinkbui/umn-edx-nosql-social-network-api",
    "image": example_list_nosql_social_network_api_img,
  },
  {
    "key": "regex-tutorial",
    "title": "JavaScript Regex Tutorial",
    "description": "Quick reference I made for myself about Regular Expressions",
    "tech": "Regular Expressions",
    "link": "https://gist.github.com/thinkbui/7b5644fde9fd9a420b42e8832d645132",
  },
  {
    "key": "tindog",
    "title": "TinDog (Group Project)",
    "description": "Dog breed matching and adoption app using ExpressJS, Handlebars, and Sequelize",
    "tech": "NodeJS, ExpressJS, Handlebars, MySQL2, Sequelize, and bcrypt",
    "link": "https://github.com/YockaFlocka/tindog",
    "image": example_list_tindog_img,
    "deployed_link": "https://github.com/YockaFlocka/tindog",
    "decommissioned": true,
  },
  {
    "key": "e-commerce-back-end",
    "title": "E-Commerce Back End",
    "description": "Web API to manage inventory for an online retailer using Sequelize",
    "tech": "NodeJS, ExpressJS, MySQL2, and Sequelize",
    "link": "https://github.com/thinkbui/umn-edx-orm-e-commerce-back-end",
    "image": example_list_orm_e_commerce_back_end_img,
  },
  {
    "key": "employee-traker",
    "title": "Employee Tracker",
    "description": "CLI app to manage employee information including department, role, and hierarchy using MySQL2",
    "tech": "NodeJS, Inquirer, MySQL2, and console.table",
    "link": "https://github.com/thinkbui/umn-edx-employee-tracker",
    "image": example_list_employee_tracker_img,
  },
  {
    "key": "express-note-taker",
    "title": "Express Note Taker",
    "description": "Web-based app to create any number of notes for future reference using a crude JSON database",
    "tech": "NodeJS and ExpressJS",
    "link": "https://github.com/thinkbui/umn-edx-express-note-taker",
    "image": example_list_express_note_taker_img,
    "deployed_link": "https://umn-edx-express-note-taker.herokuapp.com/",
  },
  {
    "key": "svg-logo-maker",
    "title": "SVG Logo Maker",
    "description": "CLI app to generate a simple logo for web use",
    "tech": "NodeJS, fs, and Inquirer",
    "link": "https://github.com/thinkbui/umn-edx-svg-logo-maker",
    "image": example_list_svg_logo_maker_img,
  },
  {
    "key": "generate-readme",
    "title": "Generate Readme",
    "description": "CLI app to build a readme file for GitHub repositories",
    "tech": "NodeJS, fs, and Inquirer",
    "link": "https://github.com/thinkbui/umn-edx-generate-readme",
    "image": example_list_generate_readme_img,
  },
  {
    "key": "live-events",
    "title": "Live Events Search (Group Project)",
    "description": "Simple search to find local events within a city and date range",
    "tech": "HTML/CSS, JavaScript, localStorage, and API consumption",
    "link": "https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api",
    "image": example_list_live_events_img,
    "deployed_link": "https://jacobdnelsonstone.github.io/live-music-search-ticketmaster-api/",
  },
  {
    "key": "weather-dashboard",
    "title": "Weather Dashboard",
    "description": "Display the current conditions and a 5-day forecast for many major cities",
    "tech": "HTML/CSS, JavaScript, and API consumption",
    "link": "https://github.com/thinkbui/umn-edx-weather-dashboard",
    "image": example_list_weather_dashboard_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-weather-dashboard/",
  },
  {
    "key": "workday-scheduler",
    "title": "Workday Scheduler",
    "description": "Web-based daily agenda maker using Local Storage",
    "tech": "HTML/CSS, JavaScript, and localStorage",
    "link": "https://github.com/thinkbui/umn-edx-work-day-scheduler",
    "image": example_list_workday_scheduler_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-work-day-scheduler/",
  },
  {
    "key": "timed-quiz",
    "title": "Timed Quiz",
    "description": "Basic web quiz using a JS clock and Local Storage to store high scores",
    "tech": "HTML/CSS, JavaScript, and localStorage",
    "link": "https://github.com/thinkbui/umn-edx-timed-quiz",
    "image": example_list_timed_quiz_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-timed-quiz/",
  },
  {
    "key": "password-generator",
    "title": "Password Generator",
    "description": "Simple web-based password generator where options selected through JS prompts",
    "tech": "HTMl/CSS and JavaScript",
    "link": "https://github.com/thinkbui/umn-edx-password-generator",
    "image": example_list_password_generator_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-password-generator/",
  },
  {
    "key": "professional-portfolio",
    "title": "Professional Portfolio",
    "description": "Early version of this online portfolio using only HTML/CSS",
    "tech": "HTML/CSS",
    "link": "https://github.com/thinkbui/umn-edx-professional-portfolio",
    "image": example_list_professional_portfolio_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-professional-portfolio/",
  },
  {
    "key": "refactor",
    "title": "Refactor Challenge",
    "description": "Update of existing webpage to use semantic HTML",
    "tech": "HTML/CSS",
    "link": "https://github.com/thinkbui/umn-edx-module-1-challenge-code-refactor",
    "image": example_list_refactor_challenge_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-module-1-challenge-code-refactor/",
  },
  {
    "key": "other-examples",
    "title": "Additional Code Examples",
    "description": "These code examples were constructed for personal use and unrelated to this portfolio, but they can offer additional insight into my abilities as a software developer.",
    "tech": "HTML/CSS, JavaScript, and more as I add them",
    "link": "http://thinkbui.github.io/",
    "image": example_list_other_code_examples_img,
  },
];

export const resume_content = [
  {
    "key": "line0",
    "content": "Most recently I've completed a web development bootcamp with a special focus on the MERN Stack.  It is knowledge from this experience that I am primarily looking to leverage in my future endeavors."
  },
  {
    "key": "line1",
    "content": "I've previously worked as a software developer for WebVolta, a software development shop based in Minneapolis, MN, to update one of their major client's internal purchasing system built on Ruby on Rails with new features to assist with decision-making."
  },
  {
    "key": "line2",
    "content": "Before that I worked as a software developer for Municipal Parking Services, a smart parking company based in Minnetonka, MN, mainly to maintain and update the webserver application that manages communication between all of the smart meters and kiosks, but was also responsible for other projects including a live view used by partner municipalities that also includes report generation, building new documentation warehouses and migrating to them, and helping architect how the system embedded in the meters/kiosks perform some functions to coordinate with other components of the overall system."
  },
  {
    "key": "line3",
    "content": "I've also spent time working as a software quality assurance analyst at the National Marrow Donor Program (commonly referred to as \"Be the Match\") heavily focused on different projects involving Oracle SQL Developer and Microsoft SQL Server as multiple organizations within NMDP worked to migrate donor and patient data among other information to newer systems and data warehouses."
  },
  {
    "key": "line10",
    "content": "I have 4+ years of professional experience with Ruby on Rails in an Agile environment."
  },
  {
    "key": "line11",
    "content": "I have 4+ years of professional experience with AngularJS."
  },
  {
    "key": "line12",
    "content": "I have 7+ years of professional experience with different flavors of SQL."
  },
  {
    "key": "line13",
    "content": "Again I've recently completed a bootcamp for the MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)."
  },
  {
    "key": "line14",
    "content": "For my resume, please refer to my job application materials or reach out to me on LinkedIn for new job opportunities.",
  }
]

export const resume_link = {
  "link": "https://www.sec.gov/jobs/sample-resume/sample-resume.pdf",
  "text": "Placeholder Resume",
};

export const contact_options = [
  // {
  //   "key": "phone",
  //   "title": "555-555-5555",
  //   "href": "tel:5555555555"
  // },
  // {
  //   "key": "email",
  //   "title": "admin@example.com",
  //   "href": "mailto:admin@example.com"
  // },
  {
    "key": "linkedin",
    "title": "LinkedIn",
    "href": "https://www.linkedin.com/in/ian-bui-81b3668/"
  },
  {
    "key": "github",
    "title": "GitHub",
    "href": "https://github.com/thinkbui"
  },
  // {
  //   "key": "stackoverflow",
  //   "title": "StackOverflow",
  //   "href": ""
  // },
];

export const footer_text = "Ian Bui 2024";
