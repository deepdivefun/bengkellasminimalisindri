// // import {fetchGraphQL} from '@/lib/functions'
// import {Post} from '@/lib/types'

// /**
//  * Fetch all blog posts.
//  */
// export default async function getAllPosts() {
//   const query = `
//   query GetAllPosts {
//     posts(where: {status: PUBLISH, categoryName: "layanan"}) {
//       nodes {
//         commentCount
//         databaseId
//         date
//         modified
//         title
//         slug
//         excerpt(format: RENDERED)
//         featuredImage {
//           node {
//             altText
//             sourceUrl
//             mediaDetails {
//                 height
//                 width
//             }
//           }
//         }
//       }
//     }
//   }
//   `

//   // const response = await fetchGraphQL(query)

//   // return response.data.posts.nodes as Post[]
// }
