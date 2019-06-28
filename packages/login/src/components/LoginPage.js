import React, { PureComponent } from 'react';
import { get } from '@cogent-health/core/config/axios';

class LoginPage extends PureComponent {

    componentDidMount() {
        get('/posts')
            .then(response => {
                console.log(response)
            });
    }

    render() {
        return (<h1>This is Login.</h1>);
    }

}


export default LoginPage;