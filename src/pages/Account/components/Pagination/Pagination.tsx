import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

interface PaginationProps {
  count?: number;
  siblingCount?: number;
  boundaryCount?: number;
  currentPage?: number;
}

function PaginationComp({ currentPage, count = 10, siblingCount, boundaryCount }: PaginationProps) {
  return (
    <div>
      <Pagination
        count={count}
        siblingCount={siblingCount}
        boundaryCount={boundaryCount}
        page={currentPage}
        renderItem={item => {
          return item.selected ? (
            <PaginationItem
              sx={{ backgroundColor: "var(--color-primary) !important", color: "var(--color-white)" }}
              {...item}
            />
          ) : (
            <PaginationItem sx={{ color: "var(--color-text-06)" }} {...item} />
          );
        }}
      />
    </div>
  );
}

export default PaginationComp;
