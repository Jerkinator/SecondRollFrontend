import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "adventure", value: 1 },
  { key: 2, text: "family", value: 2 },
  { key: 3, text: "startegy", value: 3 },
];
const Filter = () => {
  return (
    <div className="filter-container">
      <div className="button-container">
        <Dropdown clearable options={options} selection />
      </div>
    </div>
  );
};

export default Filter;
// must be a page showing every category when clicked
// look up how to display categorys dynamic?
