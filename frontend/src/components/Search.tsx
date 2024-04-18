interface Props {
  search: string | undefined;
  onSearchSubmit: (e: React.SyntheticEvent) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ onSearchChange, onSearchSubmit, search }: Props) => {
  return (
    <>
      <form onSubmit={onSearchSubmit} className="flex flex-col bg-slate-400">
        <input
          value={search}
          onChange={onSearchChange}
          className="focus:outline-2 ring-blue-200 focus:outline-blue-400 place-self-center"
        />
      </form>
    </>
  );
};
export default Search;
