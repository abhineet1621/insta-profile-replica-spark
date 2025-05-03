
import React from 'react';
import PostCard from './PostCard';

export interface Post {
  id: string;
  imageUrl: string;
  likes: number;
  comments: number;
  isVideo?: boolean;
  hasMultiple?: boolean;
}

interface PhotoGridProps {
  posts: Post[];
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PhotoGrid;
