import React from "react";
import { memo, VFC } from "react";
import { Route, Switch } from "react-router";

import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } })=>(
        <Switch>
          {HomeRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}>
                <HeaderLayout>{ route.children }</HeaderLayout>
              </Route>
            )
          })}
        </Switch>
      )}/>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
});
