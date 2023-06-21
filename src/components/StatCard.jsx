function StatCard(props) {
  const count = Number(props.count).toLocaleString();

  return (
    <div className="flex flex-col gap-1 rounded-md border-2 border-slate-200 bg-slate-100 p-4 text-2xl text-gray-800 shadow-md md:text-lg">
      <h2 className=" text-left font-medium text-xl">{props.title}</h2>
      <div className="text-xl items-center flex justify-between gap-4">
        <h3 className="text-left font-semibold text-violet-800 md:text-lg">
          {count}
        </h3>
        <p className="text-lg rounded-full min-w-max bg-emerald-300 border-1 border-green-900 px-2 text-slate-600">
          ^ {props.percent}%
        </p>
      </div>
    </div>
  );
}

export default StatCard;
