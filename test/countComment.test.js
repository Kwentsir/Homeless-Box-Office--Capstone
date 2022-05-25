/**
 * @jest-environment jsdom
 */
import countComment from "./countComment";

  test("count the number of the li elements in the review section", () => {
      document.body.innerHTML = `
    <ul id="comment-section">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    </ul>
  `;
    expect(countComment()).toBe(4);
  });

