export default function ListCard({
    thumb_url,
    eventname_raw,
    start_time_display,
    location,
    link,
}) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 bg-white shadow-md w-full">
            <div className="flex justify-start md:justify-between gap-x-2 items-center">
                <div className="flex items-center space-x-4">
                    <img
                        alt={eventname_raw}
                        className="h-12 w-12"
                        height="50"
                        src={thumb_url}
                        style={{
                            aspectRatio: "50/50",
                            objectFit: "cover",
                        }}
                        width="50"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="font-medium text-sm sm:text-base md:text-lg">
                        {eventname_raw}
                    </span>
                    <span className="text-gray-500 text-sm md:text-base">
                        {start_time_display}
                    </span>
                </div>
                <div>
                    <div className=" md:items-center justify-between gap-x-2 hidden md:flex">
                        <span className="text-gray-500">
                            {location.split(" ").slice(0, 3).join(" ")}
                        </span>
                        <br />
                        <a
                            href={link}
                            target="_blank"
                            className="bg-black px-3 py-1.5 md:px-4 lg:px-6 py-1.5 text-white rounded-md"
                        >
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
