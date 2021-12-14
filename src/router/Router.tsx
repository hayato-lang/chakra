import { Switch, Route } from "react-router-dom";
import { memo, VFC } from "react";

import { Login } from "../components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";


export const Router: VFC = memo(() => {
  return(
    <Switch>
      <Route  path="/">
        <Login />
      </Route>
      <Route 
      path="/home"
      render={({ match: { url } }) => (
        <Switch>
          { HomeRoutes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={`${url}${route.path}`}
            >
              <HeaderLayout>{route.children}</HeaderLayout>
            </Route>
          ))};
        </Switch>
      )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});