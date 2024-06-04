export interface SearchResults {
    id: number
    title: string
    url: string
    type: string
    subtype: string
  }
  
  export interface Children {
    children: React.ReactNode
  }
  
  export interface GraphQLResponse<T = any> {
    data?: T
    errors?: Array<{message: string}>
  }
  
  export interface Menu {
    menuItems: {
      edges: [
        {
          node: {
            uri: string
            label: string
            databaseId: string
          }
        }
      ]
    }
  }

export interface Post {
    modified: string
    slug: string
    title: string
    featuredImage: FeaturedImage
    postId: string
    databaseId: string
}