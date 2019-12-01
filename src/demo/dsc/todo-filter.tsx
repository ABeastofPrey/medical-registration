import * as React from "react";
import { connect } from "react-redux";
import { setFilter } from "./actions";
import { VISIBILITY_FILTERS } from "./constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <button
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
              setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </button>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
