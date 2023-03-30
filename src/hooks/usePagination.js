import { useState } from 'react';

export const usePagination = (anekdotes, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(anekdotes.length / itemsPerPage);

    const findCurrentAnekdotes = () => {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return anekdotes.slice(begin, end);
    };

    const next = () => {
        setCurrentPage(prevState => Math.min(prevState + 1, maxPage));
    };

    const prev = () => {
        setCurrentPage(prevState => Math.max(prevState - 1, 1));
    };

    const jump = page => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(() => Math.min(pageNumber, maxPage));
    };

    return { next, prev, jump, findCurrentAnekdotes, currentPage, maxPage };
};