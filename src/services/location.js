export const getLocation = async () => {
    return await new Promise(resolve => {
      navigator.geolocation.getCurrentPosition(position => {
        resolve(
          `lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
      });
    });
  };