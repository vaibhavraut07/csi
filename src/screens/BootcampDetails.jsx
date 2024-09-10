import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

const bootcampData = {
  uiux: {
    img: '/bootcamppage/detailspage/ui_ux.png',
    title: 'UI/UX Design Bootcamp',
    date: 'Sep 20-21',
    reg_link: '#',
    
    /* ABOUT THE EVENT */
    about: {
      headline: 'Learn the principle of design, Wireframing, Prototyping and Mastering Figma',
      keypoints: [
        'Get know to UI/UX and Figma resource',
        'Hands on Figma creation experience',
        'Get trained by well versed professionals'
      ],
      lecture: [
        {
          id: 1,
          title: '', /* one of the bootcamp had title thats the reason title add kiya hai*/
          points: [
            'Introduction to UI/UX Design',
            'Understanding the Design Process',
            'Tools and Software',
            'User Research',
            'Wireframing and Prototyping',
            'Visual Design Principle',
            'Usability Testing',
            'Design System and Style Guide',
            'Mobile vs. Web Design',
            'Interaction Design',
            'Accessibility in Design',
            'Career Path in UI/UX'
          ]
        },
        {
          id: 2,
          title: '',
          points: [
            'Figma: Introduction',
            'Inspiration and Where to Use Figma',
            'Figma UI Structure: Toolbar, Left & Right Sidebar, Frames, Groups, Auto-layout',
            'Typography and Color Styles',
            'Wireframing and Prototyping with Animation',
            'Iconography and UI Elements',
            'Animation in Figma',
            'Introduction to Figma to Lottie',
            'Single/Multiple Frame Animations',
            'Lottie Creation with Prototyping',
            'Text & Gradient',
            'Advance Animation with Figma to Lottie: Stroke & Masks, Multi-varient Component Animations',
            'Animation Tip & Tricks'
          ]
        }
      ]
    },

    speaker: [
      {
        img: '/team/shree.svg',
        name: 'Shree Shinde',
        role: 'UI UX Lead'
      },
      {
        img: '/team/shravani.svg',
        name: 'Shravani Pawar',
        role: 'UI UX Lead'
      }
    ]
  },

  webdev: {
    img: '/bootcamppage/detailspage/web_development.png',
    title: 'Web Development Bootcamp',
    date: 'Sep 20-21',
    reg_link: '#',
    
    /* ABOUT THE EVENT */
    about: {
      headline: 'Build full-stack applications with CSS, JavaScript, NodeJS and ExpressJS',
      keypoints: [
        "Master JavaScript fundamentals",
    "Hands-on with NodeJS and ExpressJS",
    "Understand APIs and client-server communication",
      ],
      lecture: [
        {
          id: 1,
          title: 'CSS',
          points: [
            'Responsiveness',
            'Media Queries',
            'Grid Flexbox',
            'JavaScript Basics: Variable, Functions, Built-in Functions, Strings, Arrays, Data Types',
            'Conditional Statements, Loops'
          ]
        },
        {
          id: 2,
          title: 'JavaScript, NodeJS and ExpressJS',
          points: [
            'Introduction to DOM Manipulation',
            'Selecting and Manipulating HTML Elements',
            'Event Loop Theory',
            'Code Concurrency',
            'Node JS: Using Native Node Modules, Importing Eternal Module Using NPM',
            'ExpressJS: Creating an Express Server,Introduction to Postman, Middlewares',
            'React: Taught by Jamil'
          ]
        }
      ]
    },

    speaker: [
      {
        img: '/team/akash.svg',
        name: 'Akash Kolakkal',
        role: 'Developer'
      },
      {
        img: '/team/nishit.svg',
        name: 'Nishit Prabhu',
        role: 'Developer'
      }
    ]
  },

  aiml: {
    img: '/bootcamppage/detailspage/ai_ml.png',          
    title: 'AI & ML Bootcamp',
    date: 'Sep 20-21',
    reg_link: '#',
    
    /* ABOUT THE EVENT */
    about: {
      headline: 'Learn the principle of design, Wireframing, Prototyping and Mastering Figma',
      keypoints: [
      "Understand the core concepts of AI and ML",
      "Learn different types of machine learning algorithms",
      "Work on real-world projects with expert guidance",
      ],
      lecture: [
        {
          id: 1,
          title: '', /* one of the bootcamp had title thats the reason title add kiya hai, leave empty if no title*/
          points: [
            'Introduction to AI and ML',
            'Type of Machine Learning',
            'Supervised Learning',
            'Unsupervised Learning',
            'Reinforcement Learning',
            'Data Preprocesing',
            'Classification Algorithms',
            'Regression Algorithms'
          ]
        },
        {
          id: 2,
          title: '',
          points: [
            'Clusting Algorithms',
            'Hands-On Project: Solving a Mystery',
            'Data Preprocessing',
            'Model Building',
            'Model Evalution',
            'Predicting Iris Flower Species',
            'House Price Prediction',
            'Handwriting Character Recognition',
            'Small Chatbot',
            'Wrap-Up and Q&A'
          ]
        }
      ]
    },

    speaker: [
      {
        img: '/team/chinmae.svg',
        name: 'Chinmayee Bidaye',
        role: 'GDSC Lead'
      },
      
    ]
  },

  cybersec: {
    img: '/bootcamppage/detailspage/cybersecurity.png',
    title: 'Cybersecurity Bootcamp',
    date: 'Sep 20-21',
    reg_link: '#',
    
    /* ABOUT THE EVENT */
    about: {
      headline: 'Master network security, ethical hacking and hands-on tools',
      keypoints: [
      "Learn ethical hacking techniques and cybersecurity fundamentals",
      "Understand different types of cyberattacks and defense strategies",
      "Gain hands-on experience with real-world cybersecurity tools",
      ],
      lecture: [
        {
          id: 1,
          title: '',
          points: [
            'Red Team c Blue Team',
            'Black, Grey and White Hat Haking',
            'Phreaking, Phishing and Vishing',
            'Roles in Cybersecurity',
            'SOC Analyst',
            'VAPT',
            'Network Security',
            'Infrastructure Security',
            'Web and Network Pentesting',
            'Type of Attacks',
            'Tools: Wireshark, Nmap, Burp Suite, Metasploit',
            'Backdoors'
          ]
        },
        {
          id: 2,
          title: '',
          points: [
            'Installing Linux Distros, Ubuntu, Kali, Mint',
            'Linux CLI Basics',
            'Linux Text Editors: Vim, Nano',
            'Basic Hacking Attacks',
            'OSINT',
            'Hacking Tools: WiFite, Aircrack-ng, Minikatz',
            'Android Hacking',
            'Hacking Device',
            'Hacking Case Studies'
          ]
        }
      ]
    },

    speaker: [
      {
        img: '/team/vedant.svg',
        name: 'Vedant Farkade',
        role: 'Techincal Lead'
      },
      
    ]
  },

  dsa: {
    img: '/bootcamppage/detailspage/placement.png',
    title: 'Placement & Industry Exposure Bootcamp',
    date: 'Sep 20-21',
    reg_link: '#',
    
    /* ABOUT THE EVENT */
    about: {
      headline: 'Learn the principle of design, Wireframing, Prototyping and Mastering Figma',
      keypoints: [
      "Master interview preparation techniques",
      "Get insights into group discussions and aptitude tests",
      "Learn technical preparation strategies for coding and DSA",
      ],
      lecture: [
        {
          id: 1,
          title: '',
          points: [
          "Interview Preparation at a Glance",
          "Group Discussions",
          "Aptitude Tests Preparation",
          "Technical Preparation (Leetcode, DSA, Competitive Programming)",
          "The Importance of Your Projects and Hackathons",
          "Overview of Semi-tech and Non-tech Roles (Management and Finance)",
          "Keeping Up the Spirit and Dealing with Rejections",
          "Current Market Trends",
          "Masters Options",
          "Resume and Cover Letter Writing",
          "LinkedIn and Networking Skills",
          "On-ground Experience with Internships and Extra-curriculars",
          "Professional Etiquette",
          "Understanding Salary Packages and Company Contracts",
          "Presentation Skills"
          ]
        },
      ]
    },

    speaker: [
      // {
      //   img: '/bootcamppage/speakers/kaneki.jpg',
      //   name: 'D Curse',
      //   role: 'Developer'
      // },
      // {
      //   img: '/bootcamppage/speakers/kaneki.jpg',
      //   name: 'D Curse',
      //   role: 'Developer'
      // }
    ]
  },

  git: {
    img: '/bootcamppage/detailspage/git.png',
    title: 'LinkedIn, Git & GitHub',
    date: 'Sep 20-21',
    reg_link: '#',
    
    /* ABOUT THE EVENT */
    about: {
      headline: 'Learn the principle of design, Wireframing, Prototyping and Mastering Figma',
      keypoints: [
    "Create a LinkedIn profile and resume that stand out",
    "Optimize your online presence and networking strategies",
    "Learn how to manage code using Git and collaborate with GitHub",
    "Get hands-on experience with version control and contributing to open source"
      ],
      lecture: [
        {
          id: 1,
      "title": "LinkedIn and Resume Building",
      "points": [
        "Creating a professional LinkedIn profile",
        "Writing a strong 'About' section on LinkedIn",
        "Optimizing your headline, summary, and experiences",
        "Highlighting skills and getting endorsements",
        "Networking effectively and connecting with professionals",
        "Understanding the structure of a good resume",
        "Tailoring your resume for specific jobs",
        "Showcasing your skills and achievements with action verbs",
        "Creating a one-page resume that stands out",
        "Common resume mistakes to avoid",
        "Utilizing LinkedIn recommendations for your resume"
      ]
    },
        {
          id: 2,
          title: 'Git Workshop',
        "points":  [
            "What is a Version Control System? What is Git? Why do you need it?",
            "Creating a Git repo: git init",
            "Staging and Committing Changes",
            "Understanding the difference between staging and committing",
            "Checking Git History",
            "Git Reset and Revert",
            "Git Blame",
            "Git Stash",
            "Branching: git branch, checkout, merge",
            "Intro to GitHub or Git Server. What is GitHub? How is it different from Git?",
            "Creating a GitHub Account",
            "Configuring local Git with credentials",
            "Creating a Repo on GitHub then cloning",
            "Creating a repo locally and adding a remote",
            "Git Push",
            "Git Pull",
            "Handling Conflicts",
            "Contributing to open source"
          ]
        }
      ]
    },

    speaker: [
      {
        img: '/team/jay.svg',
        name: 'Jay Patel',
        role: 'CSI Chairperson'
      },
      {
        img: '/team/ayush.svg',
        name: 'Aysuh Sonar',
        role: 'Tresurer'
      }
    ]
  },
};

