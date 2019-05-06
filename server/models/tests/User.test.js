import UserModel from '../User';

test('It accepts all parameters and implements all methods', () => {
    const raw = { id: 'first', email: 'berkay@live.se', username: 'Berkay', role: 'admin' };
    const user = new UserModel(raw);
    expect(user.getId()).toEqual(raw.id);
    expect(user.getUsername()).toEqual(raw.username);
    expect(user.getEmail()).toEqual(raw.email);
    expect(user.getRole()).toEqual(raw.role);
    expect(user.getData()).toEqual(raw);
});