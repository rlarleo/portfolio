import React, { useEffect, useState } from "react";
import { Box, Grid, Stack, styled, Paper } from "@mui/material";
import Banner from "@pulbic/images/banner.png";
import "./styles.css";
import { motion } from "framer-motion";
import "../App.css"; // 이 부분을 확인하세요.

const HeaderTextInput = "Full-Stack Developer";

const HeroBanner: React.FC = () => {
  const [showMotion, setShowMotion] = useState(true);

  const [headerText, setHeaderText] = useState<string>("");
  const [headerCount, setHeaderCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setShowMotion(false);
    }, 1300);
  });

  useEffect(() => {
    if (!showMotion) {
      const interval = setInterval(() => {
        setHeaderText(headerText + HeaderTextInput[headerCount]);
        setHeaderCount(headerCount + 1);
      }, 100);
      if (headerCount === HeaderTextInput.length) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }
  }, [headerCount, headerText, showMotion]);

  return (
    <div className="App-section">
      {showMotion && (
        <div className="App-section-motion">
          <motion.div
            className="box"
            animate={{
              scale: [1, 0.7, 100],
              rotate: [0, 180, 0],
              borderRadius: ["10%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </div>
      )}
      <Grid container spacing={2}>
        <Grid item xs={3} minHeight="20vh">
          <br />
          {headerText}
        </Grid>
        <Grid item xs={10} minHeight="60vh">
          홧팅
        </Grid>
        <Grid item xs={10} minHeight="20vh" className="rubikScribbleText">
          Ki Dae Portfolio
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroBanner;
