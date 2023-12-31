import React from "react";

const GridCard = ({
    thumb_url,
    eventname_raw,
    start_time_display,
    tags,
    location,
    link,
}) => {
    return (
        <div className="border bg-card text-card-foreground w-[350px] rounded-lg shadow-lg h-auto">
            <div className="h-full flex flex-col">
                <img
                    src={thumb_url}
                    alt={`thumbnail of ${eventname_raw}`}
                    className="h-[200px] w-full object-cover rounded-sm"
                />
                <div className="flex-grow p-4">
                    <h3 className="text-xl font-semibold mb-2">
                        {eventname_raw}
                    </h3>
                    {start_time_display && (
                        <p className="text-gray-500 mb-4">
                            {start_time_display}
                        </p>
                    )}
                    {tags && (
                        <div className="flex flex-wrap gap-x-2 mb-4">
                            {tags.map((tag) => (
                                <div
                                    key={tag}
                                    className="inline-flex items-center rounded-full border py-0.5 px-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    )}
                    {location && (
                        <p className="text-gray-700 mb-4">{location}</p>
                    )}
                </div>
                {link && (
                    <div className="px-4 mt-auto mb-3">
                        <a
                            href={link}
                            target="_blank"
                            className="block w-full py-2.5 rounded-md bg-black text-white text-center"
                        >
                            Register
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GridCard;
