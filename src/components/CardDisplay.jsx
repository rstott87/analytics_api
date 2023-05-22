function CardDisplay (props) {
    return (
      <div className="border-2 p-2">
        <ul>{props.listOfPodcastCards}</ul>
      </div>
    );
}

export default CardDisplay;