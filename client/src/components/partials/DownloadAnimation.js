import React from "react";
import UseAnimation from "react-useanimations";
import download from "react-useanimations/lib/download";

const DownloadAnimation = () => (
    <UseAnimation
        animation={download}
        fillColor='#0071eb'
        strokeColor='#222'
        size={40}
        autoplay
        //-loop
    />
);

export default DownloadAnimation;
