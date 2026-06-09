---
title: Evaluating the Impact of Parasitic Drag on the Accuracy of Endurance Predictions
collection: publications
category: reports
date: 2018-08-26
venue: University of Minnesota Undergraduate Research Opportunities Program
authors: <strong>Leonid Heide</strong>, Chris Regan, Demoz Gebre-Egziabher
tags:
  - Report
  - UROP
paperurl: https://conservancy.umn.edu/bitstreams/cb78907f-d108-44f4-8efe-11488c1fbdac/download
abstract: The cost-effectiveness and versatility of electric unmanned aerial vehicles has led to increasing demand for efficient payload-carrying aircraft. Many design criteria require endurance predictions based on a specific mission profile, but these predictions rely strongly on accurate estimates of parasitic drag. This report evaluates how conventional component drag build-up methods affect endurance predictions for small electric UAVs. Glide tests were performed on an E-flite Ultra-Stick 25e equipped with an airspeed sensor, GPS, and flight controller, allowing drag to be estimated from measured descent rates and airspeeds. The experimentally inferred parasitic drag curve was then compared with predictions from a conventional component drag build-up method. The results showed that parasitic drag for the small UAV was substantially larger than predicted, producing large errors in drag and power estimates and demonstrating that conventional aircraft drag assumptions can lead to unreliable endurance predictions for small electric UAVs.
tldr: |-
  - **The Problem:** When calculating how long a battery-powered, fixed-wing UAV can stay in the air, engineers rely on mathematical models to estimate aerodynamic drag. The standard approach is to employ the Component Drag Build-Up Method (CDBM), which uses empirical formulas designed for full-scale aircraft operating at high Reynolds numbers. Because small electric UAVs are tiny and fly slowly, they operate at much lower Reynolds numbers where viscous forces dominate, meaning assumptions about a "clean" body and low component interference fall apart.

  - **The Goal:** Experimentally test a small electric UAV using unpowered glide tests to back out its true parasitic drag curve, and determine if standard conventional drag estimation formulas are accurate enough to make valid flight endurance predictions.

  - **The Outcome:** Tested on an Eflite Ultra-Stick 25e model aircraft, the study revealed a  gap: the standard CDBM underpredicted actual parasitic drag by an average error of 71%. Because the power required to overcome drag scales cubically with velocity, this underestimation means that conventional aircraft formulas overestimate battery life, and must be used cautiously when obtaining endurance predictions for small UAVs.
bibtex: |
  @techreport{heide2018parasitic,
      author = {Heide, Leonid and Regan, Chris and Gebre-Egziabher, Demoz},
      title = {Evaluating the Impact of Parasitic Drag on the Accuracy of Endurance Predictions},
      institution = {University of Minnesota Undergraduate Research Opportunities Program},
      year = {2018},
      month = {August}
  }
---

