var u1 = navigator.userAgent;

var u2 = u1.toLowerCase();
var Agents = ["android", "iphone",
  "symbianos", "windows phone", "ipod"];
var isMobile=false;
for (var v = 0; v < Agents.length; v++) {
  if (u2.indexOf(Agents[v]) >= 0) {
    isMobile=true;//mobile判断
  }
}
export default isMobile;

