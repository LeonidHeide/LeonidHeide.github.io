---
title: A Convex Optimization Approach to Compute Trapping Regions for Lossless Quadratic Systems
collection: publications
category: manuscripts
date: 2025-02-01
venue: International Journal of Robust and Nonlinear Control
authors: Shih-Chi Liao, <strong>A. Leonid Heide</strong>, Maziar S. Hemati, Peter J. Seiler
tags:
  - Journal
  - IJ Robust Nonlinear Control
themes:
  - bounded-model-learning
  - robustness-uq
  - rom
paperurl: https://doi.org/10.1002/rnc.7807
abstract: Quadratic systems with lossless quadratic terms arise in many applications, including models of atmosphere and incompressible fluid flows. Such systems have a trapping region if all trajectories eventually converge to and stay within a bounded set. Conditions for the existence and characterization of trapping regions have been established in prior work for boundedness analysis. However, prior solutions have used non-convex optimization methods, resulting in conservative estimates. In this paper, we build on this prior work and provide a convex semidefinite programming condition for the existence of a trapping region. The condition allows for precise verification or falsification of the existence of a trapping region. If a trapping region exists, then we provide a second semidefinite program to compute the least conservative radius of the spherical trapping region. Two low-dimensional systems are provided as examples to illustrate the results. A third high-dimensional example is also included to demonstrate that the computation required for the analysis can be scaled to systems of up to approximately O(100) states. The proposed method provides a precise and computationally efficient numerical approach for computing trapping regions. We anticipate this work will benefit future studies on modeling and control of lossless quadratic dynamical systems.
tldr: |-
  -The Problem: Many complex systems in atmospheric science and fluid dynamics feature "lossless" quadratic interactions. While these systems are stable if they possess a mathematical "trapping region" (a boundary that all forecasts eventually converge inside), previous methods to find these regions relied on non-convex optimization, which produced overly  conservative boundary estimates.

  -The Goal: To develop a convex optimization approach to mathematically prove the existence of these trapping regions and calculate the tightest possible physical boundaries for the system.

  -The Outcome: We introduced a convex semidefinite programming (SDP) framework that certifies whether a trapping region exists. If it does, our second optimization step calculates the tightest, least-conservative bounding radius possible.
bibtex: |
  @article{liao2025convex,
    author = {Liao, Shih-Chi and Heide, A. Leonid and Hemati, Maziar S. and Seiler, Peter J.},
    title = {A Convex Optimization Approach to Compute Trapping Regions for Lossless Quadratic Systems},
    journal = {International Journal of Robust and Nonlinear Control},
    volume = {35},
    number = {6},
    pages = {2425--2436},
    year = {2025},
    doi = {10.1002/rnc.7807}
  }
---
