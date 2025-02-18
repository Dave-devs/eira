import { IoChevronForward } from "react-icons/io5";

interface LeftSideCollectionFilter {
  showFilter: boolean;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSubCategory: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LeftSideCollectionFilter({
  showFilter,
  setShowFilter,
  toggleCategory,
  toggleSubCategory
}: LeftSideCollectionFilter) {
  return (
    <div className="min-w-60 mt-20" data-testid="filter-container">
      <p
        className="my-2 text-xl flex items-center cursor-pointer gap-2"
        onClick={() => setShowFilter(!showFilter)}
        data-testid="filter-toggle"
      >
        FILTERS
        <IoChevronForward
          size={12}
          className={`sm:hidden ${showFilter ? "rotate-90" : ""}`}
          data-testid="filter-chevron"
        />
      </p>
      {/* Category Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden sm:block"
          }`}
        data-testid="category-filter-section"
      >
        <p className="mb-3 text-sm font-medium">CATEGORIES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} data-testid="category-men" /> Men
          </p>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} data-testid="category-women" /> Women
          </p>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory} data-testid="category-kids" /> Kids
          </p>
        </div>
      </div>
      {/* Sub-category Filter */}
      <div
        className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? "" : "hidden sm:block"
          }`}
        data-testid="subcategory-filter-section"
      >
        <p className="mb-3 text-sm font-medium">TYPES</p>
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory} data-testid="subcategory-topwear" /> Topwear
          </p>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory} data-testid="subcategory-bottomwear" /> Bottomwear
          </p>
          <p className="flex gap-2">
            <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory} data-testid="subcategory-winterwear" /> Winterwear
          </p>
        </div>
      </div>
    </div>
  );
}