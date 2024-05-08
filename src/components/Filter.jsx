import {
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  Dropdown,
} from "semantic-ui-react";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="dropdown-filterd">
        <Dropdown
          text="Find games by genre"
          icon="chess"
          floating
          labeled
          button
          className="icon"
        >
          <DropdownMenu>
            <DropdownHeader icon="chess" content="  Search by Genre" />
            <DropdownDivider />
            <DropdownItem icon="quidditch" text="Family" />
            <DropdownItem icon="handshake outline" text="Strategy" />
            <DropdownItem icon="magic" text="Fantasy" />
            <DropdownItem icon="user secret" text="Adventure" />
            <DropdownItem icon="clone outline" text="Card Game" />
            <DropdownItem icon="chess rook" text="Role Play" />
            <DropdownItem icon="transgender alternate" text="Adult" />
            <DropdownItem icon="smile outline" text="Kids" />
            <DropdownItem icon="bug" text="Science fiction" />
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Filter;
// redirect to show ads when clicked
// look up how to display categorys dynamic?
