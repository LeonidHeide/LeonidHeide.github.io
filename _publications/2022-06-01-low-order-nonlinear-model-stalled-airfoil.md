---
title: "A low-order nonlinear model of a stalled airfoil from data: Exploiting sparse regression with physical constraints"
collection: publications
category: conferences
date: 2022-06-01
venue: AIAA AVIATION 2022 Forum
authors: <strong>A. Leonid Heide</strong>, Katherine J. Asztalos, Scott T. M. Dawson, Maziar S. Hemati
tags:
  - Conference
  - AIAA AVIATION
themes:
  - rom
  - bounded-model-learning
  - optimization-control
paperurl: https://arc.aiaa.org/doi/10.2514/6.2022-3976
researchgateurl: https://www.researchgate.net/publication/361450442_A_low-order_nonlinear_model_of_a_stalled_airfoil_from_data_Exploiting_sparse_regression_with_physical_constraints
abstract: |
  This work uses data-driven sparsity-promoting methods to obtain low-order governing equations for the wake of a stalled airfoil. Direct numerical simulation data of a NACA-0009 airfoil at an angle of attack of 15 degrees is utilized in this study, with actuation being performed by injecting momentum into the flow near the airfoil's leading edge. Proper Orthogonal Decomposition (POD) is used to obtain a reduced order representation of the flow field. The Sparse Identification of Nonlinear Dynamics (SINDy) framework is then implemented to obtain low-order quadratic governing equations for the flow over the stalled airfoil. The SINDy model is constrained to preserve the energy-conserving property of the quadratic nonlinearity and associated triadic energy-transfer mechanisms. Low-order nonlinear models of the unsteady flow field associated with the stalled airfoil are obtained and cross-validated using off-design data. Furthermore, an output equation that predicts the lift coefficient is also identified and cross-validated. These low-order nonlinear models are expected to facilitate future developments in model-based analysis and control of separated flows.
tldr: |-
  -The Problem: Data-driven modeling methods (like Sparse Identification of Nonlinear Dynamics, or SINDy) can identify simplified equations for fluid flows, but they typically only track certain abstract flow states rather than engineering metrics of interest, such as aerodynamic lift. Furthermore, without physical constraints, standard data-fitting algorithms tend to violate basic energy laws over long periods, leading to fragile models that fail when tested outside of their narrow training conditions.

  -The Goal: To pair a physics-constrained, energy-preserving model of a stalled airfoil's wake with a dedicated nonlinear output equation. In other words, the goal is to build a low-order model that tracks the physics of the flow field accurately over long periods, while also mapping those states directly to a predictive equation for the aerodynamic lift coefficient.

  -The Outcome: We successfully identified and cross-validated a compact, coupled model that accurately predicts lift under off-design and transient conditions. By forcing the underlying flow model to strictly obey physical energy conservation and directly embedding the lift calculation as a matched output equation, the resulting framework predicts aerodynamic forces with significantly greater accuracy and robustness than standard, unconstrained approaches.
bibtex: |
  @inproceedings{heide2022loworder,
    author = {Heide, A. Leonid and Asztalos, Katherine J. and Dawson, Scott T. M. and Hemati, Maziar S.},
    title = {A Low-Order Nonlinear Model of a Stalled Airfoil from Data: Exploiting Sparse Regression with Physical Constraints},
    booktitle = {AIAA AVIATION 2022 Forum},
    year = {2022},
    doi = {10.2514/6.2022-3976}
  }
---
