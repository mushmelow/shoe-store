import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "hooks";
import { Link } from "components/Link";
import { List } from "./History.styles";

export const History = () => {
  const history = useAppSelector((state) => state.history);
  const { store, model } = useParams();

  return (
    <List>
      {history
        .filter(
          (h) => (!store || h.store === store) && (!model || h.model === model)
        )
        .map((h, i) => (
          <li key={i}>
            {!model ? (
              <Link to={`/store/${store}/model/${h.model}`}>{h.model}</Link>
            ) : undefined}{" "}
            change to {h.inventory} at {new Date(h.updatedAt).toLocaleString()}
          </li>
        ))}
    </List>
  );
};
