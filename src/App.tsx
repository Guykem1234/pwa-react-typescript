import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
const Home = lazy(() => import("./Home"));

const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes >
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes >
    </Suspense>
  </Router>
);

export default App;