function Comment({params}: {
    params: {
        blogId: string,
        commentId: string
    }
}) {

    return (
        <main className="">
            This is comment {params.commentId} page for Blog {params.blogId}
        </main>
    );
}

export default Comment;