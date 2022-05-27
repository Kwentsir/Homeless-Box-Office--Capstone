/**
 * @jest-environment jsdom
 */
import countMovies from './moviecount.js';

test('Should count the total number of movies', () => {
  document.body.innerHTML = `
    <section id="movie-list">
    <article></article>
    <article></article>
    </section>
    `;
  expect(countMovies()).toBe(2);
});