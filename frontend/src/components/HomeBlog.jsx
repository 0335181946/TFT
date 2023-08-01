import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import HomeBlogItem from './HomeBlogItem';

const HomeBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resultBlog = await axios.get('/api/blogs/all');
            setBlogs(resultBlog.data);
        }

        fetchData();
    }, []);


    return (
        <div id='blog' className='hb_container'>
            <div className="hb_row">
                <div className="hb_col">
                    <div className='hb_div'>
                      
                        {
                            blogs.length === 0 ? (
                                <h3 className='no_data'>NO BLOG</h3>
                            ) : (
                                <div className='hb_blogs'> {
                                    blogs.slice(-6).map((blog) => (
                                        <HomeBlogItem key={blog._id} blog={blog} />
                                    ))
                                }
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="hb_col">
                    <Link to="/blogs" className="hb_more">VIEW MORE<i class="fas fa-arrow-alt-circle-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
