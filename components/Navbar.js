import Link from 'next/link';

export default function Navbar(props) {
    return (

        <div className='flex flex-row justify-between p-2 sm:p-4'>

            {/* logo for mobile  */}
            <div className='contents sm:hidden'>
                <div className='Logo'><Link href='/'><a>K.U</a></Link></div>
            </div>
            {/* logo for screens larger than mobile  */}
            <div className='hidden sm:ml-2 sm:contents'>
                <div className='Logo'><Link href='/'><a>K.Uyeda</a></Link></div>
            </div>

            <ul className='flex flex-row sm:mr-2 md:space-x-10'>
                <li className='NavbarLink'><Link href='/projects'><a>Projects</a></Link></li>
                <li className='NavbarLink'><Link href='/contact'><a>Contact</a></Link></li>
                {/* <li className='NavbarLink'><a href={props.myResume} target='_blank' >Resume</a></li> */}
                {/* <li className='NavbarLink'><Link href={props.myResume}><a href={props.myResume} target='_blank' >Resume</a></Link></li> */}
                <li className='NavbarLink'><Link href='/Resume.pdf' ><a target='_blank' >Resume</a></Link></li>
            </ul>

        </div>
    );
};

