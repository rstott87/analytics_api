function VideoStatLeaf(props) {
  return (
    <div className="flex flex-col gap-1 rounded-md border-2 border-slate-200 bg-slate-100 p-3 text-lg text-gray-800 shadow-md md:text-lg">
      <h2 className=" text-left text-lg font-medium">{props.title}</h2>
      <h3 className="text-left font-semibold text-violet-800 md:text-lg">
        {props.count}
      </h3>
    </div>
  );
}

export default VideoStatLeaf;
