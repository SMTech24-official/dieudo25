"use client";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense, lazy, useEffect, useState } from "react";

const ReactPlayer = lazy(() => import("react-player"));

const Video = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Use useEffect to set isMounted to true after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div>
      {isMounted ? (
        <Suspense
          fallback={<Skeleton className="h-[400px] w-full bg-zinc-100" />}
        >
          <ReactPlayer
            height={400}
            width={"100%"}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          />
        </Suspense>
      ) : (
        <Skeleton className="h-[400px] w-full bg-zinc-400" />
      )}
    </div>
  );
};

export default Video;
