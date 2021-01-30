const Footer = () => (


    <div className='flex justify-center gap-8 py-3 border-gray-500'>

        {/* linkedin  */}
        <div className='Contact-Icon Contact-Icon-linkedin'>
            <a href='https://www.linkedin.com/in/kelli-uyeda/' target='_blank'>
                <img src='/linkedin.svg' alt='linkedin' />
            </a>
        </div>

        {/* gmail */}
        <div className='Contact-Icon Contact-Icon-gmail'>
            <a href='mailto: kellikells@gmail.com' target='_blank'>
                <img src='/gmail.svg' alt='gmail' />
            </a>
        </div>

        {/* github */}
        <div className='Contact-Icon Contact-Icon-github'>
            <a href='https://github.com/kellikells' target='_blank'>
                <img src='/github.svg' alt='github' />
            </a>
        </div>



    </div>
);

export default Footer;

