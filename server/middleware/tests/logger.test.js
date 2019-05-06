import logger from '../logger';

test('It calls next()', () => {
    const next = jest.fn(x => x);
    logger({}, {}, next);
    logger({}, {}, next);
    console.log(next.mock.calls);
    expect(next.mock.calls.length).toBe(2);
});