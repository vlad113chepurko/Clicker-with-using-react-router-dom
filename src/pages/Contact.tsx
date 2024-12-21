
import { motion } from "motion/react"

interface ContactProps {
    count: number;
}

export default function Contact({ count }: ContactProps) {
    return (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }}>Contact</motion.h1>
            <p>{count}</p>
        </motion.div>
    );
}