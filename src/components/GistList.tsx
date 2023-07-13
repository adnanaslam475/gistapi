import React from "react";
import { useSelector } from "react-redux";
import Gist from "./Gist";
import { contentsTypes, githubUser } from "../types/githubUserTypes";
import { IRootState } from "../store";

const GistList = () => {
  const content = useSelector<IRootState, contentsTypes>((state) => state.content);
  const { data, isLoading, errorLogs } = content;
  return (
    <>
      {data?.length && !isLoading ? (
        data?.map((user: githubUser) => (
          <Gist gist={user} key={user.id} loading={isLoading} />
        ))
      ) : (
        <>
          {(isLoading &&
            ["", "", "", ""].map((_, i) => (
              <div key={i} className="card loading">
                <h4></h4>
                <div className="content">
                  <h4 className="first"></h4>
                  <h4 className="second"></h4>
                </div>
              </div>
            ))) ||
            (errorLogs && (
              <h1 className="error-msg">Something went wrong</h1>
            )) || <h1 className="error-msg">User Not Found</h1>}
        </>
      )}
    </>
  );
};

export default GistList;
