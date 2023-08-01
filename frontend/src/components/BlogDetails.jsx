import React, { useState } from 'react';
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import axios from 'axios';

const BlogDetails = () => {

    const [blog, setBlog] = useState([]);

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            const resultBlog = await axios.get(`/api/blogs/find/${id}`);
            console.log(resultBlog.data);
            setBlog(resultBlog.data);
        }

        fetchData();
    }, [id]);

    return (
        <div id='blog' className='hb_container blog'>
            <div className="hb_row">
                <div className="hb_col">
                    <div className='hb_div'>
                        <div className='hb_blogs blog'>
                            <h3 className='blog_title'>{blog.title}</h3>
                            <p className='blog_desc'>{blog.description}</p>
                            <div className='hb_blogFooter blog'>
                                <span>{blog.author}</span>
                                <span>{blog.createdAt?.slice(0,10)}</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BlogDetails