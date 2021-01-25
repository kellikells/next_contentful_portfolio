import Link from 'next/link';

const Navbar = () => (
    <div className='flex flex-row justify-between p-4'>

        <div className='ml-2'>
            <div className='Logo'><Link href='/'><a>K. Uyeda</a></Link></div>
        </div>

        <ul className='flex flex-row mr-2 space-x-10'>

            <li className='NavbarLink'><Link href='/projects'><a>Projects</a></Link></li>

            <li className='NavbarLink'><Link  href='/contact'><a>Contact</a></Link></li>

            <li className='NavbarLink'><Link href='/Resume.pdf' ><a target='_blank' >Resume</a></Link></li>

        </ul>

    </div>
);

export default Navbar;