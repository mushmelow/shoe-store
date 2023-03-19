import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "store";
import App from "./App";

describe("App", () => {
  test("renders App", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.queryAllByText("Dashboard")).toHaveLength(2);
    const navLink = screen.getByRole("link", { name: "Dashboard" });
    expect(navLink).toBeInTheDocument();
    expect(navLink).toHaveAttribute("href", "/");
  });
});
