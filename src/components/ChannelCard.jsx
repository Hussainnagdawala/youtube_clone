import React from "react";
import { Box, CardMedia, Typography, CardContent } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constatnt";
const ChannelCard = ({ channelDetails,marginTop }) => {
  // console.log(channelDetails.snippet.thumbnails.high.url);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: " center",
        alignItems: "center",
        width: { xs: "356px", md: "300px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
            sx={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircle sx={{ fontSize: 14, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography sx={{color: "gray"}}>
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}
              
               Subscriber
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};
export default ChannelCard;
