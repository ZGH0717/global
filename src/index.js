import { version } from "../package.json";
import Button from "../packages/Button";
import Alert from "../packages/Alert";
import Avatar from "../packages/Avatar";
import Confirm from "../packages/Confirm";
import Foot from "../packages/Foot";
import Head from "../packages/Head";
import ChatFoot from "../packages/ChatFoot";
import Dropdown from "../packages/Dropdown";
import Switch from "../packages/Switch";
import Badge from "../packages/Badge";
import Loading from "../packages/Loading";
import Cell from "../packages/Cell";
import Collapse from "../packages/Collapse";
import Number from "../packages/Number";
import NoticeBar from "../packages/NoticeBar";
import Tag from "../packages/Tag";
import Popup from "../packages/Popup";
import Search from "../packages/Search";
import Radio from "../packages/Radio";
import Checkbox from "../packages/Checkbox";
import Toast from "../packages/Toast";
import Countdown from "../packages/Countdown";
import PullRefresh from "../packages/PullRefresh";

const components = [
  Button,
  Avatar,
  ChatFoot,
  Foot,
  Head,
  Switch,
  Badge,
  Loading,
  Cell,
  Collapse,
  Dropdown,
  Number,
  NoticeBar,
  Tag,
  Popup,
  Search,
  Radio,
  Checkbox,
  Countdown,
  PullRefresh
];
const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
  Vue.prototype.$alert = Alert;
  Vue.prototype.$confirm = Confirm;
  Vue.prototype.$toast = Toast;
};
/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version,
  Button,
  Alert,
  Avatar,
  Confirm,
  ChatFoot,
  Dropdown,
  Foot,
  Head,
  Switch,
  Badge,
  Loading,
  Cell,
  Collapse,
  Number,
  NoticeBar,
  Tag,
  Popup,
  Search,
  Radio,
  Checkbox,
  Toast,
  Countdown,
  PullRefresh
};
