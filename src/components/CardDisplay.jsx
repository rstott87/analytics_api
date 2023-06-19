function CardDisplay(props) {
  return (
    <div className="w-full min-w-min px-5 md:px-10">
      <ul>{props.listOfPodcastCards}</ul>
    </div>
  );
}

export default CardDisplay;
