import * as React from "react";
import ReactPaginate from "react-paginate";
import { LeftArrow } from "../assets/svg/LeftArrow";
import RightArrow from "../assets/svg/RightArrow";
import { Beer } from "../types/Beer";

export interface PaginationProps {
  beers: Beer[];
  setCurrentItems: React.Dispatch<React.SetStateAction<Beer[] | undefined>>;
}

export function Pagination({ beers, setCurrentItems }: PaginationProps) {
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);

  const itemsPerPage = window.innerWidth > 576 ? 5 : 4;

  React.useEffect(() => {
    if (Math.ceil(beers.length / itemsPerPage) !== pageCount) {
      setItemOffset(0);
    }
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(beers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(beers.length / itemsPerPage));
  }, [beers, itemOffset, pageCount, setCurrentItems]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % beers.length;
    setItemOffset(newOffset);
  };
  if (beers.length <= itemsPerPage) {
    return null;
  }
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<RightArrow />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<LeftArrow />}
      />
    </div>
  );
}
