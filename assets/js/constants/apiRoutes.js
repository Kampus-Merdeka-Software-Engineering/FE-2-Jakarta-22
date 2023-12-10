const baseApiUrl =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://be-final-ecommerce-production.up.railway.app";

const apiRoutes = {
  auth: `${baseApiUrl}/auth/login`,
  products: `${baseApiUrl}/products`,
  productsId: (id) => `${baseApiUrl}/products/${id}`,
  feedback: `${baseApiUrl}/feedback`,
  feedbackId:(id) =>  `${baseApiUrl}/feedback/${id}`,  
  cart: `${baseApiUrl}/cart`,
};

export default apiRoutes;
