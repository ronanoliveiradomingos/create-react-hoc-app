import React from 'react';
import { withLoading } from '../hocs/withLoading';

const ReposList = () => (
    <ul style={{ clear: 'both', display: 'block', listStyle: 'none' }}>
        <li>Minha lista de midias:</li>
        <li><a href="https://twitter.com/ronandomingos" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://github.com/ronanoliveiradomingos" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    </ul>
);

export default withLoading(ReposList);