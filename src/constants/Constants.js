import headshot from "./../img/Header/headshot.jpeg";
import about_me_headshot from "./../img/Main/AboutMe/headshot.jpeg";
import example_list_live_events_img from "./../img/Main/Portfolio/live-events-api.png";
import example_list_weather_dashboard_img from "./../img/Main/Portfolio/weather-dashboard.png";
import example_list_workday_scheduler_img from "./../img/Main/Portfolio/workday-scheduler.png";
import example_list_timed_quiz_img from "./../img/Main/Portfolio/timed-quiz.png";
import example_list_password_generator_img from "./../img/Main/Portfolio/password-generator.png";
import example_list_refactor_challenge_img from "./../img/Main/Portfolio/refactor-challenge.png";

export const headshot_src = headshot;

export const header_name = "Ian Bui";

export const tab_list = ["about_me", "portfolio", "contact", "resume"];

export const tab_data = {
  "about_me": {
    "name": "About Me"
  },
  "portfolio": {
    "name": "Portfolio"
  },
  "contact": {
    "name": "Contact"
  },
  "resume": {
    "name": "Resume"
  }
};

export const about_me_headshot_src = about_me_headshot;

export const about_me_bio = [
  {
    "key": "line0",
    "content": "I am a web developer based in the Twin Cities area in Minnesota.  Although my professional experience has been in Ruby on Rails, I have knowledge in the MERN Stack and can easily pick up new technologies.",
  }
];

export const examples_list = [
  {
    "key": "live-events",
    "title": "Live Events API (Group Project)",
    "link": "https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api",
    "image": example_list_live_events_img,
    "deployed_link": "https://jacobdnelsonstone.github.io/live-music-search-ticketmaster-api/",
  },
  {
    "key": "weather-dashboard",
    "title": "Weather Dashboard",
    "link": "https://github.com/thinkbui/umn-edx-weather-dashboard",
    "image": example_list_weather_dashboard_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-weather-dashboard/",
  },
  {
    "key": "workday-scheduler",
    "title": "Workday Scheduler",
    "link": "https://github.com/thinkbui/umn-edx-work-day-scheduler",
    "image": example_list_workday_scheduler_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-work-day-scheduler/",
  },
  {
    "key": "timed-quiz",
    "title": "Timed Quiz",
    "link": "https://github.com/thinkbui/umn-edx-timed-quiz",
    "image": example_list_timed_quiz_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-timed-quiz/",
  },
  {
    "key": "password-generator",
    "title": "Password Generator",
    "link": "https://github.com/thinkbui/umn-edx-password-generator",
    "image": example_list_password_generator_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-password-generator/",
  },
  {
    "key": "refactor",
    "title": "Refactor Challenge",
    "link": "https://github.com/thinkbui/umn-edx-module-1-challenge-code-refactor",
    "image": example_list_refactor_challenge_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-module-1-challenge-code-refactor/",
  },
];

export const resume_content = [
  {
    "key": "line0",
    "content": "I have 4+ years of professional experience with Ruby on Rails in an Agile environment."
  },
  {
    "key": "line1",
    "content": "I have 4+ years of professional experience with AngularJS."
  },
  {
    "key": "line2",
    "content": "I have 7+ years of professional experience with different flavors of SQL."
  },
  {
    "key": "line3",
    "content": "I've recently completed a bootcamp for the MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS)."
  },
  {
    "key": "line4",
    "content": "My resume is not currently available at this location.  Please visit my LinkedIn profile in the meantime.",
  }
]

export const resume_link = {
  "link": "https://www.sec.gov/jobs/sample-resume/sample-resume.pdf",
  "text": "Placeholder Resume",
};

export const contact_options = [
  {
    "key": "phone",
    "title": "555-555-5555",
    "href": "tel:5555555555"
  },
  {
    "key": "email",
    "title": "admin@example.com",
    "href": "mailto:admin@example.com"
  },
  {
    "key": "linkedin",
    "title": "LinkedIn",
    "href": ""
  },
  {
    "key": "github",
    "title": "GitHub",
    "href": ""
  },
  {
    "key": "stackoverflow",
    "title": "StackOverflow",
    "href": ""
  },
];

export const footer_text = "Ian Bui 2023";
