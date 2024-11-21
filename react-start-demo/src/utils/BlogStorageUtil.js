export function getAllBlogs() {
    const blogsStr = localStorage.getItem('blogs') || '[]';
    return JSON.parse(blogsStr);
}

export function addBlog(blog) {
    let blogs = getAllBlogs();

    blog.id = blogs.length + 1;
    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs))
}

export function getBlogById(id) {
    return getAllBlogs().find((blog) => blog.id === id);
}