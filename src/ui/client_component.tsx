"use client";
import moment from "moment-timezone";
import { StrStatus } from "../lib/interface";

function check_date_status(date: string, time: string): StrStatus {
  const now = new Date(moment().tz("Asia/Shanghai").format()).getTime();
  const str_spilt: Array<string> = time.split("-");
  const d_start = new Date(`${date} ${str_spilt[0]}:00`).getTime();
  const d_end = new Date(`${date} ${str_spilt[1]}:00`).getTime();

  // there is no such event that lasts more than a day
  if (now < d_start) {
    return StrStatus.UPCOMING;
  } else if (now >= d_start && now <= d_end) {
    return StrStatus.INPROGRESS;
  } else {
    return StrStatus.FINISHED;
  }
}

export { check_date_status };
