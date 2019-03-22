import request from "../config/http";

export const apiZtAdmin = mobile => {
  const baseURL = `http://www.epwk.${
    process.env.E_ENV === "prod" ? "com" : "us"
  }`;
  return request({
    baseURL,
    url: "/index.php?do=ajax&view=advertis",
    method: "get",
    params: {
      way: 1,
      source: "小威起名",
      mobile,
      adv_type: 166
    }
  }).then(res => {});
};
