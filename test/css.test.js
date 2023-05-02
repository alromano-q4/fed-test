const fs = require('fs');
const { JSDOM } = require('jsdom');
const { expect } = require('chai');

describe('Check if Reports are using CSS Grid', function () {
    it('should have CSS grid property applied', function (done) {
        fs.readFile('src/index.html', 'utf8', (err, html) => {
            if (err) throw err;

            const dom = new JSDOM(html);
            const { window } = dom;

            const element = window.document.querySelector('.reports');
            const style = window.getComputedStyle(element);

            expect(style.display).to.equal('grid');
            done();
        });
    });
});