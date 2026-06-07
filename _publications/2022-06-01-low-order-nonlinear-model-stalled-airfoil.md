---
title: "A low-order nonlinear model of a stalled airfoil from data: Exploiting sparse regression with physical constraints"
collection: publications
category: conferences
date: 2022-06-01
venue: "AIAA AVIATION 2022 Forum"
authors: "<strong>A. Leonid Heide</strong>, Katherine J. Asztalos, Scott T. M. Dawson, Maziar S. Hemati"

tags:
  - Conference
  - AIAA AVIATION
  - Reduced-order modeling
  - SINDy

themes:
  - rom
  - bounded-model-learning
  - optimization-control

paperurl: "https://arc.aiaa.org/doi/10.2514/6.2022-3976"
researchgateurl: "https://www.researchgate.net/publication/361450442_A_low-order_nonlinear_model_of_a_stalled_airfoil_from_data_Exploiting_sparse_regression_with_physical_constraints"

abstract: >
  This work uses data-driven sparsity-promoting methods to obtain low-order governing equations
  for the wake of a stalled airfoil. Direct numerical simulation data of a NACA-0009 airfoil at an
  angle of attack of 15 degrees is utilized in this study, with actuation being performed by injecting
  momentum into the flow near the airfoil's leading edge. Proper Orthogonal Decomposition (POD)
  is used to obtain a reduced order representation of the flow field. The Sparse Identification of
  Nonlinear Dynamics (SINDy) framework is then implemented to obtain low-order quadratic governing
  equations for the flow over the stalled airfoil. The SINDy model is constrained to preserve the
  energy-conserving property of the quadratic nonlinearity and associated triadic energy-transfer
  mechanisms. Low-order nonlinear models of the unsteady flow field associated with the stalled
  airfoil are obtained and cross-validated using off-design data. Furthermore, an output equation
  that predicts the lift coefficient is also identified and cross-validated. These low-order nonlinear
  models are expected to facilitate future developments in model-based analysis and control of
  separated flows.

tldr: >
  This paper asks whether a complicated stalled-airfoil flow can be represented by a much smaller
  nonlinear model learned from simulation data. We use POD to compress the flow field and constrained
  SINDy to learn governing equations that retain an important physical property of incompressible
  flow: the quadratic nonlinear terms should conserve energy. The resulting model captures useful
  low-order structure in the stalled wake and provides a step toward data-driven models that can be
  used for analysis and control of separated flows.

bibtex: |
  @inproceedings{heide2022loworder,
    author = {Heide, A. Leonid and Asztalos, Katherine J. and Dawson, Scott T. M. and Hemati, Maziar S.},
    title = {A Low-Order Nonlinear Model of a Stalled Airfoil from Data: Exploiting Sparse Regression with Physical Constraints},
    booktitle = {AIAA AVIATION 2022 Forum},
    year = {2022},
    doi = {10.2514/6.2022-3976}
  }
---
