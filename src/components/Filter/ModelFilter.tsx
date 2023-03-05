import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { SHOES_MODELS } from "../../constants";
import { Model } from "../../types";

interface IModelFilter {
  filterShoes: any;
  setFilterShoes: (filter: Model) => void;
}

export const ModelFilter = ({ filterShoes, setFilterShoes }: IModelFilter) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFilterShoes(event.target.value as Model);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          height: 50,
          ml: 5,
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

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Box sx={{ ml: 2 }}>
          <FormGroup>
            {SHOES_MODELS.map((model, index) => (
              <FormControlLabel
                key={index}
                label={model}
                control={
                  <Checkbox
                    checked={filterShoes.includes(model)}
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
