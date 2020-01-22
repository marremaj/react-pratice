
import React from 'react';
import Container from './Container';

interface Props {
    username: string;
}

const Main: React.FC<Props> = (props) => {
    return (
        <div>
            <h1>{props.username}'s Project</h1>
            <Container name={"1" + props.username}/>
            <Container name={"2" + props.username}/>
            <Container name={"3" + props.username}/>
        </div>
    );
}

export default Main