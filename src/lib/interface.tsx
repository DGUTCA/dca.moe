interface ServiceInterface {
  img_path: string;
  title: string;
  desc: string;
  href: string;
  className?: string;
}

interface AbstractInterface {
  title: string;
  desc?: string;
  className?: string;
  file_name: string;
  author?: string;
  location?: string;
  date: string;
  time?: string;
  comp_type: AbstarctType;
  children?: React.ReactNode;
}

enum AbstarctType {
  Passage,
  Event,
}

enum StrStatus {
  UPCOMING = "Upcoming",
  INPROGRESS = "In Progress",
  FINISHED = "Finished",
  PENDING = "",
}

function status2css(status: StrStatus): string {
  if (status === StrStatus.UPCOMING) {
    return "badge-warning";
  } else if (status === StrStatus.INPROGRESS) {
    return "badge-info";
  } else if (status === StrStatus.FINISHED) {
    return "badge-success";
  }
  return "";
}

export {
  type AbstractInterface,
  type ServiceInterface,
  AbstarctType,
  StrStatus,
  status2css,
};
