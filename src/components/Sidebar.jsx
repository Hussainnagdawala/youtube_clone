import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constatnt";

const Sidebar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column " },
      }}
    >
      {categories.map((items) => {
        return (
          <button
            className="category-btn"
            onClick={() => setselectedCategory(items.name)}
            style={{
              background: selectedCategory === items.name && "#fc1503",
              color: "white",
            }}
            key={items.name}
          >
            <span
              style={{
                color: selectedCategory === items.name ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {items.icon}
            </span>
            <span
              style={{ opacity: selectedCategory === items.name ? 1 : 0.8 }}
            >
              {items.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
