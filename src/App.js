import "./App.css";
import Row from "./Row";
import request from "./request";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGNAL"
        fetchURL={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="TRANDING" fetchURL={request.fetchTrending} />
      <Row title="TOP RATED" fetchURL={request.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchURL={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={request.fetchCOmedyMovies} />
      <Row title="DOCUMENTARIES" fetchURL={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
