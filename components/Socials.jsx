import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
    {
        icon: <FaGithub/>,
        path: 'https://github.com/rakshita1309'
    },
    {
        icon: <FaLinkedinIn/>,
        path: 'https://www.linkedin.com/in/rakshita-mohan-1b7a80318/'
    }
];

function Socials ({containerStyles, iconStyles}) {
    return(
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    );
}

export default Socials;