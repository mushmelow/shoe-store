import {
  createBrowserRouter,
  ActionFunction,
  redirect,
} from "react-router-dom";
import { Dashboard } from "components/Dashboard";
import { History } from "components/History";
import { App } from "./App";
import { Store, Model } from "types";
import { SHOES_MODELS, SHOES_STORES } from "./constants";

const validateStoreHistoryPath: ActionFunction = ({ params }) => {
  if (!SHOES_STORES.includes(params.store as Store)) {
    return redirect("/");
  }

  return null;
};

const validateModelHistoryPath: ActionFunction = ({ params }) => {
  if (
    !SHOES_MODELS.includes(params.model as Model) ||
    !SHOES_STORES.includes(params.store as Store)
  ) {
    return redirect("/");
  }

  return null;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "store/:store",
        element: <History />,
        loader: validateStoreHistoryPath,
      },
      {
        path: "store/:store/model/:model",
        element: <History />,
        loader: validateModelHistoryPath,
      },
    ],
  },
]);
