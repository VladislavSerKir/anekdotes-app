import React from 'react';
import { useSelector } from 'react-redux';
import { FilterSection } from '../filter-section/filter-section';
import { HeaderSearch } from '../header-search/header-search';
import { ResultSection } from '../result-section/result-section';

export const App = () => {
  const theme = useSelector((store) => store.data.theme)

  return (
    <div className={`body ${theme === 'dark' ? 'body-theme_dark' : ''}`}>
      <HeaderSearch />
      <FilterSection />
      <ResultSection />
    </div>
  );
}