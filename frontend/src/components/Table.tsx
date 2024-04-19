type Props = {
  testDataCompany: any;
};
const Table = ({ testDataCompany }: Props) => {
  const tableRows = testDataCompany.map((company: any) => {
    return (
      <tr key={company.cik}>
        <td className="p-3">{company.symbol}</td>;
      </tr>
    );
  });

  const tableHeaders= 

  return (
    <div>
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
export default Table;
