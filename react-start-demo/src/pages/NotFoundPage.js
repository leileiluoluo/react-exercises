import { useEffect } from 'react';

export default function NotFoundPage() {
    useEffect(() => {
        document.title = '404';
    }, []);

    return (
        <p>未找到您要访问的页面！</p>
    );
}