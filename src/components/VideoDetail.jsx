import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { CardMedia } from "@mui/material";
import { VideoComments, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { ClassNames } from "@emotion/react";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideo] = useState(null);
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippets,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0]);
    });
    fetchFromAPI(
      `search?part=snippets&relatedToVideoId=${id}&type="video"`
    ).then((data) => {
      setVideo(data.items);
    });
  }, [id]);
  console.log(videos);
  if (!videoDetail?.snippet) return "loading....";
  const {
    snippet: { title, channelId, channelTitle, thumbnails },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <>
      <Box minHeight="95vh">
        <Stack direction={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <Box sx={{ width: "100%", top: "86px", position: "sticky" }}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
              />
              <Typography color="#fff" variant="h5" fontWeight="bold" p={1}>
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ color: "#fff" }}
                py={1}
                px={2}
              >
                <Link to={`/channel/${channelId}`}>
                  {/* <CardMedia image={thumbnails.default.url}/> */}
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    sx={{ color: "#fff" }}
                  >
                    {channelTitle}
                    <CheckCircle
                      sx={{ color: "gray", ml: "5px", fontSize: "12px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: "0.7" }}>
                    {parseInt(likeCount).toLocaleString()} like
                  </Typography>
                </Stack>
              </Stack>
              <VideoComments videoId={id} />
            </Box>
          </Box>
          <Box
            px={2}
            py={{ md: 1, xs: 5 }}
            justifyContent="center"
            alignItems="center"
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default VideoDetail;
