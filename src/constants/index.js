
import {  digielec,  highschool, pars, IAU,  slac1, sh } from "../assets/images";

import {
    contact,
    css,

    github,
    html,
    javascript,
    linkedin,
    react,
    tailwindcss,
    //mine
    csp, 
    cplusplus,
    django,
    godot,
    matlab,
    numpy,
    opencv,
    photoshop,
    python,
    tensorflow,
    keras,
    painter,
    kidney,
    analysis,
    nut,
    data,
    orange

} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Programming & Development",
    },
    {
        imageUrl: opencv,
        name: "OpenCV",
        type: "Machine Learning & Computer Vision",
    },

    {
        imageUrl: numpy,
        name: "Numpy",
        type: "Data Science & Analysis",
    },

    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Machine Learning & Computer Vision",
    },
    {
        imageUrl: keras,
        name: "Keras",
        type: "Machine Learning & Computer Vision",
    },



    {
        imageUrl: matlab,
        name: "MATLAB",
        type: "Programming & Development",
    },
    {
        imageUrl: orange,
        name: "Orange",
        type: "Programming & Development",
    },
    {
        imageUrl: godot,
        name: "Godot",
        type: "Programming & Development",
    },


    {
        imageUrl: photoshop,
        name: "Adobe Photoshop",
        type: "Digital Art & Design",
    },
    {
        imageUrl: csp,
        name: "Clip Studio Paint",
        type: "Digital Art & Design",
    },
    {
        imageUrl: cplusplus,
        name: "C++",
        type: "Programming & Development",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },


    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },


    {
        imageUrl: django,
        name: "Django",
        type: "Programming & Development",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },

];



export const experiences = [

    {
        title: "Teacher Assistant - Basics Of Data Mining",
        company_name: "Islamic Azad University, Science and Research Branch",
        icon: IAU,
        iconBg: "#99E1E5",
        date: "October 2023 - January 2024",
        points: [
            "Guided students as a Teacher Assistant (TA) for the 'Data Mining' course, teaching Orange data mining basics",
            "Led a project as a Research Assistant, supervised by Dr. Farsad Zamani Boroujeni, focusing on improving classification models for healthy and diabetic Indian women with the 'PIMA' dataset",
            "Demonstrated Orange's functions and practical uses with exercises using the 'PIMA' dataset",
            "Conducted extensive data preprocessing in 'Orange' and implemented a fuzzy system in MATLAB",
        ],
    },
    {
        title: "Research Intern - Cognitive Science Collaboration Analysis",
        company_name: "Stanford Linear Accelerator Center National Laboratory",
        icon: slac1,
        iconBg: "#C00000",
        date: "Summer 2023",
        location: "Menlo Park, CA, USA",
        points: [
            "Analyzed publicly available data on scientific papers in the field of cognitive science to identify collaboration patterns and prominent researchers.",
            "Leveraged Python libraries like NetworkX and spaCy for data acquisition, cleaning, network analysis, and basic NLP.",
            "Developed a network representation of authors based on co-authorship connections, identifying key researchers and research clusters within the field.",
            "Created static visualizations of the network using matplotlib, with potential for future exploration involving interactive visualizations with Gephi.",
        ],
    },
    {
        title: "Teacher Assistant - Software Test",
        company_name: "Islamic Azad University, Science and Research Branch",
        icon: IAU,
        iconBg: "#fbc3bc",
        date: "October 2023 - December 2023",
        points: [
            "Supported over fifty students as a Teaching Assistant during the Software Test course",
            "Assisted with exercises, addressed student queries, and supervised homework assignments",
            "Organized and managed student presentations, selected relevant topics, and submitted regular progress reports to Dr. Javad Mohammadzadeh",
            "Developed a strong sense of responsibility and dedication to ensuring the academic success of each student despite the challenges posed by the large class size",
        ],
    },
 

    {
        title: "Research Assistant - HCI Project: Streamlining User Interaction",
        company_name: "Islamic Azad University, Science and Research Branch",
        icon: IAU,
        iconBg: "#BCE29E",
        date: "October 2023 - December 2023",
        points: [
            "Collaborated with Dr. Farhad Rad on an HCI project, integrating a virtual keyboard and a virtual painter into the same interface. Implemented a switch for users to seamlessly transition between the keyboard and painter functionalities.",
            "Developed a program using MediaPipe and OpenCV to improve hand sign recognition, thereby enabling seamless command execution and enhancing the virtual painter feature. Furthermore, Enhanced virtual keyboard functionality across applications with the PyInput Python library.",
            "Gained proficiency in HCI principles and advanced technical skills in computer vision.",
        ],
    },
    {
        title: "Embedded Systems Internship",
        company_name: "Digital Electronic",
        icon: digielec,
        iconBg: "#99E1E5",
        date: "October 2022 - February 2023",
        points: [
            "Completed an internship at Digital Electronic, focusing on control systems and gaining proficiency in electronic component knowledge and basics of PCB design. Also participated in 'The 22nd Iran International Electricity Exhibition'.",
            "Utilized MATLAB Simulink Toolbox and Control System Toolbox extensively for modeling and analysis tasks.",
            "Developed schematic diagrams in Altium Designer, conducted SPICE simulations in Proteus, and implemented control system simulations in MATLAB.",
        ],
    },
    {
        title: "Computer Programming Educator",
        company_name: "Namavaran High School",
        icon: highschool,
        iconBg: "#fbc3bc",
        date: "September 2021 - July 2022",
        points: [
            "Taught Python programming to a class of 25 students, with 80% achieving a passing grade on the final exam",
            "Developed individualized learning methods for 5 struggling students, resulting in a 20% increase in their test scores",
            "Collaborated with colleagues to enhance teaching effectiveness resulting in a 10% increase in course enrolment",
        ],
    },
    {
        title: "English Language Tutor",
        company_name: "Pars Language School",
        icon: pars,
        iconBg: "#BCE29E",
        date: "October 2021 - June 2022",
        points: [
            "Used innovative teaching methods to engage students increasing completion rates for assigned tasks by 15%",
            "Encouraged active participation through interactive learning",
            "Created a dynamic and engaging learning atmosphere by fostering English conversations among students",
        ],
    },
];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shojaim',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shojaim',
    }
];




