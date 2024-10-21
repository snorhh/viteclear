import App from "./App";
import { test, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("clear todo", () => {
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "Go to coffee" } });

    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "29.01.2023" } });

    const button = screen.getByText("Add");
    
    fireEvent.click(button);

    const table = screen.getByRole("table");
    expect(table).toHaveTextContent(/go to coffee/i);

    const button2 = screen.getByText("Clear");

    fireEvent.click(button2);

    const tableCleared = screen.getByRole("table");
    expect(tableCleared).not.toHaveTextContent(/go to coffee/i);


})


