import * as cookie from "cookie";
const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  event.locals.userid = cookies["userid"] || crypto.randomUUID();
  const response = await resolve(event);
  if (!cookies["userid"]) {
    response.headers.set(
      "set-cookie",
      cookie.serialize("userid", event.locals.userid, {
        path: "/",
        httpOnly: true
      })
    );
  }
  return response;
};
export {
  handle
};
