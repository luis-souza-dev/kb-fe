import Main from "./layout/main";
import Carousel from "./layout/carousel";
import ArticlesList from "./layout/articles-list";
import Header from "./layout/header";

function App() {
  const categories = Array.from({length: 16}, (v, i) => i);
  return (
    <Main>
      <Header></Header>
      <Carousel categories={categories}></Carousel>
      <ArticlesList></ArticlesList>
    </Main>
  );
}

export default App;
