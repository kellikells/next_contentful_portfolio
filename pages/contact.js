import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => (
    // <div className='min-h-screen'>
    <Layout>
        <div className='mx-auto mt-16'>

            <div className='page-header f-raleway'>CONTACT </div>
            <div className='myUnderline'></div>

            <div className='my-grid-contact'>

                {/* left side  */}
                <div className='md:justify-items-end'>
                    <Image
                        src='/avatar.jpg'
                        alt='me'
                        width={150}
                        height={150} />
                </div>


                {/* right side */}
                <div className='text-center text-lg  '>

                    <div className='uppercase ' >
                            KelliKells@gmail.com 
                    </div>

                    {/* linkedin  */}
                    <div className='FooterLink FooterLink--linkedin'>
                        <a href='https://www.linkedin.com/in/kelli-uyeda/' target='_blank'>
                            <img src='/linkedin.svg' alt='linkedin' />
                        </a>
                    </div>

                    {/* gmail */}
                    <div className='FooterLink FooterLink--gmail'>
                        <a href='mailto: kellikells@gmail.com' target='_blank'>
                            <img src='/gmail.svg' alt='gmail' />
                        </a>
                    </div>

                    {/* github */}
                    <div className='FooterLink FooterLink--github'>
                        <a href='https://github.com/kellikells' target='_blank'>
                            <img src='/github.svg' alt='github' />
                        </a>
                    </div>


                    <div >
                        <a href='mailto: KelliKells@gmail.com'>Default Mail Program</a><img className='inline-block mb-2 ml-2 w-4' src='/mail.svg' alt='copy' />
                    </div>

                </div>







            </div>
        </div>
    </Layout>
);

export default Contact;