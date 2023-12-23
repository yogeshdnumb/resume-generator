export function Preview({ data }) {
  return (
    <div className="preview">
      <div className="side">
        <img src="" alt="avatar" className="avatar" />
        <div className="contact">
          <h3 className="contact-header">Contact</h3>
          <div className="phone">
            <h4>Phone</h4>
            <p>{data.number}</p>
          </div>
          <div className="email">
            <h4>Email</h4>
            <p>{data.email}</p>
          </div>
          <div className="Address">
            <h4>Address</h4>
            <p>{data.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
