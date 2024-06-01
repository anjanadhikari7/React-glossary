import React from "react";

function CDN() {
  return (
    <div>
      <h2>CDN</h2>
      <p>
        A Content Delivery Network (CDN) is a system of distributed servers that
        deliver webpages and other web content to a user based on their
        geographic location, the origin of the webpage, and the content delivery
        server.
      </p>
      <p>
        CDNs enhance the performance of websites by caching content closer to
        the end-users, thus reducing latency and improving load times.
      </p>
      <p>
        Common uses of CDNs include serving static assets like images,
        stylesheets, and JavaScript files. Popular CDN providers include
        Cloudflare, Akamai, and Amazon CloudFront.
      </p>
    </div>
  );
}

export default CDN;
