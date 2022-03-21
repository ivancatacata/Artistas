import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Error from "./error.js";
import Loading from "./loading.js";
class SearchResult extends Component {
  state = {
    loading: false,
    data: {
      similarartists: {
        artist: [],
      },
    },
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    this.fetchData(
      "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
        termino +
        "&api_key=78f2858e64a971956f890df11d891787&format=json"
    );
  }
  fetchData = async (url) => {
    this.setState({
      loading: true,
    });
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message,
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.similarartists.artist.map((item, i) => {
              return (
                <ArtistCard
                  img={item.image[2]["#text"]}
                  titulo={item.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
