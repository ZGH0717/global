import Vue from "vue";

var vue = new Vue();
export const message = ({ showClose = true, message, type = "success" }) => {
  vue.$message({
    showClose,
    message,
    type,
    duration: 2000
  });
};
