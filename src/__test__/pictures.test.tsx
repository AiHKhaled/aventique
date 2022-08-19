import { CardPicture } from "@/components/Pictures/Picture";
import { render, screen } from "@testing-library/react";

const TestCard = () => {
  return (
    <CardPicture
      title="Lorem ipsum dolor sit amet."
      thumbnailUrl="https://source.unsplash.com/random/800x600"
    />
  );
};

const ExpectNodes = (nodes: HTMLElement[]) => {
  nodes.forEach((elm) => {
    expect(elm).toBeTruthy();
    // expect(elm).toBeVisible();
  });
};

describe("BaseCard Component Tests", () => {
  it("Renders without Crashing", () => {
    render(<TestCard />);
  });

  it("Renders all elements", async () => {
    render(<TestCard />);
    const title = screen.getByText(/Lorem ipsum dolor sit amet./i);
    const image = screen.getByTestId("card");
    ExpectNodes([title, image]);
  });
});
