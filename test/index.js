import dateFormatter from './../src/date-formatter.js';

Date.prototype.format = function(format) {
	return dateFormatter(this, format);
}

describe('date formatter', () => {
	let date;

	beforeEach(() => {
		date = new Date('2012/01/01 17:05:59');
	});

	it('should return a string like `yy-MM-dd`', done => {
		expect(date.format('yy-MM-dd')).toEqual('12-01-01');
		done();
	});
	it('should return a string like `yyyy-MM-dd`', done => {
		expect(date.format('yyyy-MM-dd')).toEqual('2012-01-01');
		done();
	});
	it('should return a string like `yyyy-MM-dd hh:mm`', done => {
		expect(date.format('yyyy-MM-dd hh:mm')).toEqual('2012-01-01 17:05');
		done();
	});
	it('should return a string like `yyyy-MM-dd hh:mm:ss`', done => {
		expect(date.format('yyyy-MM-dd hh:mm:ss')).toEqual('2012-01-01 17:05:59');
		done();
	});
});
