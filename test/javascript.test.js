const chai = require('chai');
const expect = chai.expect;
const reportsWidget = require('../src/js/main');
const hbsLint = require('handlebars-lint');

describe('reportsWidget', () => {
    it('should compile successfully', function () {
        const reportData = [
            {
                cover: 'http://example.com/cover1.jpg',
                title: 'Report 1',
                documents: [
                    {
                        url: 'http://example.com/doc1.pdf',
                        title: 'Document 1',
                        file_size: '1MB',
                        file_type: 'PDF'
                    }
                ]
            }
        ];

        const template = Handlebars.compile(reportsWidget.options.template);
        const renderedTemplate = template(mockReportData);
        expect(renderedTemplate).to.not.be.empty;
    });
});