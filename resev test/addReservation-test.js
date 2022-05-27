/**
 * @jest-environment jsdom
 */
 import addReservation from './addReservation.js';

 test('count the number of the li elements in the review section', () => {
   // arrange
   document.body.innerHTML = `
     <ul id="reserve-section">
     <li>1</li>
     <li>2</li>
     <li>3</li>
     <li>4</li>
     </ul>
   `;
   // act
   expect(addReservation())
   // assert
     .toBe(4);
 });
 