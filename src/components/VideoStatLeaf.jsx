function VideoStatLeaf(props) {
  return (
    <div className="flex flex-col items-start rounded-md p-2 text-sm ">
      <h2 className="text-sm border-b border-violet-700 text-center font-bold">{props.title}</h2>
      <h3 className="text-center text-sm font-light ">
        {props.count}
      </h3>
    </div>
  );
}

export default VideoStatLeaf;
