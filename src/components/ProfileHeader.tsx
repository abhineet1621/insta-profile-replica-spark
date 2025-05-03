
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Settings, MoreHorizontal } from 'lucide-react';

interface ProfileStat {
  label: string;
  count: number;
}

interface ProfileHeaderProps {
  username: string;
  fullName: string;
  bio: string;
  avatarUrl: string;
  stats: {
    posts: number;
    followers: number;
    following: number;
  };
  isVerified?: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  username,
  fullName,
  bio,
  avatarUrl,
  stats,
  isVerified = false,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6 px-4 py-6">
      {/* Avatar section */}
      <div className="flex justify-center md:justify-start">
        <Avatar className="w-24 h-24 md:w-36 md:h-36 border-2 border-white">
          <AvatarImage src={avatarUrl} alt={username} />
          <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>

      {/* Profile info section */}
      <div className="flex-1">
        {/* Username and actions row */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-light">{username}</h2>
            {isVerified && (
              <span className="text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm3.78-9.72a.75.75 0 0 0-1.06-1.06L6.75 9.19 5.28 7.72a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l4.5-4.5z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" className="instagram-secondary-button">Message</Button>
            <Button variant="secondary" className="instagram-secondary-button">Follow</Button>
            <Button variant="ghost" size="icon" className="rounded-md">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats row - Mobile View */}
        <div className="flex justify-around border-y border-gray-200 py-3 my-3 md:hidden">
          <div className="profile-stat">
            <span className="profile-stat-count">{stats.posts}</span>
            <span className="profile-stat-label">posts</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-count">{stats.followers.toLocaleString()}</span>
            <span className="profile-stat-label">followers</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-count">{stats.following.toLocaleString()}</span>
            <span className="profile-stat-label">following</span>
          </div>
        </div>

        {/* Stats row - Desktop View */}
        <div className="hidden md:flex gap-8 mb-4">
          <div className="profile-stat">
            <span><strong>{stats.posts}</strong> posts</span>
          </div>
          <div className="profile-stat">
            <span><strong>{stats.followers.toLocaleString()}</strong> followers</span>
          </div>
          <div className="profile-stat">
            <span><strong>{stats.following.toLocaleString()}</strong> following</span>
          </div>
        </div>

        {/* Bio section */}
        <div>
          <h1 className="font-semibold">{fullName}</h1>
          <p className="text-sm whitespace-pre-line">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
