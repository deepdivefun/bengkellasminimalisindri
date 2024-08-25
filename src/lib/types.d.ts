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

interface Page {
  databaseId: number
  date: string
  modified: string
  content: string
  title: string
  featuredImage?: FeaturedImage
  author?: Author
  seo?: Seo
}

interface FeaturedImage {
  node: {
    altText: string
    sourceUrl
    mediaDetails: {
      height: number
      width: number
    }
  }
}

interface Author {
  node: {
    name: string
    avatar: {
      url: string
    }
  }
}

interface Seo {
  metaDesc: string
  title: string
}

export interface Post {
  author: {
    node: {
      name: string
      avatar: {
        url: string
      }
    }
  }
  databaseId: string
  date: string
  modified: string
  modified: string
  slug: string
  title: string
  excerpt: string
  content: string
  commentCount: number
  categories: {
    nodes: [
      {
        databaseId: string
        name: string
      }
    ]
  }
  tags: {
    nodes: [
      {
        databaseId: string
        name: string
      }
    ]
  }
  featuredImage: FeaturedImage
  seo: {
    metaDesc: string
    title: string
  }
  comments: {
    nodes: [
      {
        databaseId: string
        content: string
        date: string
        status: string
        author: {
          node: {
            avatar: {
              url: string
            }
            email: string
            name: string
            url: string
          }
        }
      }
    ]
  }
}
