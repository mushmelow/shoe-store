import React from "react";

import { Filters } from "components/Filter";
import { Stores } from "components/Stores";

export const Dashboard: React.FC = () => (
  <div>
    <Filters />
    <Stores />
  </div>
);
