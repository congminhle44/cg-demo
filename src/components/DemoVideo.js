import { useFrame } from "@react-three/fiber";
import { memo } from "react";
import * as THREE from "three";

const DemoVideo = memo(function MemoVideo() {
  const video = document.createElement("video");
  video.src = "/assets/GuildMovie_01.mp4";
  video.loop = true;
  video.autoplay = true;
  video.muted = "muted";
  video.play();

  //make your video canvas
  const videocanvas = document.createElement("canvas");
  const videocanvasctx = videocanvas.getContext("2d");
  const videoTexture = new THREE.VideoTexture(video);

  useFrame(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      //draw video to canvas starting from upper left corner
      videocanvasctx.drawImage(video, 0, 0);
    }
  });

  // Fix position for demo video monitor
  return (
    <mesh position={[-0.99, 2.2, -3.01]}>
      <planeGeometry args={[2.1, 1.2]} />
      <meshBasicMaterial map={videoTexture} />
    </mesh>
  );
});

export default DemoVideo;
