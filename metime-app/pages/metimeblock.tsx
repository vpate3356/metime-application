import ApiCalendar from "react-google-calendar-api";
import React, { ReactNode, SyntheticEvent, useState } from "react";
import { activity, activityPlace, address } from "./activities";
import styles from '@/styles/Home.module.css'

const config = {
  clientId:
    "559285053497-c4urr4uoqn7c6j8f2ql49lq78hkfq7ia.apps.googleusercontent.com",
  apiKey: "AIzaSyAx5aRpOPZ9xkzsNajrwIVjqo1F6LydzSo",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);
// const { google } = require('googleapis');

function randomStartTime() {
  // set the time range for finding free time
  const startHour = 8; // 8:00 am
  const endHour = 22; // 10:00 pm
  const eventDuration = 60; //Event duration in minutes

  const now = new Date();
  const currentHour = now.getHours();

  // If the current time is after 10pm, return null
  if (currentHour >= endHour) {
    return null;
  }

  // Calculate the random start time
  const randomHour = Math.floor(
    Math.random() * (endHour - Math.max(currentHour, startHour)) +
      Math.max(currentHour, startHour)
  );
  const randomMinute = Math.floor(Math.random() * 60);

  const startDate = new Date();
  startDate.setHours(randomHour, randomMinute, 0, 0);

  const endDate = new Date(startDate.getTime() + eventDuration * 60 * 1000); // Add 60 minutes

  return {
    start: startDate.toISOString(),
    end: endDate.toISOString(),
  };
}

const MeTimeBlock = () => {
  const [events, setEvents] = useState([]);
  const [calendars, setCalendars] = useState([]);
  const handleItemClick = (event: SyntheticEvent<any>, name: string): void => {
    if (name === "Allow Calendar Access") {
      apiCalendar.handleAuthClick();
    } else if (name === "Switch User") {
      apiCalendar.handleSignoutClick();
    }
  };
  const createEvent = () => {
    const startTime = randomStartTime();
    if (!startTime) {
      console.log("No available time slots");
      return;
    }
    const eventFromNow = {
      start: {
        dateTime: startTime.start,
        timeZone: "America/Los_Angeles",
      },
      end: {
        dateTime: startTime.end,
        timeZone: "America/Los_Angeles",
      },
      summary: "MeTime Block",
    };
    apiCalendar
    .createEvent(eventFromNow)
    .then((result: any) => {
      console.log(result);
    })
    .catch((error: any) => {
      console.log(error);
    });
};

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={(e) => handleItemClick(e, "Allow Calendar Access")} className={styles.button}>Allow Calendar Access</button>
        <button onClick={(e) => handleItemClick(e, "Switch User")} className={styles.button}>
          Switch User
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={(e) => {
            const startTime = randomStartTime();
            if (!startTime) {
              console.log("No available time slots");
              return;
            }
            const eventFromNow = {
              start: {
                dateTime: startTime.start,
                timeZone: "America/Los_Angeles",
              },
              end: {
                dateTime: startTime.end,
                timeZone: "America/Los_Angeles",
              },
              summary: "MeTime Block",
              description: "Your MeTime activity today is: " + activity + "! MeTime suggests you go to: " + activityPlace,
              location: address,
              colorId: "2",
            };

            apiCalendar
              .createEvent(eventFromNow)
              .then((result: object) => {
                console.log(result);
              })
              .catch((error: any) => {
                console.log(error);
              });
          }} className={styles.button}
        >
          Create MeTime Block
        </button>
      </div>
    </div>
  );
}

export default MeTimeBlock