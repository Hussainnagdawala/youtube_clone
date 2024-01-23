import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  // console.log(channelDetails);
  console.log(videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetails(data?.items[0]);
    });
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  return (
    <>
      <Box minHeight="95vh">
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetails={channelDetails} marginTop="-113px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </>
  );
};

export default ChannelDetail;