const BootcampDetails = () => {
  const { bootcampName } = useParams();
  const bootcamp = bootcampData[bootcampName];

  useEffect(() => {
    document.body.style.background = 'linear-gradient(to bottom, #C3DAFD, white 10%)';
    return () => {
      document.body.style.background = '';
    };
  }, []);

  if (!bootcamp) {
    return <h1>404 - Bootcamp not found</h1>;
  }

  return (
    <>
      {/* BOOTCAMP HEADER */}
      <div className="mt-32 sm:mt-40"> 
        <div className="relative -z-10">
          <img src={bootcamp.img} alt={bootcamp.title} className="w-[90%] sm:w-[80%] mx-auto h-[300px] sm:h-[500px] object-cover rounded-[25px]" />
          <div className="absolute w-[90%] sm:w-[80%] mx-auto h-[300px] sm:h-[500px] inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[25px]"></div>
          <div className="absolute bottom-0 left-5 sm:left-[15rem] mx-auto p-4">
            <h1 className="text-white text-3xl sm:text-6xl font-bold drop-shadow-lg">{bootcamp.title}</h1>
          </div>
        </div>
        <div className='mx-auto"'>
        <div className="px-8 sm:px-8 pt-6 pb-12 sm:py-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-900 text-lg sm:text-2xl font-semibold mb-2">{bootcamp.date}</p>
            <p className="text-gray-900 text-md sm:text-xl font-semibold mb-4 sm:mb-6">Atharva College of Engineering (Mumbai)</p>
            <button className="bg-white text-black font-semibold border border-gray-500 px-4 sm:px-6 py-2 rounded-full hover:bg-gray-100 hover:border-gray-400 transition">
              <a href={"https://forms.gle/c5RUbXM5ghExL9Eq5"} target="_blank" rel="noopener noreferrer">
                Register here - Google form link
                <i className="fas fa-arrow-right ml-2 sm:ml-10"></i>
              </a>
            </button>
          </div>
        </div>
 
      {/* EVENT DETAILS */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center">ABOUT THE EVENT</h1>
        <div className="px-8 sm:px-8 py-6 sm:py-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#919191] text-lg sm:text-2xl mb-4">{bootcamp.about.headline}</h2>
            
            <ul className="list-disc list-inside mb-6 sm:mb-10">
              {bootcamp.about.keypoints.map((point, index) => (
                <li key={index} className="text-[#031638] text-md sm:text-lg ml-4">{point}</li>
              ))}
            </ul>

            <h3 className="text-lg sm:text-2xl font-semibold mb-6">Course curriculum</h3>
            {bootcamp.about.lecture.map((lecture) => (
              <div key={lecture.id} className="mb-6">
                <h4 className="text-md sm:text-xl font-semibold mb-2">
                  Lecture {lecture.id}
                  {lecture.title && `: ${lecture.title}`}
                </h4>
                <ul className="list-disc list-inside">
                  {lecture.points.map((point, index) => (
                    <li key={index} className="text-gray-900 text-md sm:text-lg ml-4">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      {/* SPEAKERS SECTION */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">SPEAKER</h1>
      <div className="px-4 sm:px-8 py-6 sm:py-10">
        <div className="flex justify-center gap-4">
          {bootcamp.speaker.map((speaker, index) => (
            <div key={index} className="bg-white border border-gray-200 shadow-lg rounded-lg sm:mx-4 p-4 sm:p-6 max-w-xs text-center drop-shadow-lg">
              <div className="w-28 h-28 sm:w-60 sm:h-60 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={speaker.img} alt={speaker.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{speaker.name}</h3>
              <p className="text-gray-600">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>


      </div>
    </>
  );
};

export default BootcampDetails;
