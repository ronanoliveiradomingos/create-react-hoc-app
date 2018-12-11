import React from 'react';
import { withLoading } from '../hocs/withLoading';

const Infos = () => (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
        <li>
            <img
                alt="me"
                src='https://avatars0.githubusercontent.com/u/18179804?s=460&v=4'
                style={{ margin: '0 auto' }}
            />
        </li>
        <li>My name: Ronan Oliveira</li>
        <li>My username: ronanoliveiradomingos</li>
        <li>My login: ronanoliveiradomingos</li>
    </ul>
);

export default withLoading(Infos);