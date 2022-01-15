import React from "react";
import { ListItem } from "../../atoms";

const List = (props) => {
  const { data = [], action, onRemove } = props;

  return (
    <div className="w-full h-full flex gap-2 flex-col">
      {Array.from(data || []).map((item, index) => {
        return (
          <ListItem
            key={`list-index`}
            text={item.title}
            action={action ? "hover" : ""}
            onClose={() => onRemove(item.id)}
            {...props}
          />
        );
      })}
    </div>
  );
};

export default List;
