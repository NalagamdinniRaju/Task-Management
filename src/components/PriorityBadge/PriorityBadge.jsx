import React from "react";
import "./PriorityBadge.css";

const PriorityBadge = ({ priority, selected }) => {
    const priorityStyle = {
      LOW: { backgroundColor: "#15d4c8" },
      MEDIUM: { backgroundColor: "#ffd12c" },
      HIGH: { backgroundColor: "#ff4444" },
      default: { backgroundColor: "#f9f9f9" },
    };
  
    return (
      <span
        className="priority_badge"
        style={selected ? priorityStyle[priority] : priorityStyle.default}
      >
        {priority}
      </span>
    );
  };

  export default PriorityBadge;