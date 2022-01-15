import React from "react";
import { ListItem } from "../../atoms";

const List = (props) => {
  const { data = [], action } = props;

  return (
    <div className="w-full h-full">
      {Array.from(data || []).map((item, index) => {
        return (
          <ListItem
            key={`list-index`}
            text={item.title}
            action={action ? "hover" : ""}
          />
        );
      })}
    </div>
  );
};

export default List;
