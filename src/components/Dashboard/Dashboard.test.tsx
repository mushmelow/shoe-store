import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "store";
import { Dashboard } from "./Dashboard";

describe("Dashboard", () => {
  test("renders Dashboard", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("ALDO Centre Eaton")).toBeInTheDocument();
    expect(screen.getByText("ALDO Destiny USA Mall")).toBeInTheDocument();
  });
});
