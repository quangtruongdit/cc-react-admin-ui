import { ErrorBoundary } from "react-error-boundary";
import "./singlePost.scss";
import UnknownError from "../../pages/errors/UnknownError";

type IProps = {
    id: number;
    userId?: number;
    title: string;
    body: string;
    views?: number;
    tags?: string[]
}

const SinglePost = ((post: IProps) => {
    return (
        <div className="singlePost" key={post.id}>
            <div className="title">
                <img src="post.svg" alt="Post Icon" />
                <span>{post.title}</span>
            </div>
            <span className="body">{post.body}</span>
            <div className="views">
                <span>Views: {post.views}</span>
            </div>
            <div className="tags">
                {post && post.tags && post.tags.length > 0 && (
                    <ul>
                        {post.tags.map((tag, index) => (
                            <li key={index} className="tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
});


export default SinglePost;