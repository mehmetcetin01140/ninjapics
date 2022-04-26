import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  selectedCategoryForSearch,
  searchGifs,
  unSplashSearch,
  searchData,
  searchWallpapers,
} from "../actions";
import { withRouter } from "react-router-dom";
import axios from "axios";
function SearchInput(props) {
  const [entry, setEntry] = useState("");
  const [gifs, setGifs] = useState([]);
  const [wallpapers, setWallpapers] = useState([]);
  const [unSplashData, setUnsplashData] = useState([]);
  const apiRequestParams = (entry) => {
    if (props.selectedCategoryForSearchData === "Gif") {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/search?api_key=c3LyeXTWrfBoq10Qr34tVFI1UkbOukx5&q=${entry}&per_page=100`
        )
        .then((response) => setGifs(response.data.data));
    }
    if (props.selectedCategoryForSearchData === "Wallpapers") {
      axios
        .get(
          `https://pixabay.com/api/?key=25459789-16936a0114649c4b999ee26f0&q=${entry}&image_type=photo&per_page=200`
        )
        .then(
          (response) =>
            setWallpapers(response.data.hits) + console.log(response.data.hits)
        );
      axios
        .get(
          `https://api.unsplash.com/search/photos/?client_id=H2Crqny9TAW6McDMqxyE0gI79TaHNt6YkaaFEqBZgY4&query=${entry}&per_page=200`
        )
        .then(
          (response) =>
            setUnsplashData(response.data.results) +
            console.log(response.data.results)
        );
    }
  };

  useEffect(() => {
    props.searchGifs(gifs);
    props.searchWallpapers(wallpapers);
    props.unSplashSearch(unSplashData);
  });

  const onFormSubmit = () => {
    apiRequestParams(entry);
  };

  const selectForSearch = () => {
    var e = document.getElementById("selection");
    var value = e.options[e.selectedIndex].value;
    props.selectedCategoryForSearch(value);
  };

  useEffect(() => {
    if (!entry && props.location.pathname === "/search") {
      props.history.goBack();
    }

    if (entry && props.history.location.pathname !== "/search") {
      props.history.push("/search");
    }

    selectForSearch();
    if (props.selectedCategoryForSearchData === "Wallpapers") {
      onFormSubmit();
    }
  }, [props.selectedCategoryForSearchData, entry, props.history]);

  return (
    <div className="responsive">
      <div className="ui action input inputSize">
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          onChange={(event) => setEntry(event.target.value)}
          value={entry}
        />
        <select
          className="ui search dropdown"
          id="selection"
          onChange={selectForSearch}
        >
          <option value="Wallpapers">Wallpapers</option>
          <option value="Gif">Gif</option>
        </select>
        <div className="ui mini button searchButton" onClick={onFormSubmit}>
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedCategoryForSearchData: state.selectedCategoryForSearchData,
    searchData: state.searchData,
    wallpapersFromSearch: state.wallpapersFromSearch,
    unSplashFromSearch: state.unSplashFromSearch,
  };
};
export default connect(mapStateToProps, {
  selectedCategoryForSearch,
  searchGifs,
  unSplashSearch,
  searchData,
  searchWallpapers,
})(withRouter(SearchInput));
