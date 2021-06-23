// eslint-disable-next-line react/prop-types
const TransCell = ({ children, metaData, transactionMetaDataFilter }) => {
  return (
    <th
      onClick={() => {
        if (metaData) transactionMetaDataFilter(metaData);
      }}
      className="filter-types pointer"
    >
      {children}
    </th>
  );
};

export default TransCell;
