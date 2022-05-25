/**
 * @jest-environment jsdom
 */
import countComment from "./countComment";

describe("tests", () => {
 

  beforeEach(() => {
    const mockReviewSection = () => {
      let mockUl = document.createElement("ul");
      mockUl.setAttribute("id", "comment-section");
  
      let listItem = document.createElement("li");
      mockUl.appendChild(listItem);
    };
    mockReviewSection();
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(countComment()).toBe(1);
  });
});
