import moment from "moment";

const calculateWhenPosted = (dateOfCreation: string) => {
  const formattedDate = dateOfCreation.split("T")[0];
  const dateTimeAgo: string = moment(new Date(formattedDate)).fromNow();
  return dateTimeAgo;
};

export default calculateWhenPosted;
