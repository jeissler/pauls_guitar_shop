/*
 * Also create custom trigger (handleUpdate) in Google Apps Script for onEdit event
 */

function handleUpdate(e) {
  const props = PropertiesService.getScriptProperties();
  const now = Date.now();
  const lastBuildTime = parseInt(props.getProperty("lastBuildTime") || "0", 10);
  const interval = 2 * 60 * 1000; // 2 minutes

  if (now - lastBuildTime >= interval) {
    triggerWebhooks();
    props.setProperty("lastBuildTime", now.toString());
    props.deleteProperty("pendingBuild");
  } else {
    props.setProperty("pendingBuild", "true");

    const scheduled = props.getProperty("pendingTriggerSet");
    if (!scheduled) {
      ScriptApp.newTrigger("checkAndFirePendingBuild")
        .timeBased()
        .after(interval + 5000) // just past cooldown
        .create();
      props.setProperty("pendingTriggerSet", "true");
    }
  }
}

function checkAndFirePendingBuild() {
  const props = PropertiesService.getScriptProperties();
  const now = Date.now();
  const lastBuildTime = parseInt(props.getProperty("lastBuildTime") || "0", 10);
  const interval = 2 * 60 * 1000;

  const pending = props.getProperty("pendingBuild") === "true";

  if (pending && now - lastBuildTime >= interval) {
    triggerWebhooks();
    props.setProperty("lastBuildTime", now.toString());
    Logger.log("✅ Pending build fired by scheduled trigger");
  } else {
    Logger.log(
      "⏭ Skipped pending build — either no pending flag or cooldown not expired."
    );
  }

  props.deleteProperty("pendingBuild");
  props.deleteProperty("pendingTriggerSet");
}

function triggerWebhooks() {
  const urls = [
    "https://api.netlify.com/build_hooks/xxxxxxxxxxxxxxxxxxxxxxxx",
    "https://api.netlify.com/build_hooks/yyyyyyyyyyyyyyyyyyyyyyyy",
  ];

  for (let i = 0; i < urls.length; i++) {
    try {
      const res = UrlFetchApp.fetch(urls[i], { method: "post" });
      Logger.log(`✅ Webhook ${i + 1}: ${res.getResponseCode()}`);
    } catch (err) {
      Logger.log(`❌ Error firing webhook ${i + 1}: ${err}`);
    }
  }

  Logger.log("🚀 Triggered Netlify rebuild at: " + new Date());
}
