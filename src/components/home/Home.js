import React, { Fragment } from "react";
import CreateMemory from "../createMemory/CreateMemory";
import Header from "../header/Header";
import Post from "../post/Post";
import Search from "../search/Search";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <section className="container-fluid">
        <div className="row">
          <div className="col-11 mx-auto max-width py-5 ">
            <div className="row">
              <div className="col-md-8">
                <div className="row ">
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                  <div className="col-sm-6 col-lg-4 col-xxl-3 mb-4">
                    <Post />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <Search />
                </div>
                <div>
                  <CreateMemory />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
