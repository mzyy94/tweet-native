/**
 * @license
 * Copyright 2021 @mzyy94
 * SPDX-License-Identifier: Apache-2.0
 *
 * Register action script and action icon.
 */

chrome.action.onClicked.addListener(({ id: tabId }) => {
  chrome.scripting.executeScript({
    target: { tabId },
    files: ["share-website.js"],
  });
});

chrome.runtime.onInstalled.addListener(() => {
  const canvas = new OffscreenCanvas(64, 64);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 64, 64);
  ctx.fillStyle = "#1DA1F2";
  ctx.beginPath();
  ctx.arc(32, 32, 40, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "italic bold 56px Arial";
  ctx.fillText("#", 14, 52);

  const imageData = ctx.getImageData(0, 0, 64, 64);
  chrome.action.setIcon({ imageData });
});
