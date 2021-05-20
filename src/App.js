import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PostListPage from "./pages/PostListPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostWritePage from "./pages/PostWritePage";

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={PostListPage}></Route>
            <Route exact path="/posts" component={PostWritePage}></Route>
            <Route exact path="/posts/:postId" component={PostDetailPage}></Route>
        </Router>
    </div>
  );
}

export default App;
