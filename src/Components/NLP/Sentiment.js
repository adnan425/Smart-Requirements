import Sentiment from "sentiment";

export default function SentimentAnalyze(text) {
    const sentiment = new Sentiment();
    let result = sentiment.analyze(text); 
    return result;
}
