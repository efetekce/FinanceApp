type Props = {
  title: string;
  subTitle: string;
};
const CompanyTile = ({ title, subTitle }: Props) => {
  return (
    <div className="px-4 w-full lg:w-6/12 xl:w-3/12">
      <div className="relative flex flex-col bg-white shadow-lg mb-6 xl:mb-0 rounded-lg min-w-0 break-words">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative flex-grow flex-1 pr-4 w-full max-w-full">
              <h5 className="font-bold text-blueGray-400 text-xs uppercase">
                {title}
              </h5>

              <span className="font-bold text-xl">{subTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyTile;
