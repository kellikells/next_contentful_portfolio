import Layout from '../components/Layout';
import Project from '../components/Project';

// GraphiQL query
const query = `
{
    projectCollection {
        items {
            title
            pImage {
                title
                description
                fileName
                url
            }
            skills
            description
            githubLink
            projectlink
        }   
    }
}
`
function Projects({ contentfulData }) {
    const projects = contentfulData.data.projectCollection.items;
    {/* {data: {projectCollection: {items: [Array] } } } */ }

    return (

        <Layout>
            <div className='mx-auto mt-16'>

                <div className='page-header f-raleway'>PROJECTS</div>
                <div className='myUnderline'></div>

                {/* ------------------------------------------------ */}
                {/* ------------------------------------------------ */}

                <div className='my-grid xl:grid-cols-3 '>


                    {/* giving /components/Project data from contentful  */}
                    {projects.map(p => (
                        <Project key={p.id} title={p.title} image={p.pImage.url} description={p.description} skills={p.skills} githubLink={p.githubLink} projectLink={p.projectlink} />

                    ))}
                </div>
            </div>
        </Layout>
    );
};


// get data from contentful 
export async function getStaticProps() {
    const SPACE = process.env.NEXT_PUBLIC_SPACE;
    const url = 'https://graphql.contentful.com/content/v1/spaces/' + SPACE + '/';
    const AUTH = process.env.NEXT_PUBLIC_AUTHORIZATION;
    var bearer = 'Bearer ' + AUTH;


    // .fetch(`https://graphql.contentful.com/content/v1/spaces/${space}/`, {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
    
            Authorization: bearer,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
    })
    const contentfulData = await res.json();

    return {
        props: {
            contentfulData,
        }
    }
}

export default Projects;
