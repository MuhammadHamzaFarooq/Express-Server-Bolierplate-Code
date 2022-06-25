import adminServices from "../../services/adminServices.js";
import { constructResponse } from "../../utils/helper.js";


const dummy = async (req, res) => {
  const response = await adminServices.dummy();
  return constructResponse(res, response);
};


export default {
  dummy,  
};
