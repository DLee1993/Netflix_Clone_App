import React from "react";
import UseAnimations from "react-useanimations";
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import download from "react-useanimations/lib/download";

const DownloadAnimation = () => (
    <UseAnimations animation={download} fillColor='#fff' size={40} strokeColor='#0071eb' autoplay loop />
);

export default DownloadAnimation;
