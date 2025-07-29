import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Tests for Contact page", () =>{

    it("should render contact component", ()=>{
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("should render submit button inside contact component", ()=>{
        render(<Contact />);
        const submit = screen.getByRole("button");
        expect(submit).toBeInTheDocument();
    });

    it("should render input box for name and message inside contact component", ()=>{
        render(<Contact />);
        const nameInput = screen.getByPlaceholderText("name");
        const messageInput = screen.getByPlaceholderText("message");
        expect(nameInput).toBeInTheDocument();
        expect(messageInput).toBeInTheDocument();
    });
});