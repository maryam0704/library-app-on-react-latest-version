
const ReserveBook = ({  onReserveClick , isReserved}) => {
  return (
    <button onClick={onReserveClick}>
      {isReserved ? "Unreserve" : "Reserve"}
    </button>
  );
};

export default ReserveBook;
