function triggerBuildIfNeeded() {
  const cache = CacheService.getScriptCache();
  const cached = cache.get("build_lock");
  if (cached) return;

  const urls = [
    "https://api.netlify.com/build_hooks/WEBHOOK_URL_STAGING",
    "https://api.netlify.com/build_hooks/WEBHOOK_URL_PROD",
  ];

  for (var i = 0; i < urls.length; i++) {
    UrlFetchApp.fetch(urls[i], { method: "post" });
  }

  cache.put("build_lock", "1", 240); // lock for 4 min
}

function onEdit(e) {
  triggerBuildIfNeeded();
}
