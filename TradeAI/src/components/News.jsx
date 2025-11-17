import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

dayjs.extend(relativeTime);

const API_KEY = "d3b3a1529d3c33b30abe2e15b6a06876"; 

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=30&apikey=${API_KEY}&_=${Date.now()}`
      );
      setNews(res.data.articles || []);
    } catch (err) {
      console.error("Error fetching business news:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 px-6 py-10 flex flex-col items-center transition-all duration-500">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
        Business & Stock Market News
      </h1>

      <button
        onClick={fetchNews}
        className="mb-8 px-6 py-2 bg-black hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition"
      >
        Refresh News
      </button>

      
      {loading ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-xl shadow-md">
              <Skeleton height={180} baseColor="#1f1f1f" highlightColor="#333" />
              <Skeleton count={3} className="mt-2" baseColor="#1f1f1f" highlightColor="#333" />
            </div>
          ))}
        </div>
      ) : news.length === 0 ? (
        <p className="text-gray-400">No business news available right now.</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-6xl">
          {news.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-gray-900 p-5 rounded-xl shadow-md hover:shadow-yellow-400/20 transition-all border border-gray-800 hover:border-white"
            >
              <img
                src={article.image || "https://via.placeholder.com/400x200?text=Business+News"}
                alt="business news"
                className="rounded-lg mb-3 w-full h-48 object-cover border border-gray-700"
              />
              <h2 className="font-semibold text-lg mb-2 line-clamp-2 text-white">
                {article.title}
              </h2>
              <p className="text-sm text-gray-400 line-clamp-3 mb-3">
                {article.description || "No description available."}
              </p>
              <p className="text-xs text-gray-500 mb-2">
                Published {dayjs(article.publishedAt).fromNow()}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline"
              >
                Read more →
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

