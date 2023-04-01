import React from 'react';
import { useTypedSelector } from '../../types/types';
import { FilterSection } from '../filter-section/filter-section';
import { HeaderSearch } from '../header-search/header-search';
import { ResultSection } from '../result-section/result-section';

export const App = () => {

  const theme = useTypedSelector((store) => store.data.theme)

  return (
    <div className={`body ${theme === 'dark' ? 'body-theme_dark' : ''}`}>
      <HeaderSearch />
      <FilterSection />
      <ResultSection />
    </div>
  );
}