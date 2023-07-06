import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { observer } from "mobx-react";
import { Context } from "..";
import { LOGIN_ROUTE } from "../utils/consts";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}

      {authRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            user.isAuth ? (
              <Component />
            ) : (
              <Navigate to={LOGIN_ROUTE} replace={true} />
            )
          }
          exact
        />
      ))}
    </Routes>
  );
});

export default AppRouter;
