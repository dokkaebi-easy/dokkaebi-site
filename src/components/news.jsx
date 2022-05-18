import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ArticleIcon from "@mui/icons-material/Article";
import ExtensionIcon from "@mui/icons-material/Extension";
import Typography from "@mui/material/Typography";

export const News = () => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>News</h2>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "24px", px: 2 }}>
                <Typography variant="h6" component="span">
                  13 May
                </Typography>
                <Typography variant="h4">dockerby 0.0.6 released</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <PlayCircleFilledWhiteIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "24px", px: 2 }}>
                <Typography variant="h6" component="span"></Typography>
                <Typography variant="h4">dockerby Proceeding</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              ></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "24px", px: 2 }}>
                <Typography variant="h6" component="span">
                  04 May
                </Typography>
                <Typography variant="h4">dockerby 0.0.4 released</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined">
                  <ExtensionIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "24px", px: 2 }}>
                <Typography variant="h6" component="span">
                  29 Apr
                </Typography>
                <Typography variant="h4">dockerby 0.0.3 released</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                  <ArticleIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "24px", px: 2 }}>
                <Typography variant="h6" component="span">
                  11 Apr
                </Typography>
                <Typography variant="h4"> dockerby project planning</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="row">
          <div className="portfolio-items"></div>
        </div>
      </div>
    </div>
  );
};
