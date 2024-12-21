
import { motion } from "motion/react"

interface ICount {
    count: number;
}

export default function About({ count }: ICount) {
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }}>About</motion.h1>
            <p>{count}</p>
        </motion.div>
    );
}