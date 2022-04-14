let headlineCache;

function initHeadlineCache() {
  headlineCache = new Map();
}

function getHeadlineCache() {
  return headlineCache;
}

module.exports = {
  initHeadlineCache,
  getHeadlineCache
};
