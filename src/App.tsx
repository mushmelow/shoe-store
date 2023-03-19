import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { InventoryEvent } from "types";

import { useAppDispatch } from "hooks";
import { updateInventory } from "reducers/inventory";
import { addHistory } from "reducers/history";

import { Header } from "components/Header";

const WEB_SOCKET_URL = "ws://localhost:8080/";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ws = new WebSocket(WEB_SOCKET_URL);
    ws.onmessage = function (event: MessageEvent<string>) {
      const data = JSON.parse(event.data) as InventoryEvent;

      dispatch(
        updateInventory({
          store: data.store,
          model: data.model,
          inventory: data.inventory,
        })
      );

      dispatch(
        addHistory({
          model: data.model,
          store: data.store,
          inventory: data.inventory,
          updatedAt: new Date().getTime(),
        })
      );
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
