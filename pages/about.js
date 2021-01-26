
const About = () => (

        <div className='px-5 mt-8 sm:mt-16  md:mt-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
                <div className='mb-auto md:space-y-5 md:grid grid-cols-2'>
                        <div>
                                <h1 className='text-8xl '><span>Hi, I'm </span><span className='font-bold '>Kelli.</span></h1>

                                <br />
                          
                                <h3 className='text-3xl tracking-widest font-bold text-gray-600 my-10 md:my-5  lg:text-center text-shadow-lg'>A Full-Stack Web Developer</h3>         
                        </div>

                        <div className='lg:ml-10'>
                                <p className='tracking-wide leading-relaxed f-ubuntu'>
                                 Los Angeles based developer with a passion for creating simple and efficient code. 
                                
                                <br/><br/>I am forever learning & challenging myself with new projects, as a- developer, dog owner, gardener, fisher, and any other way possible.
                                <br /><br />
                              
                                I believe that every problem has an answer, and I enjoy being able to provide the solution.{' '}
                                </p>
                        </div>
                </div>
        </div>
);

export default About;