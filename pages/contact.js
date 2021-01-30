import Layout from '../components/Layout';
import Image from 'next/image';

const query = `
{
    projectCollection {
        items {
            myPicture{
                url
            }
        }
    }
}`


function Contact({ contentfulData }) {

    const myPic = contentfulData.data.projectCollection.items[0];

    return (
        <Layout>
            <div className='mx-auto mt-8 sm:mt-16'>

                <div className='page-header f-raleway'>CONTACT </div>
                <div className='myUnderline'></div>

                <div className='my-grid-contact'>

                    {/* left col (unless mobile) */}
                    <div className='md:justify-items-end'>
                        <Image
                            // src='/avatar.jpg'
                            src={myPic.myPicture.url}
                            alt='me'
                            width={150}
                            height={150} />
                    </div>

                    {/* -------------------------------------- */}
                    {/* right side (unless mobile)*/}
                    <table >


                        {/* gmail */}
                        <tr className='Contact-links'>
                            <a href='mailto: kellikells@gmail.com' target='_blank'>
                                <td className='pr-4'><img src='/gmail-icon.png
                                ' alt='gmail' /></td>
                                <td>kellikells@gmail.com</td>
                            </a>
                        </tr>

                        {/* linkedin */}
                        <tr className='Contact-links'>
                            <a href='https://www.linkedin.com/in/kelli-uyeda/' target='_blank'>
                                <td className='pr-4'><img src='/linkedin-icon.png
                                ' alt='linkedin' /></td>
                                <td>linkedin.com/in/kelli-uyeda</td>
                            </a>
                        </tr>


                        {/* github */}
                        <tr className='Contact-links'>

                            <a href='https://github.com/kellikells' target='_blank'>
                                <td className='pr-4'><img src='/github-icon.png
                                ' alt='github' /></td>
                                <td>github.com/kellikells</td>
                            </a>
                        </tr>


                        {/* <div className='contact-links'>
                            <div>Email Address</div>
                     

                            <a href='mailto: kellikells@gmail.com' target='_blank'>kellikells@gmail.com</a>
                        </div>

                      
                        <div className='contact-links'>
                            <div>Linkedin</div>
                            <a href='https://www.linkedin.com/in/kelli-uyeda/' target='_blank'>linkedin.com/in/kelli-uyeda</a>
                        </div>

                        <div className='contact-links'>
                            <div>GitHub</div>
                            <a href='https://github.com/kellikells' target='_blank'>github.com/kellikells</a>
                        </div> */}

                    </table>
                </div>
            </div>
        </Layout>

    );
}


// get data from contentful 
export async function getStaticProps() {
    const SPACE = process.env.NEXT_PUBLIC_SPACE;
    const url = 'https://graphql.contentful.com/content/v1/spaces/' + SPACE + '/';
    const AUTH = process.env.NEXT_PUBLIC_AUTHORIZATION;
    var bearer = 'Bearer ' + AUTH;
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: bearer,
        },
        body: JSON.stringify({ query }),
    })
    const contentfulData = await res.json();
    return {
        props: {
            contentfulData,
        }
    }
}

export default Contact;