// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 202X
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-JS/sw.js", {
    scope: "/ICS2O-Unit5-03-JS/",
  })
}

/**
 * This function tells you what movie you may watch based on your age.
 */
function myButtonClicked() {
  /**
   * This is the age the user inputs
   */
  var age = parseFloat(document.getElementById("age-number").value)

  if (age >= 17) {
    document.getElementById("movie-rating").innerHTML =
      "<p>You may see an R rated movie alone.</p>"
  } else if (age >= 13) {
    document.getElementById("movie-rating").innerHTML =
      "<p>You may see a PG-13 movie alone.</p>"
  } else if (age >= 5) {
    document.getElementById("movie-rating").innerHTML =
      "<p>You may see a G or PG movie alone.</p>"
  } else {
    document.getElementById("movie-rating").innerHTML =
      "<p>You probably shouldn't be going to see movies.</p>"
  }
}
