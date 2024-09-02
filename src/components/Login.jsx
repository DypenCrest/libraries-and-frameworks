import { Password } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import React from "react";

const Login = ({ setFormDetails, formDetails, credentialChecker }) => {
  const handleSubmit = () => credentialChecker();
  return (
    <div>
      <h1 className="text-center mt-40">LOGIN</h1>
      <div className="w-3/5 bg-slate-600 mx-auto rounded-xl">
        <Grid container spacing={2} className="bg-zinc-900">
          <Grid size={7}>
            <img
              className="rounded-l-xl "
              src="https://kruschecompany.com/wp-content/uploads/2023/03/Hero-graphic-for-blog-post-on-the-most-popular-front-end-JS-frameworks-and-libraries.jpg"
              alt="libraries and frameworks"
            />
          </Grid>
          <Grid size={5} className="bg-zinc-900">
            <form
              className="flex flex-col gap-5 pt-5 px-10"
              onSubmit={handleSubmit}
            >
              <input
                className="rounded-2xl p-2 bg-zinc-800"
                type="text"
                placeholder="Username or EmailAddress"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, user: e.target.value })
                }
                required
              />
              <input
                className="rounded-2xl p-2 bg-zinc-800"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormDetails({ ...formDetails, password: e.target.value })
                }
                required
              />
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      remember: e.target.checked,
                    })
                  }
                />
                <label htmlFor="remember">Remember me</label>
              </div>

              <button
                className="bg-blue-600 rounded-md p-2 hover:bg-blue-700"
                type="submit"
              >
                Login
              </button>
            </form>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
