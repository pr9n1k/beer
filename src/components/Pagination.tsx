import * as React from "react";
import ReactPaginate from "react-paginate";
import { Beer } from "../types/Beer";

export interface PaginationProps {
  beers: Beer[];
  setCurrentItems: React.Dispatch<React.SetStateAction<Beer[] | undefined>>;
}

export function Pagination({ beers, setCurrentItems }: PaginationProps) {
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 25;

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(beers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(beers.length / itemsPerPage));
  }, [beers, itemOffset, setCurrentItems]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % beers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  if (beers.length <= itemsPerPage) {
    return null;
  }
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
      />
    </div>
  );
}
