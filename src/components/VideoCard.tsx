import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { IVideoItem } from "home";

import { categoryLabelMap } from "utils/categoryLabelMap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StarLevel } from "components/StarLevel";
export const VideoCard: React.FC<IVideoItem> = ({
  video_id,
  title,
  flesch_score,
  category_labels,
}) => {
  const navigate = useNavigate();
  const [validCoverURL, setValidCoverURL] = useState<string>("");
  //句子中选中的单词，不同的UI样式
  useEffect(() => {
    const img = document.createElement("img");
    img.onload = (e) => {
      console.log(e, img);
      if (img.width === 120 && img.height === 90) {
        //加载失败
        setValidCoverURL(
          `https://img.youtube.com/vi/${video_id}/hqdefault.jpg`
        );
      } else {
        setValidCoverURL(`https://img.youtube.com/vi/${video_id}/hq720.jpg`);
      }
    };
    img.src = `https://img.youtube.com/vi/${video_id}/hq720.jpg`;
  }, [video_id]);
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "unset",
      }}
      onClick={() => {
        navigate(`/video?video_id=${video_id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={validCoverURL}
          alt="video thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h3">
            {title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles,
                            with over 6,000 species, ranging across all
                            continents except Antarctica
                          </Typography> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <Box sx={{ minWidth: "70px" }}>难度等级:</Box>
            <StarLevel size="small" color="secondary" score={flesch_score} />
          </Box>
          <Box>
            {category_labels.map((label) => (
              <Chip
                key={label}
                color="info"
                size="small"
                label={categoryLabelMap[label] || label}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
