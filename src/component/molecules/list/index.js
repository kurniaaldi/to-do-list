import React from "react";
import { ListItem } from "../../atoms";

const List = (props) => {
  const { data = [], action, onRemove, onClick } = props;
  return (
    <div className="w-full h-full flex gap-2 flex-col">
      {Array.from(data || []).map((item, index) => {
        return (
          <ListItem
            data={item}
            key={`list-index`}
            text={item.title}
            action={action ? "hover" : ""}
            onClose={() => onRemove(item.id)}
            onClick={(data) => {
              onClick(data);
            }}
          />
        );
      })}
    </div>
  );
};

export default List;
