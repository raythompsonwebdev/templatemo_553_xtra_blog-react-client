
const CommentForm = (props:{author:string}) => {

  // eslint-disable-next-line no-console
  console.log(props)
  return (
    <form action="" className="mb-6">
      <h2 className="tm-color-primary tm-post-title mb-6">Your comment</h2>
      <div className="mb-4">
        <input className="form-control" name="name" type="text" />
      </div>
      <div className="mb-4">
        <input className="form-control" name="email" type="text" />
      </div>
      <div className="mb-4">
        <textarea className="form-control" name="message" rows={6} />
      </div>
      <div className="text-right">
        <button type="submit" className="tm-btn tm-btn-primary tm-btn-small">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
