'use client'

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, CardBody, Typography } from "@material-tailwind/react";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="max-w-sm mx-auto p-4 ">
      <div className="flex flex-col items-center">
        <Typography variant="h4" className="mb-4 text-gray-800 ">
          Countdown
        </Typography>
        <div className="flex space-x-4 text-center">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit}>
              <Typography variant="h5" className="text-indigo-600">
                {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
              </Typography>
              <Typography variant="small" className="uppercase text-gray-500">
                {unit}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Countdown.propTypes = {
  targetDate: PropTypes.string.isRequired, // e.g., "2025-06-01T18:00:00"
};

export default Countdown;
