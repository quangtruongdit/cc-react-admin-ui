import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts, selectPostsStatus, selectPostsError } from '../../services/apis/posts';
import type { AppDispatch } from '../../store';
import SinglePost from '../../components/post/SinglePost';
import "./posts.scss";

export const useAppDispatch = () => useDispatch<AppDispatch>();

const Posts = () => {
    // Get the dispatch function from Redux
    const dispatch = useAppDispatch();

    // Get the posts data, status, and error from the store
    const posts = useSelector(selectAllPosts);
    const status = useSelector(selectPostsStatus);
    const error = useSelector(selectPostsError);

    // Fetch posts data when the component mounts
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // Render the component based on the status and error
    if (status === 'loading') {
        return <div>Loading...</div>;
    } else if (status === 'succeeded') {
        return (
            <div>
                <h1>Posts</h1>
                <div className='posts'>
                    {posts.map((post) => (
                        <SinglePost {...post}></SinglePost>
                    ))}
                </div>
            </div>
        );
    } else if (status === 'failed') {
        return <div>Error: {error}</div>;
    } else {
        return null;
    }
};

export default Posts;