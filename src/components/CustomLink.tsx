import React, {ReactNode} from 'react';
import {Link, useMatch} from "react-router-dom";

type CustomLinkPropsType = {
    children?: ReactNode
    to: string
}
const CustomLink: React.FC<CustomLinkPropsType> = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link to={to} {...props} style={{
            color: match ? 'var(--color-active)' : 'white'
        }}>
            {children}
        </Link>
    );
};

export {CustomLink};