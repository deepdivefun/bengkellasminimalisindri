import React from 'react';

interface Post {
  id: string;
  title: string;
}

interface Edge {
  node: Post;
}

interface PostsData {
  posts: {
    edges: Edge[];
  };
}

interface Props {
  loading: boolean;
  data?: PostsData;
}

const PostsComponent: React.FC<Props> = ({ loading, data }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || !data.posts || data.posts.edges.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.posts.edges.map((edge) => (
          <li key={edge.node.id}>{edge.node.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
