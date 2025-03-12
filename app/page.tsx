import Image from "next/image";
import Navigation from './components/Navigation';
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const skills = [
  {
    category: "Manufacturing processes",
    items: ["CNC machining", "3D printing", "Welding", "Lathe/Mill"]
  },
  {
    category: "Software",
    items: ["CAD/CAM", "Slicing Software", "Node.js"]
  },
  {
    category: "Tools & Technologies",
    items: ["Arduino", "Raspberry Pi", "ESP32", "AWS"]
  }
];

const projects = [
  {
    title: "Greenhouse Automation",
    description: "I designed a greenhouse automation system using a Raspberry Pi and a series of sensors to control the greenhouse environment. The system uses a Python script to read the sensor data and maintain an optimal moisture level by operating a pump, removing much of the manual labor required to maintain a healthy plant.",
    technologies: ["Python", "Raspberry Pi", "MongoDB"],
    link: "#"
  },
  {
    title: "Landslhyde Battle Robot",
    description: "Working in a team of 6, we designed and manufactured a 90lb robot to compete in a regional battlebots tournament. We designed the frame around a pneumatic flipper arm, and used an RC airplane controller to drive the wheels. I led the welding/manufacturing team, and we used 1/8 inch as well as 1/16 inch steel, greatly improving my welding skills. The process of manufacturing lends itself well to the design process since the entire thing is easier if you are more informed from the get go. The team took first place despite having no seniors amongst us.",
    technologies: ["Welding", "Mill/Lathe", "3D Printing", "Laser Cutting", "CNC Machining", "Pneumatics", "Electronics"],
    link: "https://youtu.be/0E4q2pT0HFI?si=UigM3MhOnCWwqY4l"
  },
  {
    title: "MATE ROV underwater robot",
    description: "Led the design team of a group of 5 students working to plan a MATE ROV build to perform in the mapping division of the competition. I was responsible for designing the frame of the ROV, as well as the control system, and all 3D modeling.",
    technologies: ["CAD", "Teamwork", "Presentation/Defense of work", "Tech Memos and weekly documentation"],
    link: "*"
  },
  
];

const experiences = [
  {
    title: "Undergrad Researcher",
    company: "iCore Lab at LSU",
    period: "2025 - Present",
    description: [
      "Designed and assembled a test bench for recording audio of underwater thrusters to be used on an ROV.",
      "Used FFTs to analyze the frequency content of the audio and the effect on the aquatic life, as well as the relationship between the frequency and possible mechanical issues with the motors."
    ]
  },
  {
    title: "Team Member",
    company: "LSU Bengal Robotics",
    period: "2025-Present",
    description: [
      "Helped with design and 3D printing of boat hull to be entered in an aquatic robotics competition.",
      "Buoyancy and weight analysis of the hull to ensure it would float and not sink even with a payload.",
    ]
  }
];

const education = [
  {
    degree: "B.S. in Mechanical Engineering",
    school: "Louisiana State University",
    location: "Baton Rouge, LA",
    period: "2021-2026",
    details: [
      "Major/Specialization",
      "Assistive Robotics, Materials Science, Machine Design, Manufacturing Processes, Fluid Mechanics, Thermodynamics, Control Systems, and more.",
      "3.0 GPA"
    ]
  },
  // You can add more education entries here
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navigation />
      
      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">[Patrick Jasper]</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            [Your Professional Title]
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            [A brief one-line introduction about yourself]
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                [Your detailed professional summary. What drives you? What's your background? 
                What are you passionate about in your field?]
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                [Additional paragraph about your professional journey, goals, or what makes you unique]
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="space-y-2">
                <p className="font-medium">[Degree Name]</p>
                <p className="text-gray-600 dark:text-gray-300">[University Name]</p>
                <p className="text-gray-500">[Year of Graduation]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{edu.degree}</h3>
                    <p className="text-lg font-medium">{edu.school}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.location}</p>
                  </div>
                  <span className="text-gray-500">{edu.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 