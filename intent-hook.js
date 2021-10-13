/**
 * @license
 * Copyright 2021 @mzyy94
 * SPDX-License-Identifier: Apache-2.0
 *
 * Open web-intent on native tweet dialog automatically.
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
 */
{
  const search = new URLSearchParams(location.search);
  const messages = [search.get("text"), search.get("url")];
  if (search.has("via")) {
    messages.push("via @" + search.get("via"));
  }
  const launchURL = new URL("twitter://post");
  launchURL.searchParams.append("message", messages.filter(Boolean).join(" "));
  location.href = launchURL.toString();
  setTimeout(() => {
    window.close();
  }, 1000);
}
