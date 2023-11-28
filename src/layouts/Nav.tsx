import { Box, Stack, Button } from "@mui/material";

import React, { useContext } from "react";
import Link from "next/link";
import { RootStore, StoreContext } from "@/store";
export const NavComponent: React.FC<{
  onMenuItemClick?: (name: string) => void;
  menus?: Array<{
    name: string;
    icon?: JSX.Element;
    link?: string;
  }>;
}> = ({ onMenuItemClick, menus }) => {
  const store = useContext(StoreContext)
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        height: "60px",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "purple",
          fontSize: "17px",
          fontWeight: 600,
        }}
      >
        YTEnglishHub
      </Link>
      {menus && (
        <Box>
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
            {menus.map((menuItem, index) => {
              return (
                <Button
                  onClick={() => {
                    onMenuItemClick && onMenuItemClick(menuItem.name);
                  }}
                  key={index}
                  href={menuItem.link}
                >
                  {menuItem.name}
                </Button>
              );
            })}
          </Stack>
        </Box>
      )}
    </Box>
  );
};
export default NavComponent;
