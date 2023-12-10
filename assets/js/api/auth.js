import apiRoutes from "../constants/apiRoutes.js";

export const loadAuth = async (email, password) => {
  console.log({ email, password });
  const response = await fetch(apiRoutes.auth, {
    method: "POST",
    // Jika body type raw, perlu melampirkan headers content type ya
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const responseJson = await response.json();

  if (response.status !== 200) throw new Error(responseJson.message);

  return responseJson.data.accessToken;
};
