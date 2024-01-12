import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const projects = [
      {
        title: 'React Reserve',
        subtitle: 'MERN Stack',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-1.gif',
        link: 'https://reactbootcamp.com',
      },
      {
        title: 'React Tracks',
        subtitle: 'React and Python',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-2.gif',
        link: 'https://reedbarger.com',
      },
      {
        title: 'DevChat',
        subtitle: 'React and Firebase',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-3.gif',
        link: 'https://jsbootcamp.com',
      },
      {
        title: 'Epic Todo App',
        subtitle: 'React Hooks',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-4.gif',
        link: 'https://pythonbootcamp.com',
      },
    ]

    const renderPortfolio = (portfolio) => {
        return (
          <section
            id="portfolio"
            className="portfolio-page"
          >
            <div className="title-cont">
              <div className="title">
                <p className="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo facilis repellat ab cupiditate alias vero aliquid
                  obcaecati quisquam fuga dolore.
                </p>
              </div>

              <div className="project-cont">
                {projects.map((project) => (
                  <a
                    href={project.link}
                    key={project.image}
                    className="link"
                  >
                    <div className="image-cont">
                      <img
                        alt="gallery"
                        className="image"
                        src={project.image}
                      />
                      <div className="title-cont">
                        <h2 className="title">
                          {project.subtitle}
                        </h2>
                        <h1 className="subtitle">
                          {project.title}
                        </h1>
                        <p className="description">{project.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
          )
          // <div className="images-container">
          //     {
          //         portfolio.map((port, idx) => {
          //             return (
          //                 <div className="image-box" key={idx}>
          //                     <img
          //                     src={port.image}
          //                     className="portfolio-image"
          //                     alt="portfolio" />
          //                     <div className="content">
          //                         <p className="title">{port.name}</p>
          //                         <h4 className="description">{port.description}</h4>
          //                         <button
          //                             className="btn"
          //                             onClick={() => window.open(port.url)}
          //                         >View</button>
          //                     </div>
          //                 </div>
          //             )
          //         })
          //     }
          // </div>
        }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;