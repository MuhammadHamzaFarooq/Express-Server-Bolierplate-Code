import { HTTP_STATUS } from "../utils/constant.js";
import { errorResponse, successResponse } from "../utils/helper.js";
const users = [
  {
    id: 1,
    name: "Muhammad Hamza Farooq",
    email: "mhamza2021999@gamil.com",
    age: 23,
    dev: "Full Stack & Chatbot Developer",
  },
  {
    id: 2,
    name: "Muhammad Hammad ",
    email: "mhammad@gamil.com",
    age: 24,
    dev: "Data Engineer",
  },
  {
    id: 3,
    name: "Mirza Ziayd Ahmed Beg",
    email: "ziyad17beg@gamil.com",
    age: 22,
    dev: "Full Stack & Chatbot Developer",
  },
];
const dummy = async (data) => {
  try {
    if (users) {
      return successResponse(users, HTTP_STATUS.OK, "All Users");
    }
  } catch (error) {
    return errorResponse(
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      "Internal Server Error",
      null
    );
  }
};

export default {
  dummy,
};
