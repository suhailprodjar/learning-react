const NODE_ENV = process.env.NODE_ENV || "local";
let API_URL;
switch (NODE_ENV) {
    case "production":
        API_URL = "https://prodjar-learning.herokuapp.com";
        break;
    default:
        API_URL = "http://localhost:8080/";
        break;
}

export const AppConfig = {
    api_url: API_URL,
    product: "Learning Grow",
    shortDesc: "",
    socket_url: ""
};