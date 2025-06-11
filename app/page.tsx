import Image from "next/image";
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
  }
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
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Patrick Jasper
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Mechanical Engineering Student
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Passionate about robotics, automation, and manufacturing. 
              Experienced in mechanical design and eager to apply engineering principles to real-world challenges.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="mailto:pjaspe2@lsu.edu"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Projects
              </a>
              <a
                href="/drawings"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Drawings
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
              <Image
                src="/ProfilePhoto.jpeg"
                alt="Patrick Jasper"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{edu.degree}</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">{edu.school}</p>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
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
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{category.category}</h3>
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
      <section id="projects" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Patrick Jasper. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
