import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { storeContext } from "../utils/store";
import { data } from "../utils/data";
import GridCard from "../components/GridCard";
import ListCard from "../components/ListCard";
import Toggle from "react-toggle";

const ListingScreen = () => {
    const { category } = useParams();
    const { fetchData, eventsData } = useContext(storeContext);
    const [grid, setGrid] = useState(true);

    useEffect(() => {
        fetchData(data[category].data);
    }, []);

    return (
        <section className="px-8 py-4 mt-3">
            <div className="flex justify-center items-center">
                <h1 className=" mb-4 text-3xl md:text-4xl font-semibold font-serif lg:text-4xl">
                    {data[category].category} events
                </h1>
            </div>
            <div className="flex justify-center items-center gap-x-1">
                <Toggle checked={grid} onChange={() => setGrid(!grid)} />
                <label htmlFor="cheese-status">
                    {grid
                        ? "Showing events in Grid format"
                        : "Showing events in List format"}
                </label>
            </div>
            <br />
            <div>
                <div className="">
                    {grid ? (
                        <section className="flex items-stretch justify-center flex-wrap gap-x-10 gap-y-10">
                            {eventsData
                                ? eventsData.map((event) => {
                                      return (
                                          <GridCard
                                              thumb_url={event.thumb_url}
                                              eventname_raw={
                                                  event.eventname_raw
                                              }
                                              start_time_display={
                                                  event.start_time_display
                                              }
                                              tags={event.categories}
                                              location={event.location}
                                              link={event.share_url}
                                          />
                                      );
                                  })
                                : ""}
                        </section>
                    ) : (
                        <section className="flex flex-col gap-y-5 rounded-md">
                            {eventsData
                                ? eventsData.map((event) => {
                                      return (
                                          <ListCard
                                              thumb_url={event.thumb_url}
                                              eventname_raw={
                                                  event.eventname_raw
                                              }
                                              start_time_display={
                                                  event.start_time_display
                                              }
                                              location={event.location}
                                              link={event.share_url}
                                          />
                                      );
                                  })
                                : ""}
                        </section>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ListingScreen;
