import React from "react";
import ArtistCard from "./artist-card.js";
class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar">
          <h5>Similar</h5>
          <hr />
        </div>
        <div className="row centrar">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <ArtistCard
                img={item.image[3]["#text"]}
                titulo={item.name}
                key={i}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default SimilarArtist;
