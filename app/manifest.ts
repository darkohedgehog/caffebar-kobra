import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Caffe Bar Kobra",
    short_name: "Kobra",
    description: "Digitalni cjenik Caffe Bar Kobra",
    start_url: "/",
    display: "standalone",
    background_color: "#021b12",
    theme_color: "#021b12",
    icons: [
      { src: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { src: "/favicon-256x256.png", sizes: "256x256", type: "image/png" }
    ]
  };
}