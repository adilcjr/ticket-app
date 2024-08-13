import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dashboard from "@/app/page";

describe("Page", () => {
  test("renders a heading", () => {
    render(<Dashboard />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  test("renders homepage unchanged", () => {
    const { container } = render(<Dashboard />);
    expect(container).toMatchSnapshot();
  });
});
