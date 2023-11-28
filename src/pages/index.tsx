import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import MainTwoLayout from "@/layouts/MainTwo";
import NavComponent from "@/layouts/Nav";
import React, { useContext } from "react";

import LinkIcon from "@mui/icons-material/Link";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { StoreContext } from "@/store";
import { observer } from "mobx-react-lite";
const inter = Inter({ subsets: ["latin"] });

export default observer(function Home() {
  const homeMenus = [
    {
      name: "category_query",
      icon: <ManageSearchIcon />,
    },
    {
      name: "add_link",
      icon: <LinkIcon />,
    },
    {
      name: "about",
      link: "/about",
    },
  ];

  const store = useContext(StoreContext);
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavComponent
        menus={homeMenus}
        onMenuItemClick={(menuName) => {
          switch (menuName) {
            case "category_query":
              store.update_categoryDialog_open(true);
              break;
            case "add_link":
              store.update_addURLDialog_open(true);
              break;
            // setAddDialogOpen(true);
          }
        }}
      />
    </React.Fragment>
  );
});
