class LinkedInAPI {
  static async getCompanyMentions() {
    try {
      return { 
        mentions: [] 
      };
    } catch (error) {
      console.error('Error fetching LinkedIn mentions:', error);
      return { mentions: [] };
    }
  }
}

export default LinkedInAPI;
