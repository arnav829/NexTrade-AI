import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
  `https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=30&apikey=d3b3a1529d3c33b30abe2e15b6a06876&_=${Date.now()}`
);

        setNews(res.data.articles);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setLoading(false);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000); // refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {loading ? (
        <p className="text-gray-600">Loading latest news...</p>
      ) : news.length === 0 ? (
        <p className="text-gray-600">No news available right now.</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
          {news.map((article, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={article.image || "https://via.placeholder.com/400x200"}
                alt="news"
                className="rounded-lg mb-3 w-full h-48 object-cover"
              />
              <h2 className="font-semibold text-lg mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
