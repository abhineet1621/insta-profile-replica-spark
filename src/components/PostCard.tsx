
import React from 'react';
import { Heart, MessageCircle, Play } from 'lucide-react';
import type { Post } from './PhotoGrid';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="relative aspect-square group cursor-pointer">
      <img 
        src={post.imageUrl} 
        alt="Post" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay that shows on hover with like & comment count */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
        <div className="flex items-center gap-4 text-white">
          <div className="flex items-center gap-1">
            <Heart className="w-5 h-5 fill-white" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
      
      {/* Indicator for video or multiple posts */}
      {(post.isVideo || post.hasMultiple) && (
        <div className="absolute top-2 right-2 text-white">
          {post.isVideo && <Play className="w-4 h-4" />}
          {post.hasMultiple && (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default PostCard;
