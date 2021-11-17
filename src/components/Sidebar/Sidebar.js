import "./Sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import ACTIONS from "../../redux/actions";

const SidebarElement = ({
  filter,
  title,
  selectedFilter,
  selectFilter,
  products,
}) => {
  //get count of each filter item in the data
  const options = {};
  products.forEach((product) => {
    options[product[filter]] = options[product[filter]] + 1 || 1;
  });

  //convert that obj to array
  let optionList = [];
  for (const [key, value] of Object.entries(options)) {
    optionList.push({
      name: key,
      count: value,
    });
  }

  return (
    <div className="sidebar__element">
      <p className="sidebar__element__title">{title}</p>
      <ul>
        {optionList.map((option, i) => (
          <li
            key={i}
            onClick={() => selectFilter(filter, option.name)}
            style={{
              color:
                option.name === selectedFilter ? "var(--orange)" : "#646464",
            }}
          >
            {option.name} ({option.count})
          </li>
        ))}
      </ul>
    </div>
  );
};

const SidebarElementOrdering = ({
  filter,
  title,
  selectedFilter,
  selectFilter,
}) => {
  const optionList = [
    "En Düşük Fiyat",
    "En Yüksek Fiyat",
    "En Yeniler (A>Z)",
    "En Yeniler (Z>A)",
  ];
  return (
    <div className="sidebar__element">
      <p className="sidebar__element__title">{title}</p>
      <ul>
        {optionList.map((option, i) => (
          <li
            key={i}
            onClick={() => selectFilter(filter, option)}
            style={{
              color: option === selectedFilter ? "var(--orange)" : "#646464",
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Sidebar = () => {
  const { sidebarFilters, products } = useSelector((state) => state);

  const dispatch = useDispatch();

  //filter selection handler
  function selectFilter(filter, selectedFilter) {
    const newFilters = { ...sidebarFilters };
    newFilters[filter] =
      newFilters[filter] === selectedFilter ? "" : selectedFilter;

    dispatch({
      type: ACTIONS.SET_SIDEBAR_FILTER,
      payload: newFilters,
    });
  }

  return (
    <aside className="sidebar">
      <SidebarElement
        filter={"color"}
        title={"Renk"}
        selectedFilter={sidebarFilters.color}
        selectFilter={selectFilter}
        products={products || []}
      />
      <SidebarElementOrdering
        filter={"order"}
        title={"Sıralama"}
        selectedFilter={sidebarFilters.order}
        selectFilter={selectFilter}
        products={products || []}
      />
      <SidebarElement
        filter={"brand"}
        title={"Marka"}
        selectedFilter={sidebarFilters.brand}
        selectFilter={selectFilter}
        products={products || []}
      />
    </aside>
  );
};

export default Sidebar;
