import { useEffect } from 'react';
import SwaggerUI from 'swagger-ui-react'
import "swagger-ui-react/swagger-ui.css"

const Docs = () => {
    useEffect(() => {
        document.title = 'API documentation'
    }, [])
    return (
        <SwaggerUI url="http://localhost:5000/v1/api-json" />

    );
}

export default Docs;
