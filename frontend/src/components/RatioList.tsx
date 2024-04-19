type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 text-sm truncate">
              {row.label}
            </p>
            <p className="text-gray-500 text-sm truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex items-center font-semibold text-base text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="bg-white shadow mt-4 mb-4 ml-4 p-4 sm:p-6 rounded-lg h-full">
      <ul className="divide-y divided-gray-200">{renderedCells}</ul>
    </div>
  );
};
export default RatioList;
