import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

import CommentContainer from "./CommentContainer";
const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const sidebar=useSelector(store => store.app.isMenuOpen);
  return (
    <div className="flex flex-col w-full">
      <div className="px-5 flex w-full">
        <div >
          <iframe          
          width="1070"
          height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="Youtube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
        
      </div>
      <CommentContainer />
    </div>
  );
};

export default WatchPage;
