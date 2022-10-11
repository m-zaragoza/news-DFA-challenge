import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/App.css';
import AllHeadlines from './Components/AllHeadlines';
import Footer from './Components/Footer';
import Header from './Components/Header';
import SingleArticle from './Components/SingleArticle';

function App() {

  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsData();
  }, []);

  const getNewsData = async () => {
    const response = await fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=7fb12f3f-04f6-42a5-be6d-e31a8bf51934`);
    const newsData = await response.json();
    console.log(newsData.response.results);
    setNews(newsData.response.results);
  }

  return (
    <Router>
      <header >
        <Header />
      </header>
      <main>
        <div className="mt-5 pt-5">
          <Routes>
            <Route path="/" element={<AllHeadlines news={news} />} />
            <Route path="/:id" element={<SingleArticle news={news} />} />
            <Route path="*" element={<AllHeadlines news={news} />} />
          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
};

export default App;

