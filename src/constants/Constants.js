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

export const tab_names = {
  "about_me": "About Me",
  "portfolio": "Portfolio",
  "contact": "Contact",
  "resume": "Resume"
}

export const about_me_headshot_src = about_me_headshot;

export const about_me_bio = [
  "I am a web developer based in the Twin Cities area in Minnesota.  Although my professional experience has been in Ruby on Rails, I have knowledge in the MERN Stack and can easily pick up new technologies.",
];

export const examples_list = [
  {
    "title": "Live Events API (Group Project)",
    "link": "https://github.com/JacobDNelsonStone/live-music-search-ticketmaster-api",
    "image": example_list_live_events_img,
    "deployed_link": "https://jacobdnelsonstone.github.io/live-music-search-ticketmaster-api/",
  },
  {
    "title": "Weather Dashboard",
    "link": "https://github.com/thinkbui/umn-edx-weather-dashboard",
    "image": example_list_weather_dashboard_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-weather-dashboard/",
  },
  {
    "title": "Workday Scheduler",
    "link": "https://github.com/thinkbui/umn-edx-work-day-scheduler",
    "image": example_list_workday_scheduler_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-work-day-scheduler/",
  },
  {
    "title": "Timed Quiz",
    "link": "https://github.com/thinkbui/umn-edx-timed-quiz",
    "image": example_list_timed_quiz_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-timed-quiz/",
  },
  {
    "title": "Password Generator",
    "link": "https://github.com/thinkbui/umn-edx-password-generator",
    "image": example_list_password_generator_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-password-generator/",
  },
  {
    "title": "Refactor Challenge",
    "link": "https://github.com/thinkbui/umn-edx-module-1-challenge-code-refactor",
    "image": example_list_refactor_challenge_img,
    "deployed_link": "https://thinkbui.github.io/umn-edx-module-1-challenge-code-refactor/",
  },
];

export const contact_options = [
  {
    "title": "555-555-5555",
    "href": "tel:5555555555"
  },
  {
    "title": "admin@example.com",
    "href": "mailto:admin@example.com"
  },
  {
    "title": "LinkedIn",
    "href": ""
  },
  {
    "title": "GitHub",
    "href": ""
  },
];

export const resume_content = [
  "My resume is not currently available at this location.  Please visit my LinkedIn profile in the meantime.",
]

export const resume_link = {
  "link": "https://www.sec.gov/jobs/sample-resume/sample-resume.pdf",
  "text": "Placeholder Resume",
};

export const footer_text = "Ian Bui 2023";