export const projects = [
    {
        iconUrl: analysis, 
        theme: 'btn-back-green', 
        name: 'Cognitive Science Paper Pattern Analysis',
        description: 'Analyzed publicly available data on scientific papers in the field of cognitive science to identify collaboration patterns, prominent researchers, and emerging research trends. Utilized tools like requests or wget for data acquisition, OpenRefine for data cleaning, and Python libraries like NetworkX for network analysis. Created a network representation of authors based on co-authorship connections and utilized basic NLP techniques with spaCy to explore keywords associated with papers by prominent authors or within highly connected clusters. Generated static visualizations of the network using matplotlib, with potential for future exploration involving interactive visualizations with Gephi.',
        link: 'https://link-to-cognitive-science-project', 
    },
    {
        iconUrl: painter, 
        theme: 'btn-back-blue', 
        name: 'Virtual Painter and Virtual Keyboard Integration',
        description: 'Collaborated on an HCI project aimed at integrating a virtual keyboard and a virtual painter into a unified interface. Implemented a seamless switch for users to transition between keyboard and painter functionalities, enhancing user experience. Developed a program using MediaPipe and OpenCV to improve hand sign recognition, facilitating seamless command execution and enhancing the virtual painter feature. Additionally, increased the keyboard functionality across various programs using the PyInput Python library, resulting in improved typing speed and efficiency. This project served as my bachelor thesis, demonstrating proficiency in HCI principles and advanced technical skills in computer vision.',
        link: 'https://link-to-virtual-painter-project', 
    },

    {
        iconUrl: kidney,
        theme: 'btn-back-red', 
        name: 'Enhancing Segmentation of DMSA Kidney Scans',
        description: 'This project focused on improving the segmentation of DMSA kidney scans through a comprehensive approach. It began with preprocessing steps, including the conversion of DICOM files to JPG format, normalization of pixel arrays, and noise reduction using Gaussian blur filters. Mean thresholding techniques were then applied, along with adaptive thresholding for the anterior image. Following segmentation, uptake percentages were calculated by analyzing foreground pixels in the segmented kidney regions.',
        link: 'https://link-to-dmsa-segmentation-project', 
    },
    {
        iconUrl: data, 
        theme: 'btn-back-pink', 
        name: 'Pima Indian Diabetes Dataset Classification and Fuzzification Project',
        description: 'Preprocessed the Pima Indian Diabetes Dataset using Orange data mining software, removed missing values, outliers, and experimented with the test and train data. Utilized GAN to generate more data to improve the classification rate and accuracy in predicting test data. Implemented a rule-based fuzzy Mamdani system on the same Pima dataset by converting crisp values to fuzzy values to regulate the degree of membership, allowing measurement of uncertainty.',
        link: 'https://link-to-fuzzy-mamdani-project', 
    },
    {
        iconUrl: sh,
        theme: 'btn-back-blue',
        name: '3D Portfolio Website',
        description: 'Immerse yourself in a stunning stronghold with this interactive 3D portfolio website. Built using React and Three.js, users can explore the intricate architecture from the perspective of an airship. With playable audio on the homepage, the experience is further enhanced, offering a truly immersive journey through beautiful scenery.',
        link: 'https://github.com/YourGitHubUsername/3d-portfolio-website',
    },
    {
        iconUrl: nut, 
        theme: 'btn-back-yellow', 
        name: 'Nutshell Website using Django Framework',
        description: 'Developed a website for a nut shop named Nutshell using the Django framework.',
        link: 'https://link-to-nutshell-website-project', 
    }
];

