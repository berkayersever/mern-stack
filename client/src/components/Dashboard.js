import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/session';

const mapStateToProps = ({ session }) => ({
    session
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const Dashboard = ({ logout, session }) => (
    <Fragment>
        <h1>Hi {session.username}!</h1>
        <p>You are logged in</p>
        <button onClick={logout}>Logout</button>
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);