import * as THREE from "three";

export const demoVideoTexture = () => {
  const video = document.createElement("video");
  video.src = "/assets/GuildMovie_01.mp4";
  video.muted = "muted";
  video.load();
  video.play();

  //make your video canvas
  const videocanvas = document.createElement("canvas");
  const videocanvasctx = videocanvas.getContext("2d");

  //set its size
  videocanvas.width = 8000;
  videocanvas.height = 6000;

  //draw a black rectangle so that your spheres don't start out transparent
  videocanvasctx.fillStyle = "#000000";
  videocanvasctx.fillRect(0, 0, videocanvas.width, videocanvas.height);
  const videoTexture = new THREE.Texture(videocanvas);

  return [videoTexture, videocanvasctx, video];
};
