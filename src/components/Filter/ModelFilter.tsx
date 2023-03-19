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
import { Model } from "types";
import { useAppSelector, useAppDispatch } from "hooks";
import { updateModelFilter } from "reducers/filter";

import { SHOES_MODELS } from "../../constants";

export const ModelFilter: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState(false);

  const selectedModels = useAppSelector((state) => state.filter.models);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(updateModelFilter(event.target.value as Model));
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
        model
      </Button>

      <Menu
        anchorEl={btnRef.current}
        open={isOpen}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ ml: 2 }}>
          <FormGroup>
            {SHOES_MODELS.map((model, index) => (
              <FormControlLabel
                key={index}
                label={model}
                control={
                  <Checkbox
                    checked={selectedModels.includes(model)}
                    value={model}
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
