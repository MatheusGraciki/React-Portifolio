import { motion, stagger } from 'framer-motion';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fadeInUp ={
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const Hero = () => {
    return (
        <motion.section 
        id='home' 
        className='hero'
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        >

            <div className="hero-container">
                <motion.div className='hero-content' variants={ staggerContainer } initial='initial' animate='animate'>
                    <motion.div className='hero-badge'>
                        <span> 👋 Hello, I'm</span>
                    </motion.div>

                    <motion.h1 className='glitch' variants={fadeInUp} whileHover={{scale: 1.02}}>
                        Matheus Graciki
                    </motion.h1>

                    <motion.h2 
                        className='hero-subtitle' 
                        variants={fadeInUp}
                    >
                        {" "}
                        Full-Stack Developer
                    </motion.h2>

                    <motion.p 
                        className='hero-description' 
                        variants={fadeInUp}
                    >
                        I build modern full stack applications using React, Node.js, and TypeScript, 
                        with a focus on clean code and great user experience.
                    </motion.p>

                    <motion.div 
                        className='cta-buttons' 
                        variants={staggerContainer}
                    > 
                        <motion.a 
                            href="#projects" 
                            className='cta-primary' 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {" "}
                            View My Work
                        </motion.a>

                        <motion.a 
                            href="#contacts" 
                            className='cta-secondary' 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}    
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    <motion.div className='social-links' variants={staggerContainer}>
                        <motion.a href='https://github.com/MatheusGraciki' target='_blank'> 
                            <i className="fab fa-github" />
                        </motion.a>

                        <motion.a  href='https://www.linkedin.com/in/matheus-graciki/' target='_blank'> 
                            <i className="fab fa-linkedin" />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div 
                className='hero-code-container'
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="code-display">
                        <SyntaxHighlighter
                        language="typescript"
                        customStyle={{
                            margin: 0,
                            padding: "2rem",
                            height: "100%",
                            borderRadius: "20px",
                            background: "rgba(30, 41, 59, 0.8)",
                            backdropFilter: "blur(10px)",
                            marginBottom: 50,
                        }}
                        style={vscDarkPlus}
                        >
                            {`const aboutMe: DeveloperProfile = {
  codename: "Matheus Graciki",
  origin: "🌍 Joinville, Brazil",
  role: "Fullstack Wizard",
  stack: {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Node/ExpressJs", "TailwindCSS",],
    databases: ["PostgreSQL", "MongoDB", "SQl"],
  },
  traits: [
    "coffee enthusiast",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
    ],
  missionStatement:
        "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}
                        </SyntaxHighlighter>
                    </div>
                    
                </motion.div>    
            </div>
        </motion.section>
    )
};