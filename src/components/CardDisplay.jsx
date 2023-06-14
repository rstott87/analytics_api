function CardDisplay (props) {
    return (
      <div className="p-10 md:p-20 w-full min-w-min">
        <ul>{props.listOfPodcastCards}</ul>
      </div>
    );
}

export default CardDisplay;