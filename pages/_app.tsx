import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "../apps/store";
import { persistStore } from "redux-persist";

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  // const persistor = persistStore(store, {}, () => {
  //   persistor.persist();
  // });
  return (
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<Component {...pageProps} />
			{/* </PersistGate> */}
		</Provider>
	);
}

export default MyApp
