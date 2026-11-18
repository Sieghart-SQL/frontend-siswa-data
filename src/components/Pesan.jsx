function Pesan({ error, success }) {
  return (
    <>
      {error && <div className="alert alert-error">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
    </>
  );
}

export default Pesan;