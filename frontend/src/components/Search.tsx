interface Props {
  search: string | undefined;
  onClick: (e: React.SyntheticEvent) => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ onClick, onSearch, search }: Props) => {
  return (
    <div>
      <input type="text" value={search} onChange={(e) => onSearch(e)} />
      <button onClick={(e) => onClick(e)}>button</button>
    </div>
  );
};
export default Search;
