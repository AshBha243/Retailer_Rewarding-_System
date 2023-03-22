import { screen, render } from "@testing-library/react";
import TransactionList from "./TransactionList";

test("renders TransactionList table", async () => {
    render(<TransactionList />);
    expect(await screen.findByText('10-05-2022')).toBeInTheDocument();
    expect(screen.getByText('Transaction_Id')).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Time')).toBeInTheDocument();
    expect(screen.getByText('Customer_Id')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
});