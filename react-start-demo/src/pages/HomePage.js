import { useEffect } from 'react';

export default function HomePage() {
    useEffect(() => {
        document.title = '首页';
    }, []);

    return (
        <p>欢迎访问博客聚合，聚合天下优质博客，让您在文字的海洋里徜徉！</p>
    );
}
