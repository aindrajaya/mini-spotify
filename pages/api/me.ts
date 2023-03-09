import { ValidateRoute } from "../../lib/auth";

export default ValidateRoute((req: any, res: any, user: any) => {
  res.json(user);
});
