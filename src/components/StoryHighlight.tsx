
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface StoryHighlightProps {
  imageUrl: string;
  label: string;
}

const StoryHighlight: React.FC<StoryHighlightProps> = ({ imageUrl, label }) => {
  return (
    <div className="story-highlight flex flex-col items-center">
      <div className="story-highlight-image w-16 h-16 rounded-full border-2 border-gray-200 p-0.5 mb-1">
        <div className="story-highlight-image-inner w-full h-full rounded-full overflow-hidden">
          <Avatar className="w-full h-full">
            <AvatarImage src={imageUrl} alt={label} />
            <AvatarFallback>{label.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs mt-1 truncate max-w-16">{label}</span>
    </div>
  );
};

export default StoryHighlight;
