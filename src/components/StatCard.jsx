function StatCard(props) {
  return (
    <div className=" p-4 bg-slate-200 rounded-md text-gray-800 border-2 border-black">
      <p className="text-xl text-left font-light">{props.title}</p>
      <p className="text-2xl text-left text-violet-600 font-medium">{props.count}</p>
    </div>
  );
}

export default StatCard;
