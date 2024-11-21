import { useEffect, useState } from 'react';
import { addBlog } from '../utils/BlogStorageUtil';

function validateFormData(formData) {
    if (formData.name.length <= 2) {
        return { field: 'name', message: '博客名称须大于 2 个字符' };
    }

    if (formData.description.length <= 10) {
        return { field: 'description', message: '博客描述须大于 10 个字符' };
    }

    return null;
}

export default function BlogAddPage() {
    const [formData, setFormData] = useState({ name: '', description: '', technical: false });
    const [error, setError] = useState({});

    useEffect(() => {
        document.title = '提交博客';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateFormData(formData);
        if (null === error) {
            addBlog(formData);
            window.location = '/blogs';
        } else {
            setError(error);
        }
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>博客名称：</label>
                    {error.field === 'name' && <span className="error">{error.message}</span>}
                </div>
                <div>
                    <input name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div>
                    <label>博客描述：</label>
                    {error.field === 'description' && <span className="error">{error.message}</span>}
                </div>
                <div>
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                </div>

                <div>
                    <label>技术博客：</label>
                </div>
                <div>
                    <select id="options" name="technical" value={formData.technical} onChange={handleChange}>
                        <option value="false">否</option>
                        <option value="true">是</option>
                    </select>
                </div>

                <div>
                    <button>提交</button>
                </div>
            </form>
        </div>
    );
}
