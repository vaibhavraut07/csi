import React from 'react';
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
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      },
      {
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
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
        'Get know to UI/UX and Figma resource',
        'Hands on Figma creation experience',
        'Get trained by well versed professionals'
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
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      },
      {
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
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
        'Get know to UI/UX and Figma resource',
        'Hands on Figma creation experience',
        'Get trained by well versed professionals'
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
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      },
      {
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      }
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
        'Get know to UI/UX and Figma resource',
        'Hands on Figma creation experience',
        'Get trained by well versed professionals'
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
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      },
      {
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      }
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
        'Get know to UI/UX and Figma resource',
        'Hands on Figma creation experience',
        'Get trained by well versed professionals'
      ],
      lecture: [
        {
          id: 1,
          title: '',
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
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      },
      {
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      }
    ]
  },

  git: {
    img: '/bootcamppage/detailspage/git.png',
    title: 'Git & GitHub Bootcamp',
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
          title: '',
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
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      },
      {
        img: '/bootcamppage/speakers/kaneki.jpg',
        name: 'D Curse',
        role: 'Developer'
      }
    ]
  },
};

const BootcampDetails = () => {
  const { bootcampName } = useParams();
  const bootcamp = bootcampData[bootcampName];

  if (!bootcamp) {
    return <h1>404 - Bootcamp not found</h1>;
  }

  return (
    <>
      {/* BOOTCAMP HEADER */}
      <div className="mt-20 sm:mt-40"> 
        <div className="relative -z-10">
          <img src={bootcamp.img} alt={bootcamp.title} className="w-[90%] mx-auto h-[300px] sm:h-[500px] object-cover rounded-[25px]" />
          <div className="absolute w-[90%] mx-auto h-[300px] sm:h-[500px] inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-[25px]"></div>
          <div className="absolute bottom-0 left-5 sm:left-40 mx-auto p-4">
            <h1 className="text-white text-3xl sm:text-6xl font-bold drop-shadow-lg">{bootcamp.title}</h1>
          </div>
        </div>

        <div className="px-8 sm:px-8 pt-6 pb-12 sm:py-10">
          <div className="max-w-2xl mx-auto sm:ml-20">
            <p className="text-gray-900 text-lg sm:text-2xl font-semibold mb-2">{bootcamp.date}</p>
            <p className="text-gray-900 text-md sm:text-xl font-semibold mb-4 sm:mb-6">Atharva College of Engineering (Mumbai)</p>
            <button className="bg-white text-black font-semibold border border-gray-500 px-4 sm:px-6 py-2 rounded-full hover:bg-gray-100 hover:border-gray-400 transition">
              <a href={bootcamp.reg_link} target="_blank" rel="noopener noreferrer">
                Register here - Google form link
                <i className="fas fa-arrow-right ml-2 sm:ml-10"></i>
              </a>
            </button>
          </div>
        </div>

      {/* EVENT DETAILS */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center">ABOUT THE EVENT</h1>
        <div className="px-8 sm:px-8 py-6 sm:py-10">
          <div className="max-w-4xl mx-auto sm:ml-20">
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
