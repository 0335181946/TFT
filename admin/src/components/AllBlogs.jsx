import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllBlog from './AllBlog';
import ReactPaginate from 'react-paginate';

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 10;
    const pagesVisited = pageNumber * blogsPerPage;

    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }


    useEffect(() => {
        const fetchData = async () => {
            const resultBlog = await axios.get('/api/blogs/all');

            const resultBlogData = resultBlog.data;
            const sortResultBlogData = resultBlogData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            setBlogs(sortResultBlogData);
        }
        fetchData();
    }, []);

    return (
        <div className='ab_container'>
            <div className='ab_row'>
                <h2 className='ab_title'>All Blogs</h2>
            </div>
            <div className="ab_row">
                <div className="ab_col">
                    <div className='ab_div'>
                    {
                            blogs.length === 0 ? (
                                <h3 className='no_data'>NO BLOG</h3>
                            ) : (
                                <>
                                <div className='ab_blogs'> {
                                    blogs.slice(pagesVisited,pagesVisited + blogsPerPage).map((blog) => (
                                        <AllBlog key={blog._id} blog={blog} />
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

export default AllBlogs