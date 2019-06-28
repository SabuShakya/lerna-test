import React, { PureComponent } from 'react';
import { getWithRequestParams } from '@cogent-health/core/config/axios';
import LoginFunction from 'login/src/components/LoginFunction';
import Hello from '@cogent-health/core/Hello';

class AdminPage extends PureComponent {

    componentDidMount() {

        const reqParamObj = {
            postId: 1
        }
        getWithRequestParams('/comments', reqParamObj)
            .then(response => {
                console.log(response)
            });

        LoginFunction();
    }

    render() {
        return (
            <div>
                <h1>This is AdminPage.</h1>
                <Hello></Hello>
            </div>)
    }

}


export default AdminPage;