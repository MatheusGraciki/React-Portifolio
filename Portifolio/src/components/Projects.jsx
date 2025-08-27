import { motion } from "framer-motion";

const fadeInUp = {
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
};

export const Projects = () => {
    return (
        <motion.section
        id="projects"
        className="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            My Projects
        </motion.h2>
        <motion.div
            className="project-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
            <motion.div
                className="project-image"
                style={{ backgroundImage: "url('/projects/1.png')" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                cursor = 'pointer'
            />
            <a></a>
            <h3> Game E-commerce 🎮</h3>
            <p>
                A modern e-commerce platform for digital games built with React, 
                featuring responsive design, state management for cart functionality, and a focus on clean code and user experience
            </p>
            <div className="project-tech">
                <span>React</span>
            </div>
            </motion.div>

            <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
            <motion.div
                className="project-image"
                style={{
                backgroundImage: "url('/projects/2.png')",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            />
            <h3>Donation Manager</h3>
            <p>
                A full stack donation management app built with Node.js (Express) and 
                React (Material UI), featuring a REST API with CRUD operations and a responsive 
                frontend for creating, updating, and tracking donations.
            </p>
            <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
            </div>
            </motion.div>

            <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
            <motion.div
                className="project-image"
                style={{
                backgroundImage: "url('/projects/comingsoon.jpg')",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            />
            <h3>Productivity Timer</h3>
            <p>
                A sleek productivity timer application with customizable work
                sessions, statistics tracking, and dark mode support.
            </p>
            <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>TailwindCSS</span>
            </div>
            </motion.div>
        </motion.div>
        </motion.section>
    );
};