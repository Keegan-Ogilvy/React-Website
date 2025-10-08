import React from "react";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results, showResults }) => {
  return (
    <div className={`results-list ${showResults ? "show" : ""}`}>
      {results.map((result, id) => (
        <SearchResult key={id} result={result} />
      ))}
    </div>
  );
};
