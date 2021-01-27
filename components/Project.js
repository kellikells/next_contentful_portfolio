

import Link from 'next/link';
import Image from 'next/image';

export default function Project(props) {


    return (

        <div className='group project-section'>
            <h1 className='project-title group-hover:opacity-50'>{props.title}</h1>
            <div className='flex'>

                {/* thumbnail image */}
                <div className='group-hover:opacity-50'>
                    <Image
                        // src='/p-ud-1.png'
                        src={props.image}
                        alt='user dashboard'
                        layout='fill'
                        object-fit='fill'
                    />
                </div>

                {/* hidden section */}
                <div className='project-hidden group-hover:opacity-100'>
                    <h1 className='project-title-hidden'>{props.title}</h1>
                    <div className='project-title-myUnderline'></div>



                    {/* skills */}
                    <span className='project-skill-section '>
                        {props.skills}
                    </span>

                    {/* description */}
                    <p className='project-description'>{props.description} </p>

                    {/* links  */}
                    <div className='project-link-section'>

                        {/* <div className='project-link'>
                            <Link href={props.projectLink}><a target='_blank'>View<img className='project-link-icon mr-1' src='/external-link.svg' alt='external-link' /></a></Link>
                        </div> */}
                        <div className='project-link'>
                            <Link href={props.projectLink}><a target='_blank'><img className='project-link-icon mr-2' src='/external-link.svg' alt='external-link' />View</a></Link>
                        </div>

                        <div className='project-link'>
                    


                            <Link href={props.githubLink} ><a target='_blank'><img className='project-link-icon mr-2' src='/github.svg' alt='github' />GitHub</a></Link>
                        </div>

                    </div>

                </div>
            </div>

            {/* hover:zoom effect  */}
            <style jsx>{`
.project-hidden
{
    display:inline-block;
    border:0;
    position: relative;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1); 
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1); 
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1);
    transition: all 200ms ease-in;
    transform: scale(1);   

}
.project-hidden:hover
{
    box-shadow: 0px 0px 150px #000000;
    z-index: 2;
    -webkit-transition: all 200ms ease-in;
    -webkit-transform: scale(1.5);
    -ms-transition: all 200ms ease-in;
    -ms-transform: scale(1.5);   
    -moz-transition: all 200ms ease-in;
    -moz-transform: scale(1.5);
    transition: all 200ms ease-in;
    transform: scale(1.5);
}




`}</style>
        </div>
    )
}