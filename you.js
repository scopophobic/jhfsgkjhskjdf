skjfhgksjdfghkjsdhfkjimport React from "react";
import { useState } from 'react';
// import Navbar from '../Navbar/Navbar'
import "./newdev.css";
import SearchIcon from "@mui/icons-material/Search";
import NewSideNav from "../Navbar/NewSideNav";

import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import BookIcon from "@mui/icons-material/Book";
import DevicesIcon from "@mui/icons-material/Devices";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const NewDev = () => {
  const [searchText, setSearchText] = useState("");
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearchInputFocus = (event) => {
    setShowRecommendations(true);
  };

  const handleSearchInputBlur = () => {
    setShowRecommendations(false);
  };
  const recommendations = [
    "Recommendation 1",
    "Recommendation 2",
    "Recommendation 3",
    "Recommendation 4",
    "Recommendation 5",
  ];

  const devSideNavElement = [
    {
      href: "/Devefolio",
      name: "Dev-Home",
      icon: <HomeIcon className="icon" />,
    },
    {
      href: "/register",
      name: "Categories",
      icon: <EventNoteIcon className="icon" />,
    },
    {
      href: "/newdev",
      name: "Trending",
      icon: <BookIcon className="icon" />,
    },
    {
      href: "/developers",
      name: "Developer",
      icon: <DevicesIcon className="icon" />,
    },
    {
      href: "",
      name: "Saved",
      icon: <BookmarksIcon className="icon" />,
    },
    {
      href: "/upload",
      name: "Upload",
      icon: <FileUploadIcon className="icon" />,
    },
    {
      href: "/admindashbaord",
      name: "Admin Dashbaord",
    },
  ];

  return (
    <div id="developer-div" style={{ display: "flex" }}>
      <NewSideNav name={devSideNavElement} />
      <div>
        <div className="dev-home">
          <div className="dev_home_bg">
            <video
              className="hero-media-asset is-visible"
              autoPlay
              muted
              loop
              playsInline
              data-hero-video
              data-src-lg="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906"
              data-src-sm="https://cdn.dribbble.com/uploads/39418/original/0cc960a3bf612d0badc4f6165eb36f7b.mp4?1657824915"
            >
              <source
                src="https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906"
                type="video/mp4"
              />
            </video>
          </div>

          <div className="navigation_bar">
                        <div className='navbar_items'>
                            <a href="/"><li>Discover</li></a>
                            <a href="/"><li>Mobile</li></a>
                            <a href="/"><li>Web Design</li></a>
                            <a href="/"><li>Product Design</li></a>
                            <a href="/"><li>Branding</li></a>
                            <a href="/"><li>Illustration</li></a>
                            <a href="/"><li>Web Templets</li></a>
                        </div>
                    </div>

          {/* <div className="writeups">
                        <p>Explore the world’s leading design portfolios</p>
                        <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
                    </div> */}

          <div className="input form-group">
            <div className="search-bar-container">
            <input
              className="form-control searchbar"
              type="search"
              placeholder="Search"
              value={searchText}
              onChange={handleSearchInputChange}
              onFocus={handleSearchInputFocus}
              onBlur={handleSearchInputBlur}
            />
            {showRecommendations && (
              <div className="recommendations-container">
                {recommendations.map((recommendation) => (
                  <li key={recommendation}>{recommendation}</li>
                ))}
              </div>
            )}
            
            <span>
              <button className="btn btn-sm btn-light" type="submit">
                <SearchIcon />
              </button>
            </span>
          </div>
          </div>
        </div>

        <div className="container-fluid" id="content_list">
          <div className="dev-content-lists ">
            <div className="item col-lg-4 col-md-4 col-sm-6">
              <div className="card_front">
                <div id="image_holder">
                  <a href="/">
                    <img
                      src="https://media.gettyimages.com/id/482018359/photo/india-gate-new-delhi.jpg?s=612x612&w=gi&k=20&c=e9heXVuTwxzgoqCl2mEQjti5yAVKNZJgg9MtbfPcQlM="
                      alt=""
                    />
                  </a>
                </div>

                <div id="templet_info">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt ad id, consequuntur similique repellat, nulla
                    dolores molestias aperiam, officiis nobis earum
                    reprehenderit accusantium tempore! Iusto dolore accusamus
                    ipsam libero fugiat.
                  </p>
                </div>
              </div>
              <hr />
              <div id="templet_caption">
                <p>Title of Content</p>
                <a href="/developer/name_of_developer">Name of Developer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewDev;

//meri bheegi bheegi si
