import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Banner from "@pulbic/images/banner.png";
import "./styles.css";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setMotionState,
  selectMotionState,
} from "../store/motion/motion.slice";

const HeroBanner: React.FC = () => {
  const dispatch = useDispatch();
  const showMotion = useSelector(selectMotionState);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setMotionState(false));
    }, 2000);
  });

  return (
    <div className="App-section">
      {showMotion && (
        <div className="App-section-motion">
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1, 100],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["10%", "10%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeatDelay: 1,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
