import React from "react";
import "./map.scss";
import {
  Flex,
  Heading,
  MapView,
  Button,
  View,
  Text,
  Image,
} from "@aws-amplify/ui-react";
const locationData = [
  {
    id: 1,
    title: "Amplify Team Dinner",
    description:
      "It's not everyone, but I'm grateful I was able to see folks in real life and bond over food, drinks and laughs!",
    image:
      "https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_20220330_204113.jpeg",
    longitude: -122.3098577,
    latitude: 47.6248646,
  },
  {
    id: 2,
    title: "Pike Place Market",
    description:
      "I went to this farmer's market everyday and after 5 days I was still finding new things! Plus the food is amazing🤤",
    image:
      "https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4767.jpeg",
    longitude: -122.3443816,
    latitude: 47.6097236,
  },
  {
    id: 3,
    title: "Seattle Underground Tour",
    description:
      "Seattle has so much history! I was able to walk through an old bootlegger's hole from prohibition days.",
    image:
      "https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4826.jpg",
    longitude: -122.3358691,
    latitude: 47.6023561,
  },
  {
    id: 4,
    title: "Amazon Spheres",
    description:
      "This botanical workspace is a nice way to escape the Seattle weather.",
    image:
      "https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4904.jpeg",
    longitude: -122.3415544,
    latitude: 47.6158954,
  },
  {
    id: 5,
    title: "Bainbridge Island Ferry",
    description:
      "I took my very first ferry ride! My wife and I spent a day away from the city by visting the quaint island of Bainbridge",
    image:
      "https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_4951.jpeg",
    longitude: -122.3402124,
    latitude: 47.6025113,
  },
  {
    id: 6,
    title: "My first day in the office (Blackfoot)",
    description:
      "Rachel Lee goes down in history as the first in-person coworker I met💜",
    image:
      "https://aws-map-seattle-blog-pics.s3.amazonaws.com/public/IMG_7282.jpeg",
    longitude: -122.3381659,
    latitude: 47.615686,
  },
];

function Map() {
  return (
    <div className="map">
      <View>
        <Flex direction={"column"} alignItems={"center"}>
          <MapView
            initialViewState={{
              longitude: -122.3381659,
              latitude: 47.615686,
              zoom: 12,
            }}
            style={{ width: "100%", height: "250px" }}
          ></MapView>
        </Flex>
      </View>
    </div>
  );
}

export default Map;
