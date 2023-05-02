// Import the necessary libraries
const chai = require('chai');
const { JSDOM } = require('jsdom');
const chaiDom = require('chai-dom');

// Set up Chai with chai-dom
chai.use(chaiDom);
const { expect } = chai;

// Define your test
describe('Check for ID "q4Wrapper" on HTML Body element', () => {
    it('should find a body element with the ID "q4Wrapper"', (done) => {
        // Load the HTML file into JSDOM
        JSDOM.fromFile('src/index.html').then((dom) => {
            const { document } = dom.window;

            // Perform the test
            const bodyElement = document.querySelector('body');
            expect(bodyElement).to.have.id('q4Wrapper');

            // Complete the test
            done();
        }).catch((error) => {
            done(error);
        });
    });
});