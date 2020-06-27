import React from "react";
import PropTypes from "prop-types";

const RepoItems = ({ repo }) => {
  return (
    <div>
      <a href={repo.html_url}>{repo.name}</a>
    </div>
  );
};
RepoItems.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItems;
