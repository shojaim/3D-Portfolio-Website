import { VerticalTimeline, VerticalTimelineElement }  from
'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import React from 'react'
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

import Gallery from '../components/Gallery';


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold
        drop-shadow">Shojaei</span>
      </h1>

      <div className="mt-5 flex flex-col gap -3 text-slate-500">
      <p> A Bachelor of Computer Engineering from IAU with a Passion 
      for Harnessing AI and Game Development Expertise 
      to Drive Innovation. My research interests include:</p>
        <ul className="list-disc pl-8 mt-4">
          <li>Machine Learning & Deep Learning</li>
          <li>Artificial Intelligence & Data Science</li>
          <li>Cognitive Science & Computational Modeling</li>
          <li>AI in Gaming and Reinforcement Learning</li>
        </ul>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Experience Part */}
      
      <div className="py-16">
        <h3 className="subhead-text"> Experience</h3>
          <div className="mt-5 flex flex-col gap -3 text-slate-500">
          <p> During my Bachelor of Computer Engineering, I actively pursued diverse opportunities
              in teaching, research, and internships. From guiding students as a Teaching Assistant
              to contributing to cutting-edge research projects and gaining industry experience, my
              journey reflects a commitment to academic excellence and practical application.  Below, you'll 
              find a detailed breakdown of my various roles and contributions across
              academia and industry. </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div className="flex justify-center items-center
                  w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>}
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins
                    font-semibold">
                      {experience.title}
                    </h3>
                    <p className="text-black-500 font-medium font-base"
                    style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1
                      text-sm">
                        {point}
                      </li>

                    ))}


                  </ul>
                </VerticalTimelineElement>



              ))}


            </VerticalTimeline>

          </div>
      </div>


      <hr className="border-slate-200" />

      <CTA />

      <hr className="border-slate-200 mt-10" />

      <h3 className="strong-text mt-5">Wanna Know More About Me?</h3>
      <div className="mt-3 flex flex-col gap -3 text-slate-500">
      <p> Ever since I was a kid, I've been enchanted by the magical worlds of video games. The thrill of exploring vast landscapes, embarking on epic quests, and encountering unforgettable characters ignited a dream within me – the dream of creating my own games.
        Life took me down the path of natural sciences for a while, but there was always this nagging feeling, a deep nostalgia for the pixelated adventures of my youth. Then, one day, I found myself back in front of a screen, controller in hand, and that childhood spark reignited with a fiery passion.
        It wasn't long before I realized that my destiny lay not in test tubes and lab coats, but in the digital realms of game development. So, I made the leap from natural science to computer engineering, eager to dive headfirst into the world of game engines, character design, and digital art.
        But it wasn't just the technical side of game development that captured my heart; it was the stories, the characters, the emotions – all brought to life through the magic of artificial intelligence. Games like Detroit: Become Human and Horizon Zero Dawn opened my eyes to the incredible storytelling potential of AI, weaving narratives that were as compelling as they were immersive.
        Yet, it was the smaller moments in games like Nier and Baldur's Gate 3 that truly stole my breath away. The way NPCs could mirror human emotions, react to player choices, and evolve over time – it was like watching characters come alive before my very eyes.
        Today, my passion lies in exploring the intersection of AI and gaming, inspired by beloved titles like The Legend of Zelda: Tears of the Kingdom, Nier: Automata, and Detroit: Become Human. Each game has left an indelible mark on my journey, shaping the designer I am today and fueling the dreams of the games I'll create tomorrow.</p>

      </div>

      <hr className="border-slate-200 mt-5" />
      <h3 className="strong-text mt-5 mb-5">Wanna See Some of My Designs?</h3>
      <Gallery />

    </section>
  )
}

export default About