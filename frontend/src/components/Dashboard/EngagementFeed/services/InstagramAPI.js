class InstagramAPI {
  static async getBrandTags() {
    try {
      return { 
        mentions: [] 
      };
    } catch (error) {
      console.error('Error fetching Instagram tags:', error);
      return { mentions: [] };
    }
  }
}

export default InstagramAPI;
