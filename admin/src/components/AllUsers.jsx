import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import AllUser from './AllUser';

const AllUsers = () => {

    const [users, setUsers] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const pageCount = Math.ceil(users.length / usersPerPage);

    const handlePageClick = ({ selected }) => {
        setPageNumber(selected);
    }

    useEffect(() => {
        const fetchData = async () => {
            const resultUser = await axios.get('/api/users/all');

            const resultUserData = resultUser.data;
            const sortResultUserData = resultUserData.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
            setUsers(sortResultUserData);
        }
        fetchData();
    }, []);

  return (
    <div className='ab_container'>
            <div className='ab_row'>
                <h2 className='ab_title'>All Users</h2>
            </div>
            <div className="ab_row">
                <div className="ab_col">
                    <div className='ab_div'>
                    {
                            users.length === 0 ? (
                                <h3 className='no_data'>No user</h3>
                            ) : (
                                <>
                                <div className='ab_blogs'> {
                                    users.slice(pagesVisited,pagesVisited + usersPerPage).map((user) => (
                                        <AllUser key={user._id} user={user} />
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

export default AllUsers