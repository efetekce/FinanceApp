interface Props {
  search: string | undefined;
  onSearchSubmit: (e: React.SyntheticEvent) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ onSearchChange, onSearchSubmit, search }: Props) => {
  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input value={search} onChange={onSearchChange} />
      </form>
    </>
  );
};
export default Search;
