const NODE_ENV = process.env.NODE_ENV || "local";
let API_URL;
switch (NODE_ENV) {
    case "production":
        API_URL = "https://learning-backend.herokuapp.com/";
        break;
    default:
        API_URL = "http://localhost:8080/";
        break;
}

export const AppConfig = {
    api_url: API_URL,
    product_title: "Learning Grow",
    shortDesc: "",
    socket_url: "",
    ogimage_url: ""
};