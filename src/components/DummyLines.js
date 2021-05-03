import React from "react";

const DummyLines = ({ todosLength }) => {
  return (
    <div className="dummy--lines">
      {[...Array(todosLength <= 11 ? 12 - todosLength + 1 : 1)].map((_, i) => {
        return <li key={i}></li>;
      })}
    </div>
  );
};

export default DummyLines;