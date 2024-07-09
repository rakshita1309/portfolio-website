'use client';
import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

function PageTransition ({childern}) {
    const pathname = usePathname();
    return(
        <AnimatePresence>
            <div className="text-white" key={pathname}>
                <motion.div
                initial={{ opacity:1 }}
                animate={{
                    opacity: 0,
                    transition: {delay: 0.25, duration:0.4, ease: 'easeInOut'}
                }}
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {childern}
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;