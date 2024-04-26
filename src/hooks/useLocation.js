import React, { useEffect, useState } from "react";
import { toast } from "react-toastify"; // optional, for notifications
import "react-toastify/dist/ReactToastify.css"; // optional, for notifications

function DetectLocation() {
  const [location, setLocation] = useState(null);

  const detectLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          toast.success(`Location detected: ${latitude}, ${longitude}`); // optional, for notifications
        },
        (error) => {
          toast.error(`Error detecting location: ${error.message}`); // optional, for notifications
        }
      );
    } else {
      toast.error("Geolocation is not supported by your browser"); // optional, for notifications
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  return location;
}

export default DetectLocation;
