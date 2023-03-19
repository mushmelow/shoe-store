import React from "react";
import { Stack, Button } from "@mui/material";
import { useAppDispatch } from "hooks";
import { resetFilter } from "reducers/filter";
import { ModelFilter, StoreFilter } from "components/Filter";

export const Filters: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" spacing={2} sx={{ height: "50px" }}>
      <StoreFilter />
      <ModelFilter />
      <Button variant="contained" onClick={() => dispatch(resetFilter())}>
        Reset
      </Button>
    </Stack>
  );
};
