import React from 'react';
import {AppProps} from "next/app";

import {WithRouterComponent} from "./hocs/withRouter";

export const Application = ({Component, pageProps}: AppProps) => {
    return <WithRouterComponent Component={Component} {...pageProps}/>
}