import Comments from '~/widgets/comments';

const CommentsPage = () => {
  return (
    <Comments
      onSubmit={() => {
        alert();
      }}
    />
  );
};

export default CommentsPage;
