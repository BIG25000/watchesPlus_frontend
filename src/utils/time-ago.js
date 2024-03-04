import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo("en-US");

const formatTimeAgo = (dateString) =>
  timeAgo.format(new Date(dateString), "mini now");

export default formatTimeAgo;
