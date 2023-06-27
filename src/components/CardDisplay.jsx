function CardDisplay(props) {
  return (
    <div className=" min-h-screen min-w-min max-w-lg">
      <ul>{props.listOfPodcastCards}</ul>
    </div>
  );
}

export default CardDisplay;
