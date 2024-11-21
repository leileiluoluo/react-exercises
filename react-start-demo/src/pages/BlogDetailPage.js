import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../utils/BlogStorageUtil';

export default function BlogDetailPage() {
    let { id } = useParams();

    const blog = getBlogById(Number(id));

    useEffect(() => {
        document.title = blog.name;
    }, [blog]);

    return (
        <div className="blog-detail">
            <h2>{blog.name}</h2>
            <p>{blog.description}</p>
            <div className="note">{blog.technical ? '*该博客为技术博客' : '*该博客为非技术博客'}</div>
        </div>
    );
}