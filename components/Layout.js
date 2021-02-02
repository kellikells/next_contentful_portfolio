import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (
    <>
        <Head>
            <title>K.Uyeda - Web Developer</title>
            <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        </Head>


        <div className='container mx-auto flex flex-col min-h-screen flex-grow sm:w-full xl:w-4/5'>

            <header className='mx-auto w-full border-b-2 border-solid border-opacity-25 border-gray-600'>
                <Navbar />
            </header>

            <main className=''>
                {props.children}
            </main>

        </div>
        <footer>
            <Footer />
        </footer>

    </>
);

export default Layout;
