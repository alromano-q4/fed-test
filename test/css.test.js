const fs = require('fs');
const css = require('css');
const { expect } = require('chai');

describe('main.css', () => {
    it('should have a "reports" class with a responsive display property', (done) => {
        fs.readFile('./src/css/main.css', 'utf8', (err, data) => {
            if (err) throw err;

            const parsedCSS = css.parse(data);
            const rules = parsedCSS.stylesheet.rules;

            const reportsRule = rules.find(
                (rule) => rule.type === 'rule' && rule.selectors.includes('.reports')
            );

            const displayProperty = reportsRule.declarations.find(
                (declaration) => declaration.property === 'display'
            );

            expect(displayProperty).to.not.be.undefined;
            expect(displayProperty.value).to.be.oneOf(['grid', 'flex']);

            done();
        });
    });
});