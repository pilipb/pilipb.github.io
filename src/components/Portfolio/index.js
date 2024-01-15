import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { projects } from './data/projects';

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

    

    const renderPortfolio = (portfolio) => {
        return (
          <section id="portfolio" className="portfolio-page">
            <div className="title-cont">
              <div className="title">
                <p className="start-description">
                  During my studies I have worked on a number of projects both
                  in university and in my spare time. Below are some of my
                  favourite projects. They vary from software to design and
                  manufacturing.
                </p>
              </div>

              <div className="project-cont">
                {projects.map((project) => (
                  <a href={project.link} key={project.image} className="link">
                    <div className="title-cont">
                      <h1 className="subtitle">{project.title}</h1>
                      <h2 className="title">{project.subtitle}</h2>
                      <p className="description">{project.description}</p>
                    </div>

                    <div className="image-cont">
                      <img
                        alt="gallery"
                        className="image"
                        src={project.image}
                      />
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