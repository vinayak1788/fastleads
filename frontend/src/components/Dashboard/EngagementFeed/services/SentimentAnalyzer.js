import * as natural from 'natural';
import * as compromise from 'compromise';

export class SentimentAnalyzer {
  static analyze(text) {
    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(text.toLowerCase());

    const positiveWords = ['great', 'awesome', 'excellent', 'amazing'];
    const negativeWords = ['bad', 'terrible', 'awful', 'horrible'];

    const positiveCount = tokens.filter(token => positiveWords.includes(token)).length;
    const negativeCount = tokens.filter(token => negativeWords.includes(token)).length;

    const totalScore = positiveCount - negativeCount;

    let sentiment = 'neutral';
    if (totalScore > 1) sentiment = 'positive';
    if (totalScore < -1) sentiment = 'negative';

    return {
      type: sentiment,
      score: totalScore
    };
  }

  static generateTrendReport(mentions) {
    const sentimentOverTime = mentions.reduce((acc, mention) => {
      const date = mention.timestamp.toDateString();
      acc[date] = acc[date] || { positive: 0, neutral: 0, negative: 0 };
      acc[date][mention.sentiment.type]++;
      return acc;
    }, {});

    return sentimentOverTime;
  }
}
