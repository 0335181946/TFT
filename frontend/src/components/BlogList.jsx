import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import BlogListItem from './BlogListItem';
import ReactPaginate from 'react-paginate';

const BlogList = () => {

    const [blogs, setBlogs] = useState([]);
    
    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 6;
    const pagesVisited = pageNumber * blogsPerPage;

    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const handlePageClick = ({selected}) => {
        setPageNumber(selected);
    }


    useEffect(() =>{
        const fetchData = async() =>{
            const resultBlog = await axios.get('/api/blogs/all');

            const resultBlogData = resultBlog.data;
            const sortResultBlogData = resultBlogData.sort((a,b) => b.createdAt.localeCompare(a.createdAt));
            setBlogs(sortResultBlogData);
        }
        fetchData();
    }, []);



    return (
        <div id='blog' className='hb_container'>
            <div className='hb_row'>
                <h2 className='sign_title'>BLOG LIST</h2>
            </div>
            <div className="hb_row">
                <div className="hb_col">
                    <div className='hb_div'>
                    {
                            blogs.length === 0 ? (
                                <h3 className='no_data'>NO BLOG</h3>
                            ) : (
                                <>
                                <div className='hb_blogs'> {
                                    blogs.slice(pagesVisited,pagesVisited + blogsPerPage).map((blog) => (
                                        <BlogListItem key={blog._id} blog={blog} />
                                    ))
                                }
                                </div>
                                <ReactPaginate className='filter-pagination' 
                                    previousLabel={"Prev"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}
                                    pageClassName={"pagi-item"}
                                    pageLinkClassName={"pagi-link"}
                                    activeClassName={"pagi-active"}
                                    activeLinkClassName={"pagi-active-link"}
                                    previousClassName={"pagi-item"}
                                    previousLinkClassName={"pagi-link"}
                                    nextClassName={"pagi-item"}
                                    nextLinkClassName={"pagi-link"}
                                    breakClassName={"pagi-item"}
                                    breakLinkClassName={"pagi-link"}
                                    disabledClassName={"disabledPagi"}
                                />
                                
                                </>

                                
                            )
                        }
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default BlogList