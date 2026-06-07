---
title: "A Convex Optimization Approach to Compute Trapping Regions for Lossless Quadratic Systems"
collection: publications
category: manuscripts
date: 2025-02-01
venue: "International Journal of Robust and Nonlinear Control"
authors: "Shih-Chi Liao, <strong>A. Leonid Heide</strong>, Maziar S. Hemati, Peter J. Seiler"

tags:
  - Journal
  - IJ Robust Nonlinear Control
  - Convex optimization
  - Trapping regions

themes:
  - bounded-model-learning
  - robustness-uq
  - rom

paperurl: "https://doi.org/10.1002/rnc.7807"

abstract: >
  Quadratic systems with lossless quadratic terms arise in many applications, including models
  of atmosphere and incompressible fluid flows. Such systems have a trapping region if all
  trajectories eventually converge to and stay within a bounded set. Conditions for the existence
  and characterization of trapping regions have been established in prior work for boundedness
  analysis. However, prior solutions have used non-convex optimization methods, resulting in
  conservative estimates. In this paper, we build on this prior work and provide a convex
  semidefinite programming condition for the existence of a trapping region. The condition allows
  for precise verification or falsification of the existence of a trapping region. If a trapping
  region exists, then we provide a second semidefinite program to compute the least conservative
  radius of the spherical trapping region. Two low-dimensional systems are provided as examples
  to illustrate the results. A third high-dimensional example is also included to demonstrate that
  the computation required for the analysis can be scaled to systems of up to approximately O(100)
  states. The proposed method provides a precise and computationally efficient numerical approach
  for computing trapping regions. We anticipate this work will benefit future studies on modeling
  and control of lossless quadratic dynamical systems.

tldr: >
  This paper asks how we can tell whether a nonlinear model will stay physically reasonable over
  long times instead of drifting away or blowing up. For an important class of models whose nonlinear
  terms conserve energy, we show that this question can be answered with convex optimization. The
  method can certify whether a trapping region exists and, when it does, compute the tightest spherical
  region that trajectories eventually enter and remain inside. In practice, this provides a cleaner and
  less conservative way to certify bounded behavior in reduced-order models of fluids and related
  dynamical systems.

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
