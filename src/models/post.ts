interface IPost {
    id: number;
    userId?: number;
    title: string;
    body: string;
    views?: number;
    tags?: string[]
}


export default IPost;