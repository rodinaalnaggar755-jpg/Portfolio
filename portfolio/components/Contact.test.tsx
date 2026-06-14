import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

describe("Contact Component Tests", () => {
  test("should update all form inputs correctly", async () => {
    const user = userEvent.setup();
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Jane Smith");
    const emailInput = screen.getByPlaceholderText("jane@gmail.com");
    const textarea = screen.getByPlaceholderText(
      "Tell me about your project...",
    );

    await act(async () => {
      await user.type(nameInput, "Rodina");
      await user.type(emailInput, "test@example.com");
      await user.type(textarea, "Hello, let's work together!");
    });

    expect(nameInput).toHaveValue("Rodina");
    expect(emailInput).toHaveValue("test@example.com");
    expect(textarea).toHaveValue("Hello, let's work together!");
  });
});
