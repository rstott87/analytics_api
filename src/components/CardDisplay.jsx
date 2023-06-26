function CardDisplay(props) {
  return (
    <div className=" min-h-screen min-w-min md:px-10">
      <ul>{props.listOfPodcastCards}</ul>
    </div>
  );
}

export default CardDisplay;
