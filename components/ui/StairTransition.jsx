'use client';

import { usePathname } from "next/navigation";
import { AnimatePresence, delay, easeInOut } from "framer-motion";

import Stairs from "./stairs";

function StairTransition () {
    const pathname = usePathname();
    return(
        <>
          <AnimatePresence mode="wait">
            <div key={pathname}>
                {/* <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            
                </div> */}
            </div>
          </AnimatePresence>
        </>
      
    );
}

export default StairTransition;