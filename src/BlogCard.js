import React from "react";

function BlogCard({ post }) {
  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const terms = post._embedded["wp:term"];
  const heading = terms[2][0]?.name || terms[1][0].name;

  const cardType = post._embedded["wp:term"][0][0].name;

  return (
    <div className="col-4 p-card--highlighted u-no-padding card">
      <hr className="p-rule--highlight line-highlight" />
      <div className="p-card__inner">
        <p
          className="p-text--small-caps u-no-padding u-no-margin"
          style={{ fontWeight: 350 }}
        >
          {heading}
        </p>
      </div>
      <hr className="p-rule--dotted" style={{ width: "95%" }} />
      <div
        className="p-card__inner"
        style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      >
        <img
          className="p-card__image"
          src={post.featured_media}
          alt="Featured Media"
        />
        <a href={post.link} style={{ flexGrow: 1 }}>
          <h3 style={{ fontWeight: 350 }}>{post.title.rendered}</h3>
        </a>
        <p>
          <em style={{ fontWeight: 350 }}>
            By{" "}
            <a href={post._embedded.author[0].link}>
              {post._embedded.author[0].name}
            </a>{" "}
            on {date}
          </em>
        </p>
      </div>
      <hr className="p-rule--dotted" style={{ width: "95%" }} />
      <div className="p-card__inner">
        <p className="p-text--small" style={{ fontWeight: 250 }}>
          {cardType.substring(0, cardType.length - 1)}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
