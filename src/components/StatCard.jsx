function StatCard(props) {
  const count = Number(props.count).toLocaleString();

  return (
    <div className="text-center">
      <h2 className=" text-lg">{props.title}</h2>
      <div className="gap-4 text-xl">
        <h3 className=" text-sm font-semibold ">
          {count}
        </h3>
      </div>
    </div>
  );
}

export default StatCard;
