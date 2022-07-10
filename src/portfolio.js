import aboutpic from "./components/Access/mephoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'Portfolio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'BELLAPU NARENDRA',
  role: 'Software Engineer',
  description:
  'I am an enthusiastic fresher with complete knowledge and Understanding of Software Development and highly inspiring leadership skills. I am always ready to learn and enhance my skills in the IT Corporate flourishing my talent and to harness it in the best possible way has always been a sort of whim for me. I have a specialization in the field of Data Science andexpertise in Data Analysis.',
  resume: "",
  social: {
    linkedin: 'https://www.linkedin.com/in/narendra-bellapu-962002193/',
    WhatsApp: 'https://wa.me/918688775460?text=Hello narendra',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Analysis and Visualization of Indian Candidates forGeneral Election 2019 (11/2021 - 12/2021)',
    description:
      'Built a Dashboard using MS Excel for candidates who contested the 2019 Lok Sabha Elections.',
    stack: ['MS Excel'],
    
  },
  {
    name: 'Banking Application using Python (10/2019 - 11/2019)',
    description:
      'Built an interactive Banking application using Graphical User Interface in Python, it provides the details of withdraw, deposit and current balance.',
    stack: ['Python'],
    
  },
  {
    name: 'Sports Tickets Booking Website (08/2019 - 09/2019)',
    description:
      'Created a website using basics of HTML, CSS and JavaScript.',
    stack: ['html-css-javascript'],
    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Material UI',
  'Python',
  'SQL',
  'MS Excel',
  'Tableau',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'narendrabellapu75@gmail.com',
}

export { header, about, projects, skills, contact }
