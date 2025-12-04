function LogCard({ date, children }) {
  return (
    <div className="log-card">
      <p>Date: {date}</p>
      <div>{children}</div>
    </div>
  );
}

export default LogCard;