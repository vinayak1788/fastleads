export interface FeedItem {
  id: number;
  user: {
    name: string;
    avatar: string;
    handle: string;
    platform: 'Twitter' | 'LinkedIn' | 'Instagram' | 'Facebook';
  };
  content: string;
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  sentiment: 'positive' | 'neutral' | 'negative';
  time: string;
}

export interface DashboardStats {
  totalMentions: number;
  positivesentiment: string;
  pendingResponses: number;
  activeInfluencers: number;
}
