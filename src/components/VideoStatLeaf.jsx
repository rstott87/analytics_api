function VideoStatLeaf(props) {
  return (
    <div className="flex flex-col  items-start  rounded-md p-2 text-sm  md:text-lg">
      <h2 className="text-md text-center font-medium">{props.title}</h2>
      <h3 className="text-center font-semibold md:text-lg">
        {props.count}
      </h3>
    </div>
  );
}

export default VideoStatLeaf;
