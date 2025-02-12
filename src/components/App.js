import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About.jsx'
import ArticaleList from './ArticleList.jsx'
console.log(blogData);
function App() {
  return (
    <div className="App">
      
      <Header name = {blogData.name} />
      
      <About 
        image = {blogData.image}
        about = {blogData.about}
      />

      <ArticaleList posts = {blogData.posts}/>
    </div>
  );
}

export default App;
