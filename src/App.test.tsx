import { render, screen } from "@testing-library/react"
import App from "./App"

window.HTMLElement.prototype.scrollTo = () => {};

describe("App", () => {
    it("Renders the app", () => {
        render(<App />);
    });
});