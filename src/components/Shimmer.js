const Shimmer = () => {
  let cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<div key={i} className="shimmer-card"></div>);
  }
  return (
    <div className="body">
        <div className="shimmer-wrapper">{cards}</div>
    </div>
  );
}

export default Shimmer;
