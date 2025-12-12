import "./NotFound.sass"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from 'react';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Редирект на главную страницу при монтировании компонента
        const redirectTimer = setTimeout(() => {
            navigate("/");
        }, 0); // Немедленный редирект

        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <main className="not-found">
            <h2 className="pink-text h2-tag">This page is not available</h2>
            <p className="gray-text ">Sorry, we couldn’t find the page you’re looking for.</p>
            <Link className="pink-text" to="/">Homepage</Link>
        </main>
    )
}

export default NotFound;