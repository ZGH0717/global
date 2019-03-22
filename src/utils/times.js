import moment from "moment";

export const formatDate = (value, type = "YYYY-MM-DD HH:mm:ss") => {
  return value ? moment(value).format(type) : "--";
};
