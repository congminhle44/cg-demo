import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const DemoVideo = ({ position, scale }) => {
  const video = document.createElement("video");
  video.src = "/assets/GuildMovie_01.mp4";
  video.loop = true;
  video.muted = "muted";
  video.load();
  video.play();

  //make your video canvas
  const videocanvas = document.createElement("canvas");
  const videocanvasctx = videocanvas.getContext("2d");

  //set its size
  videocanvas.width = 640;
  videocanvas.height = 480;

  //draw a black rectangle so that your spheres don't start out transparent
  videocanvasctx.fillStyle = "#000000";
  videocanvasctx.fillRect(0, 0, videocanvas.width, videocanvas.height);
  const videoTexture = new THREE.Texture(videocanvas);

  useFrame(() => {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      //draw video to canvas starting from upper left corner
      videocanvasctx.drawImage(video, 0, 0);
      //tell texture object it needs to be updated
      videoTexture.needsUpdate = true;
    }
  });

  return (
    <mesh position={position}>
      <planeGeometry args={scale} />
      <meshBasicMaterial map={videoTexture} />
    </mesh>
  );
};

export default DemoVideo;
