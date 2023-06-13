function StatCard(props) {
  const count = Number(props.count).toLocaleString();

  return (
    <div className="flex flex-col gap-1 text-2xl md:text-lg p-6 bg-slate-100 rounded-md text-gray-800 border-2 border-slate-200 shadow-md">
      <p className=" text-left font-light">{props.title}</p>
      <div className="flex items-center justify-between">
        <p className="text-left text-violet-800 font-semibold text-3xl md:text-lg">
          {count}
        </p>
        <div className="px-2 bg-emerald-300 rounded-full text-slate-600">
          ^ {props.percent}%
        </div>
      </div>
    </div>
  );
}

export default StatCard;
