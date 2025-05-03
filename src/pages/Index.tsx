
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid, Image, Bookmark, Tag, User } from 'lucide-react';
import ProfileHeader from '../components/ProfileHeader';
import StoryHighlight from '../components/StoryHighlight';
import PhotoGrid from '../components/PhotoGrid';
import type { Post } from '../components/PhotoGrid';

// Sample data
const profileData = {
  username: 'photography_travel',
  fullName: 'Alex Morgan',
  bio: 'Travel Photographer 📸\nExploring the world one photo at a time ✈️\nCollaborations: contact@alexmorgan.com',
  avatarUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format',
  stats: {
    posts: 142,
    followers: 12500,
    following: 568
  },
  isVerified: true
};

const storyHighlights = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=200&auto=format', label: 'Paris' },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1543832923-44667a44c804?q=80&w=200&auto=format', label: 'London' },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=200&auto=format', label: 'Tokyo' },
  { id: '4', imageUrl: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?q=80&w=200&auto=format', label: 'NYC' },
  { id: '5', imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=200&auto=format', label: 'Italy' },
  { id: '6', imageUrl: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14f3?q=80&w=200&auto=format', label: 'Beaches' },
];

const posts: Post[] = [
  { id: '1', imageUrl: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?q=80&w=500&auto=format', likes: 824, comments: 42 },
  { id: '2', imageUrl: 'https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=500&auto=format', likes: 1243, comments: 89, isVideo: true },
  { id: '3', imageUrl: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=500&auto=format', likes: 654, comments: 32 },
  { id: '4', imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=500&auto=format', likes: 932, comments: 56, hasMultiple: true },
  { id: '5', imageUrl: 'https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?q=80&w=500&auto=format', likes: 765, comments: 27 },
  { id: '6', imageUrl: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=500&auto=format', likes: 1100, comments: 64 },
  { id: '7', imageUrl: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=500&auto=format', likes: 543, comments: 21 },
  { id: '8', imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=500&auto=format', likes: 878, comments: 45, isVideo: true },
  { id: '9', imageUrl: 'https://images.unsplash.com/photo-1504567961542-e24d9439a724?q=80&w=500&auto=format', likes: 722, comments: 38, hasMultiple: true },
];

const savedPosts: Post[] = [
  { id: 's1', imageUrl: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?q=80&w=500&auto=format', likes: 432, comments: 22 },
  { id: 's2', imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=500&auto=format', likes: 651, comments: 33 },
  { id: 's3', imageUrl: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=500&auto=format', likes: 245, comments: 18 },
];

const taggedPosts: Post[] = [
  { id: 't1', imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=500&auto=format', likes: 322, comments: 14 },
  { id: 't2', imageUrl: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=500&auto=format', likes: 287, comments: 9 },
];

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      {/* Profile Information */}
      <ProfileHeader {...profileData} />

      {/* Story Highlights */}
      <div className="px-4 py-2 overflow-x-auto">
        <div className="flex gap-4">
          {storyHighlights.map(highlight => (
            <StoryHighlight 
              key={highlight.id} 
              imageUrl={highlight.imageUrl} 
              label={highlight.label} 
            />
          ))}
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="posts" className="mt-6">
        <TabsList className="w-full justify-center border-t border-b h-12">
          <TabsTrigger value="posts" className="flex-1 data-[state=active]:border-t data-[state=active]:border-t-black data-[state=active]:rounded-none data-[state=active]:shadow-none">
            <Grid className="w-4 h-4 mr-2" /> POSTS
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex-1 data-[state=active]:border-t data-[state=active]:border-t-black data-[state=active]:rounded-none data-[state=active]:shadow-none">
            <Bookmark className="w-4 h-4 mr-2" /> SAVED
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex-1 data-[state=active]:border-t data-[state=active]:border-t-black data-[state=active]:rounded-none data-[state=active]:shadow-none">
            <Tag className="w-4 h-4 mr-2" /> TAGGED
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-4 px-1">
          <PhotoGrid posts={posts} />
        </TabsContent>
        <TabsContent value="saved" className="mt-4 px-1">
          <PhotoGrid posts={savedPosts} />
        </TabsContent>
        <TabsContent value="tagged" className="mt-4 px-1">
          <PhotoGrid posts={taggedPosts} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
