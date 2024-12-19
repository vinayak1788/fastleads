import { TwitterApi } from 'twitter-api-v2';

class TwitterAPI {
  static apiKey = process.env.NEXT_PUBLIC_TWITTER_API_KEY;
  static client = new TwitterApi(this.apiKey);

  static async getBrandMentions() {
    try {
      if (!this.apiKey) {
        console.warn('Twitter API key not found');
        return { mentions: [] };
      }

      // Search for mentions of your brand
      const tweets = await this.client.v2.search({
        query: 'Fastleads99', // Replace with your brand name
        max_results: 10,
        'tweet.fields': ['created_at', 'public_metrics']
      });

      // Transform tweets to match your feed format
      const mentions = tweets.data.map(tweet => ({
        id: tweet.id,
        type: 'mention',
        title: tweet.text,
        engagement: tweet.public_metrics.like_count + tweet.public_metrics.retweet_count,
        timestamp: tweet.created_at,
        platform: 'Twitter',
        status: 'active'
      }));

      return { mentions };
    } catch (error) {
      console.error('Error fetching Twitter mentions:', error);
      return { mentions: [] };
    }
  }
}

export default TwitterAPI;
