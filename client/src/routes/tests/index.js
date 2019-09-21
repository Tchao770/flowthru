import React from "react";
import Loadable from "react-loadable";

import Loading from "../../components/loading";

const LoadableComponent = Loadable({
  loader: () => import("./tests"),
  loading: Loading
});

const LoadableTest = () => <LoadableComponent />;

export default LoadableTest;
