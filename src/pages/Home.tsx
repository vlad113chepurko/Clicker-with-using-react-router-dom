
import { motion } from "motion/react"

interface HomeProps {
    count: number;
    handleClick: () => void;
}

export default function Home({ count, handleClick }: HomeProps) {

    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}}>
            <motion.h1 initial={{scale: 0}} animate={{scale: 1}}>Home</motion.h1>
            <p>{count}</p>

            <motion.button 
            initial={{scale: 0}} 
            animate={{scale: 0.9}}  
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={handleClick}>Click</motion.button>
        </motion.div>
    );
}