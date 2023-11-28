import AddURLDialogComponent from "@/components/dialogs/AddURLDialog";
import CategoryDialogComponent from "@/components/dialogs/CategoryQueryDialog";

import { GlobalComponent } from "@/components/Global";
import { RootStore, StoreContext } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreContext.Provider value={new RootStore()}>
      <Component {...pageProps} />
      <GlobalComponent />
      <AddURLDialogComponent/>
      <CategoryDialogComponent/>
    </StoreContext.Provider>
  );
}
