---

title: "Data-driven nonlinear aerodynamics models with certifiably optimal boundedness properties"
collection: publications
category: manuscripts
date: 2025-08-22
venue: "Preprint"
authors: "<strong>A. Leonid Heide</strong>, Shih-Chi Liao, Sergio Castiblanco-Ballesteros, Gustaaf B. Jacobs, Peter Seiler, Maziar S. Hemati"

tags:
    - Preprint
    - JFM
    - Trapping-SDP
    - Reduced-order modeling

themes:
    - bounded-model-learning
    - rom
    - robustness-uq

paperurl: "https://arxiv.org/abs/2508.16800"

abstract: >
Obtaining predictive low-order models is a central challenge in fluid dynamics. Data-driven
frameworks have been widely used to obtain low-order models of aerodynamic systems; yet,
resulting models tend to yield predictions that grow unbounded with time. Recently introduced
stability-promoting methods can facilitate the identification of bounded models, but tend to
require extensive brute-force tuning even in the context of simple academic systems. Here, we
show how recent theoretical advances in the long-term boundedness of dynamical systems can be
integrated into data-driven modeling frameworks to ensure that resulting models will yield
bounded predictions of incompressible flows. Specifically, we propose to solve a particular set
of convex semidefinite programming problems to certify whether a system admits a globally
attracting bounded set for the chosen modeling parameters and compute a model with the optimal
tightest bound on this globally attracting set. We demonstrate the approach via integration
within the sparse identification of nonlinear dynamics modeling framework. Application on two
low-order benchmark problems establishes the merits of the approach. We then apply our approach
to obtain a low-order 6-mode model of unsteady separation over a NACA-65(1)-412 airfoil at
Re = 20,000, a flow that has been notoriously difficult to model using data-driven methods.
The resulting model accurately predicts the dynamics of unsteady separation, with model
predictions remaining bounded indefinitely. We anticipate this work will benefit future efforts
in modeling strongly nonlinear flows, especially in settings where physically viable long-term
forecasts are paramount.

tldr: >
Data-driven models of fluid flows often look good for a short time and then eventually drift,
diverge, or predict behavior that is not physically reasonable. This paper develops a way to
learn nonlinear reduced-order models while also certifying that their long-time behavior stays
bounded. In plain terms, the goal is not just to fit the data, but to build a model that is
mathematically guaranteed not to blow up. We use convex optimization to enforce and measure this
boundedness property, then apply the method to a separated airfoil flow where standard learned
models are especially prone to long-time failure.

bibtex: |
@misc{heide2025datadriven,
author = {Heide, A. Leonid and Liao, Shih-Chi and Castiblanco-Ballesteros, Sergio and Jacobs, Gustaaf B. and Seiler, Peter and Hemati, Maziar S.},
title = {Data-driven nonlinear aerodynamics models with certifiably optimal boundedness properties},
year = {2025},
eprint = {2508.16800},
archivePrefix = {arXiv},
primaryClass = {physics.flu-dyn},
doi = {10.48550/arXiv.2508.16800}
}
-

