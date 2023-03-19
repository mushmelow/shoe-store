import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "store";
import { getByContent } from "utils/test";
import { Header } from "./Header";

describe("Header", () => {
  test("renders store nav", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/store/ALDO%20Destiny%20USA%20Mall"]}>
          <Routes>
            <Route path="/store/:store" Component={Header} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(
        getByContent("store ALDO Destiny USA Mall inventory change history")
      )
    ).toBeInTheDocument();
  });

  test("renders model nav", () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={["/store/ALDO%20Maine%20Mall/model/CAELAN"]}
        >
          <Routes>
            <Route path="/store/:store/model/:model" Component={Header} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(
        getByContent(
          "store ALDO Maine Mall model CAELAN inventory change history"
        )
      )
    ).toBeInTheDocument();
  });
});
