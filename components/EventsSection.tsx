"use client";

import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import EventCard from "./EventCard";
import { ApiResponse, UpcomingEvent } from "@/lib/types";
import LoadingSpinner from "./LoadingSpinner";

const Secret = process.env.NEXT_PUBLIC_AZURE_SECRET;

const EventsSection = () => {
  const [events, setEvents] = useState<UpcomingEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://gg-backend-assignment.azurewebsites.net/api/Events?code=${Secret}==&page=${page}&type=upcoming`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = (await response.json()) as ApiResponse;

        setEvents((prevEvents) => [...prevEvents, ...(data.events as UpcomingEvent[])]);

        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [page]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (
      scrollTop + clientHeight >= scrollHeight - 100 &&
      page === totalPages && // Check if page is equal to totalPages
      !loading
    ) {
      // Stop fetching
      return;
    }

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, totalPages, loading]);

  return (
    <div className="mx-36 mt-[550px] absolute ">
      {/* upcoming event heading */}
      <div className="flex items-center font-medium text-xl">
        Upcoming Event <FaArrowRightLong className="ml-5" />
      </div>
      {/* the main events section */}
      <div className="mt-14 flex flex-wrap gap-10">
        {events.map((event, index) => (
          <EventCard upcomingevent={event} key={index} />
        ))}
        {loading && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default EventsSection;
