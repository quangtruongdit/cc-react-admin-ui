import "./singlePost.scss";

type IProps = {
    id: number;
    userId?: number;
    title: string;
    body: string;
}

const SinglePost = ((post: IProps) => {
    return (
        <div className="singlePost" key={post.id}>
            <div className="title">
                <img src="post.svg"></img>
                <span>{post.title}</span>
            </div>
            <span className="body">{post.body}</span>
        </div>
    );
});

export default SinglePost;