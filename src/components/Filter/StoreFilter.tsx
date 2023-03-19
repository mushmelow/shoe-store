import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Menu,
  SelectChangeEvent,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Store } from "types";
import { useAppSelector, useAppDispatch } from "hooks";
import { updateStoreFilter } from "reducers/filter";

import { SHOES_STORES } from "../../constants";

export const StoreFilter: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState(false);

  const selectedStores = useAppSelector((state) => state.filter.stores);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(updateStoreFilter(event.target.value as Store));
  };

  return (
    <div>
      <Button
        ref={btnRef}
        variant="outlined"
        onClick={() => setOpen(true)}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          height: 50,
          borderColor: "lightgray",
          color: "black",
          "&:hover": {
            borderColor: "black",
            backgroundColor: "transparent",
          },
        }}
      >
        store
      </Button>

      <Menu
        anchorEl={btnRef.current}
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ ml: 2 }}>
          <FormGroup>
            {SHOES_STORES.map((store, index) => (
              <FormControlLabel
                key={index}
                label={store}
                control={
                  <Checkbox
                    checked={selectedStores.includes(store)}
                    value={store}
                    onChange={handleChange}
                  />
                }
              />
            ))}
          </FormGroup>
        </Box>
      </Menu>
    </div>
  );
};
