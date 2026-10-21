import { useEffect } from "react";

// The Timestream x OctAlpha webinar landing page is a standalone page in
// public/webinar/. This route makes octalpha.com/webinar open it on any host.
export const WEBINAR_PAGE_URL = "/webinar/index.html";

const WebinarRedirect = () => {
  useEffect(() => {
    window.location.replace(WEBINAR_PAGE_URL + window.location.search + window.location.hash);
  }, []);
  return null;
};

export default WebinarRedirect;