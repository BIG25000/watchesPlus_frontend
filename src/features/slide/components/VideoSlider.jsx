import React, { useRef } from "react";
import YouTube from "react-youtube";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";
import { useState } from "react";

export default function VideoCarousel() {
  const videoIds = ["Xzi9uoAA6ek", "18XnJ2J-NsI", "ow_papkKgm4"];

  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (index) => {};

  return (
    <div>
      <Carousel
        selectedItem={currentSlide - 1}
        showArrows={true}
        emulateTouch={true}
        infiniteLoop={true}
        onChange={handleSlideChange} // เมื่อเปลี่ยนวิดีโอใน Carousel
        renderItem={(item, props) => <item.type {...item.props} {...props} />}
      >
        {videoIds.map((videoId, index) => (
          <VideoCustom
            key={index}
            videoId={videoId}
            setCurrentSlide={setCurrentSlide}
            totalSlide={videoIds.length}
          />
        ))}
      </Carousel>
    </div>
  );
}

function VideoCustom(props) {
  const { isSelected, videoId, setCurrentSlide, totalSlide } = props;
  // console.log(isSelected, videoId, props);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      if (isSelected) {
        ref.current.playVideo();
      } else {
        ref.current.stopVideo();
      }
    }
  }, [isSelected]);

  const videoOptions = {
    playerVars: {
      autoplay: 0,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };
  return (
    <YouTube
      videoId={videoId}
      opts={videoOptions}
      onReady={(e) => {
        ref.current = e.target;
        if (isSelected) {
          ref.current.playVideo();
        }
      }}
      onEnd={(e) => {
        // console.log("trigger");
        setCurrentSlide((prev) => {
          return totalSlide === prev ? 1 : prev + 1;
        });
      }}
    />
  );
}
