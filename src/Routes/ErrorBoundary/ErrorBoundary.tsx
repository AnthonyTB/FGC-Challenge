import React, { useState, useEffect } from "react";
import "./ErrorBoundary.css";
import { Redirect, Link } from 'react-router-dom';

const ErrorBoundary: React.FC = () => {
 const [redirect, setRedirect] = useState<boolean>(false);

useEffect(() => {
setTimeout(() => setRedirect(true), 4000);
}, []);

    return (
        <div className="ErrorBoundary">
            <h2>Hello looks like you're lost here I'll redirect you to the home page or <Link to="/">Click Me</Link>.</h2>
            {redirect ? <Redirect to="/" /> : null}
        </div>
    )
};

export default ErrorBoundary;