function CardDisplay(props) {
  return <ul className="flex flex-col gap-4">{props.listOfPodcastCards}</ul>;
}

export default CardDisplay;
