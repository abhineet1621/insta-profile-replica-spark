
import React from 'react';
import { Avatar } from '@/components/ui/avatar';

interface StoryHighlightProps {
  imageUrl: string;
  label: string;
}

const StoryHighlight: React.FC<StoryHighlightProps> = ({ imageUrl, label }) => {
  return (
    <div className="story-highlight">
      <div className="story-highlight-image">
        <div className="story-highlight-image-inner">
          <Avatar className="w-full h-full">
            <Avatar.Image src={imageUrl} alt={label} />
            <Avatar.Fallback>{label.substring(0, 2).toUpperCase()}</Avatar.Fallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs mt-1 truncate max-w-16">{label}</span>
    </div>
  );
};

export default StoryHighlight;
