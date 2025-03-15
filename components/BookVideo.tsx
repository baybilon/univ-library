"use client";
import config from "@/lib/config";
import { IKVideo, ImageKitProvider } from "imagekitio-next";
import path from "path";
import React from "react";

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div>
      <ImageKitProvider
        publicKey={config.env.imagekit.publicKey}
        urlEndpoint={config.env.imagekit.urlEndpoint}
      >
        <IKVideo
          path={videoUrl}
          controls={true}
          className="w-full rounded-xl"
        />
      </ImageKitProvider>
    </div>
  );
};

export default BookVideo;
