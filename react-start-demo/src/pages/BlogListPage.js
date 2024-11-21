import { useEffect } from 'react';
import { getAllBlogs } from '../utils/BlogStorageUtil';

export default function BlogListPage() {
    useEffect(() => {
        document.title = '博客列表';
    }, []);

    const blogs = getAllBlogs();

    return (
        <div className="blog-list">
            <ul>
                {
                    blogs.map((blog, index) => (
                        <li key={index}>
                            <a href={`/blogs/${blog.id}`}>{blog.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}