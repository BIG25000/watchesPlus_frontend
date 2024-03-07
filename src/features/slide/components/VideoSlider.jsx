import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const VideoCarousel = () => {
  const videoIds = ['Xzi9uoAA6ek', '18XnJ2J-NsI', 'ow_papkKgm4'];
  const playerRef = useRef(null);

  const playNextVideo = () => {
    const currentIndex = videoIds.indexOf(playerRef.current.props.videoId);
    const nextIndex = (currentIndex + 1) % videoIds.length;
    const nextVideoId = videoIds[nextIndex];
    playerRef.current.internalPlayer.loadVideoById(nextVideoId);
  };

  useEffect(() => {
    const interval = setInterval(playNextVideo, 5000); // เล่นวิดีโอถัดไปทุก 5 วินาที

    return () => {
      clearInterval(interval);
    };
  }, []);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1, // ไม่แสดงโลโก้ YouTube บนเพลย์เออร์
      controls: 0,
      showinfo: 0,
      mute: 1,
    },
  };

  return (
    <Carousel
      showArrows={true}
      emulateTouch={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
    >
      {videoIds.map((id) => (
        <div key={id}>
          <YouTube
            ref={playerRef}
            videoId={id}
            opts={opts}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;
