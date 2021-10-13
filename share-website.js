/**
 * @license
 * Copyright 2021 @mzyy94
 * SPDX-License-Identifier: Apache-2.0
 *
 * Tweet website.
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
 */
{
  const launchURL = new URL("https://twitter.com/intent/tweet");
  launchURL.searchParams.append("url", location.href);
  launchURL.searchParams.append("text", document.title);
  window.open(
    launchURL,
    "tweet",
    "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=550,height=450"
  );
}
