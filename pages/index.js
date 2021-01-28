import Layout from '../components/Layout';
import About from './about';



// GraphiQL query for resume
const query = `
{
    projectCollection {
        items {
            resume {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }  
        }
    }
}
`

function Index({ contentfulData }) {
  const myResume = contentfulData.data.projectCollection.items[0].resume.url;

  return (
    <Layout myResume={myResume}>
      <About />
    </Layout>
  );
};

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

export default Index;