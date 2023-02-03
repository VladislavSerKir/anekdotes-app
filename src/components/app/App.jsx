import React from 'react';
import { FilterSection } from '../filter-section/filter-section';
import { HeaderSearch } from '../header-search/header-search';
import { ResultSection } from '../result-section/result-section';

export const App = () => {
  return (
    <div className={`body`}>
      <HeaderSearch />
      <FilterSection />
      <ResultSection />
    </div>
  );
}