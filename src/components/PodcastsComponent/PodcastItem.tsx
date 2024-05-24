import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PodcastEpisode } from "../../interfaces/PodcastEpisode";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export const PodcastItem = (props: PodcastEpisode) => {
  const date = new Date(props.date);
  const monthNumber = date.getMonth() + 1;
  const month = monthNumber.toString().padStart(2, "0");
  const formatedDate = `${date.getDate().toString().padStart(2, "0")}/${month}/${date.getFullYear()}`;

  return (
    <>
      <div className="podcast-item">
        <div className="podcast-item-cover">
          <img src={props.coverURL} alt={props.title} />
        </div>
        <div className="podcast-item-detail">
          <h3>{props.title}</h3>
          <small>
            {formatedDate} @ {props.feedName}
          </small>
          <a href={props.link} className="btn btn-link">
            <FontAwesomeIcon icon={faSpotify} />
            <span>ouça_agora();</span>
          </a>
        </div>
      </div>
    </>
  );
};
