import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

  export  const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              from
              id
              createdAt
              slug
              title
              localizations(locales: pt_BR){
                title
                shortDescription
                content{
                  raw
                }
              }
              exerpt
              source
              featuredImage {
                url
              }
              categories {
                name
                slug
                localizations(locales: pt_BR){
                  name
                }
              }
              content{
                raw
              }
              shortDescription
            }
          }
        }
      }
    `;
    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
  }
  export const getReviews = async () =>{
    const query = gql`
    query MyQuery {
      reviews {
        createdAt
        date
        id
        name
        picture {
          url
        }
        review
        localizations(locales: pt_BR) {
          review
        }
        location
      }
    }    
    `
    const result = await request(graphqlAPI, query);
    return result.reviews
  }
  
  export const getPostDetails = async (slug) => {
    const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          exerpt
          featuredImage {
            url
          }
          createdAt
          slug
          content {
            raw
          }
          from
          categories {
            name
            slug
            localizations(locales: pt_BR){
              name
            }
          }
          localizations(locales: pt_BR){
            title
            shortDescription
            content{
              raw
            }
          }
          shortDescription
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.post;
  };
