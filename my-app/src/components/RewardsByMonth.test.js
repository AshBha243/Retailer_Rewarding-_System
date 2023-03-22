import { screen, render } from "@testing-library/react";
import RewardsByMonth from "./RewardsByMonth";

test("renders rewards by month table", async () => {
    render(<RewardsByMonth />);
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Customer_Id')).toBeInTheDocument();
    expect(screen.getByText('Monthly Point')).toBeInTheDocument();
    expect(screen.getByText('Filter by month')).toBeInTheDocument();
});