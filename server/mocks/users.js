import UserModel from '../models/User';

const user1 = new UserModel({ id: 'first', email: 'berkay@live.se', username: 'Berkay', role: 'admin' });
const user2 = new UserModel({ id: 'third', email: 'berkay@live.de', username: 'B3rk4y', role: 'customer' });
const users = [user1.getData(), user2.getData()];

export default users;