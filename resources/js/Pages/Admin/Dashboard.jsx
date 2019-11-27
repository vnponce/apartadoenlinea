import React from 'react';
import Admin from "../../Shared/Admin";

function Dashboard(props) {
    const { products, success_message, category = null } = props;
    console.log('succes_message =>', success_message);
    return (
        <Admin >
            <h1>dashboard</h1>
        </Admin>
    );
}

export default Dashboard;
