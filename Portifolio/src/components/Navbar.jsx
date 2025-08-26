import { motion } from 'framer-motion'

export const Navbar = () => {
    return (

        <motion.nav 
            className='navbar' 
            initial={{ y:-100 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
        > 
        
            <motion.div
                className='logo' 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Portifólio
            </motion.div>

            <motion.ul 
                className='nav-links'
                animate ={{ transition: { staggerChildren: 0.1 } }}
            
            >
                <motion.li 
                    initial ={{ opacity: 0, y: 20 }}
                    animate ={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <a>Home</a>
                </motion.li>

                <motion.li 
                    initial ={{ opacity: 0, y: 20 }}
                    animate ={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <a>About</a>
                </motion.li>

                <motion.li 
                    initial ={{ opacity: 0, y: 20 }}
                    animate ={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <a>Projects</a>
                </motion.li>

                <motion.li 
                    initial ={{ opacity: 0, y: 20 }}
                    animate ={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <a>Contact</a>
                </motion.li>
            </motion.ul>
        </motion.nav>
        
    ); 
};