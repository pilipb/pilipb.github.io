import img1 from '../data/combined.png'
import img2 from '../data/optimisation.png'
import pontoon from '../data/pontoon_debris.png'
// import img3 from '../data/plot.jpeg'
import draw_gif from '../data/draw.gif'
import forest from '../data/bio.png'
import micro from '../data/micro.gif'
import paper from '../data/paper2.png'

export const projects = [
  {
    title: 'Canopy Guide',
    subtitle: 'A tool for sustainable forestry road planning',
    description:
      'Canopy Guide is a tool that uses a combination of deep learning, bio-inspired ai and satellite imagery to optimise the location of forest roads to minimise the impact on the environemnt. This project acts as a proof of concept for the use of AI in sustainable forestry planning.',
    image: forest,
    link: 'https://github.com/pilipb/BioAI'
  },
  {
    title: 'The Design and Modelling of a Pico-Hydro System',
    subtitle: 'Masters Thesis',
    description:
      'The aim of this project was to design a pico-hydro turbine for a rural off-grid communities. I conducted modelling that validated the design through flow modelling, power modelling and long-term time series forecasting. See the repo for more details.',
  
    image: pontoon,
    link: 'https://github.com/pilipb/DP5-code'
  },
  {
    title: 'Pen Plotter',
    subtitle: 'Design and software for a CNC pen plotter',
    description:
      'A few years ago I designed a desktop pen plotter that would be large enough to complete A3 drawings, while being easily folded away when not in use. the plotter is powered using an Arduino and runs on GRBL open source CNC software. More recently I have experimented with coding the plotter to draw images using Python. See this repository for more examples.',
    image: img1,
    link: 'https://github.com/pilipb/plotter_code',
  },
  {
    title: 'Signatures',
    subtitle: 'Computer vision with Python',
    description:
      'This repository allows you to quickly draw using your finger and webcam. The idea is to quickly allow signature of documents while still allowing a handwritten feel. The application uses OpenCV to detect the finger to draw on the screen, the drawing is saved locally for insertion into documents.',
    image: draw_gif,
    link: 'https://github.com/pilipb/Signatures',
  },
  {
    title: 'Transport Modelling',
    subtitle: 'Matlab',
    description:
      'The transport modelling module in my masters built on what I learnt in optimisation and applied it to real world problems on micro and macro scales.',
    // get git from matlab
    image: micro,
    link: 'https://github.com/pilipb/transport_modelling',
  },
  {
    title: 'Optimisation',
    subtitle: 'Matlab Optimisation Toolbox',
    description:
      'As part of the optimisation module in my masters, I developed codes for a variety of optimisation problems. These included linear, integer, non-linear programming and global methods. The codes were developed in Matlab and can be seen at the linked repository.',
    // get gif from matlab
    image: img2,
    link: 'https://github.com/pilipb/Optimisation',
  },

  {
    title: 'Novel Reinforcement Learning Approach',
    subtitle: 'Building a novel reinforcement learning algorithm using genetic algorithm and neural networks',
    description: 'The aim of this collaborative project was to develop a genetic algorithm optimised neural network for deep reinforcement learning. The resulting paper (and attached code repository) demonstrated that this novel approach was able to outperform some of the most popular reinforcement learning algorithms when applied to the OpenAI gym environment using large parallel computing resources. The benefit of this approach was utilising simultaneous training of agents to reduce the number of training episodes required to achieve a high level of performance.',
    image: paper,
    link: 'https://github.com/EMAT31530/group-project-2',
  },
]
