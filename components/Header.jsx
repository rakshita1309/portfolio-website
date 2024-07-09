import Link from "next/link";
import { Button } from './ui/button';

//components
import Nav from './Nav';
import MobileNav from './MobileNav';

function Header () {
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* {logo} */}
                <Link href='/'>
                <h1 className="text-4xl font-semibold">
                    Rakshita
                    <span className="text-accent">.</span>
                </h1>
                </Link>
                {/* {destop nav} */}
                <div className="hidden xl:flex gap-24">
                    <Nav/>
                    <Link href='/contact'>
                    <Button>Hire me!</Button>
                    </Link>   
                </div>
                {/* mobile nav  */}
                <div className="xl:hidden">
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
}

export default Header;