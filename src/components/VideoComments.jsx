import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import axios from "axios";

const VideoComments = ({ videoId }) => {
  console.log(videoId);
  const [videocomment, setVideoComment] = useState([]); 
  useEffect(() => {
    fetchFromAPI(
      `commentThreads?part=snippets&videoId=${videoId}&maxResults=100`
    ).then((data) => {
      setVideoComment(data);
    });
  }, [videoId]);
  console.log(videocomment);
  return (
    <>
      <Stack>
        <Box>
          <Avatar />
        </Box>
      </Stack>
    </>
  );
};

export default VideoComments;
