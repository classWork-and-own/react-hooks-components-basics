import React from "react";
import Article from "./Article";
import Comment from "./Comment";

// parent  function component
function App() {
  return (
    <div>
      {/* making use of the child components in this parent component */}
      <Article />
      <Comment />
    </div>
  );
}

export default App;
