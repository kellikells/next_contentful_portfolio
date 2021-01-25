import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <>
        <Head>
            <title>K.Uyeda Web Developer Portfolio</title>
        </Head>

        {/* <body className='bg-gray-100'> */}
            {/* <body> */}
            <div className='container mx-auto flex flex-col min-h-screen'>

                <header className='border-b-2 border-solid border-opacity-25 border-orange-600'>
                    <Navbar />
                </header>

                {/* <main className='flex-grow l:w-3/4 md:w-4/5 s:w-full '> */}
                <main>
                    {props.children}
                </main>


            </div>
            <footer>
                <Footer />
            </footer>
        {/* </body> */}
    </>
);

export default Layout;