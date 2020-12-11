import "../styles/globals.css";
import { AppProps } from "next/app";
import { ReactElement } from "react";
import { Provider } from "react-redux";
import { store } from "redux/store";

export default function MyApp({ Component, pageProps }: AppProps): ReactElement {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}
