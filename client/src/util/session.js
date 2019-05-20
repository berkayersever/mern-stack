export const login = user => (
    fetch('api/session', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
);

export const signup = user => (
    fetch('http://localhost:8055/v1/users/signup', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
);

export const logout = () => (
    fetch('api/session', { method: 'DELETE' })
);