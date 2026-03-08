import './Banner.css'
import { motion } from 'motion/react';

function Banner() {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'linear' }}
                className='banner'
            >
                <h1 className='full-stack'>&lt;Full-Stack</h1>
                <h1 className='web-developer'>Web Developer /&gt;</h1>
            </motion.div>
        </>
    )
};

export default Banner;