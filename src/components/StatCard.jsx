function StatCard(props) {
  const count = Number(props.count).toLocaleString();

  return (
    <div className="flex flex-col gap-1 rounded-md border-2 border-slate-200 bg-slate-100 p-4 text-2xl text-gray-800 shadow-md md:text-lg">
      <h2 className=" text-left text-xl font-medium">{props.title}</h2>
      <div className="flex items-center justify-between gap-4 text-xl">
        <h3 className="text-left font-semibold text-violet-800 md:text-lg">
          {count}
        </h3>
        <p className="border-1 min-w-max rounded-full border-green-900 bg-emerald-300 px-2 text-lg text-slate-600">
          ^ {props.percent}%
        </p>
      </div>
    </div>
  );
}

export default StatCard;
