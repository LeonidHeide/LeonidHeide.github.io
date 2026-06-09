---
title: "Practical Airflow Modeling and Control from Data: A Physics-Informed Approach"
collection: publications
category: thesis
date: 2026-05-22
venue: Ph.D. Dissertation, University of Minnesota
authors: <strong>A. Leonid Heide</strong>
tags:
  - Ph.D. Dissertation
paperurl: LINK_TO_THESIS_PDF
abstract: |-
  Unsteady aerodynamic phenomena, such as flow separation, degrade aircraft performance and necessitate flow control strategies to ensure safe and efficient flight. However, the real-time implementation of active flow control is bottlenecked by a lack of computationally inexpensive, reliable models. High-fidelity methods such as computational fluid dynamics (CFD) accurately capture first-principles physics but are prohibitively expensive for control design. Conversely, data-driven reduced-order models (ROMs) attempt to bridge this gap by fitting low-dimensional state equations to flow snapshots. Without explicit constraints, however, these empirical fits can violate the fundamental physical properties of fluids---such as lossless nonlinear energy exchange---leading to nonphysical long-time growth and unreliable predictions.

  The objective of this dissertation is therefore to create effective methods for modeling and controlling complex airflows by leveraging real-world data while respecting the governing fluid mechanics. Specifically, this work argues that respecting the physics when designing modeling and control strategies yields practical tools for real-time prediction and control. 

  To achieve this, the dissertation advances four methodologies. First, to provide the reliable predictive models needed for control, a data-driven approach is introduced that learns computationally efficient models from simulation or experimental measurements. Unlike prevailing state-of-the-art methods that struggle to remain predictive and often violate core aerodynamics, this framework explicitly enforces physical principles, guaranteeing models that remain accurate and stable over long time periods. Second, a computational framework is developed to identify optimal finite-amplitude perturbations that produce the largest impact on the airflow. This isolates the system's inherent sensitivities, enabling the design of targeted control strategies capable of manipulating unsteady flows. Third, to obtain a small set of states for modeling that are physically meaningful and descriptive, a spectrally structured coordinate extraction method is developed that separates persistent wake harmonics from transient dynamics without sacrificing the spatial orthogonality required for consistent energy accounting. This yields a reduced set of modeling coordinates which describe the underlying physical mechanisms driving instabilities. Finally, building on these coordinates, the Block-Rotational Embedded Modulator Form (BREMF) provides a modeling architecture that exploits oscillatory structure in the coordinates to explicitly preserve lossless quadratic dynamics by construction. This method builds on the prior modeling framework and yields significant computational advantages while ensuring physically accurate models.

  Together, these contributions move beyond empirical fits of fluid data toward modeling and controlling the mechanics of the underlying airflow system. By linking bounded physics-informed regression, finite-amplitude sensitivity analysis, and spectrally organized coordinates, this dissertation provides a practical framework for the reduced-order modeling and control of complex airflows.
tldr: This dissertation develops physics-informed and data-driven methods for modeling, understanding, and controlling nonlinear aerodynamic flows. The work focuses on building reduced-order models that remain physically meaningful over long times, identifying sparse perturbations that strongly influence nonlinear flow evolution, and using time-frequency/phase-based analysis to understand separated-flow response to actuation.
bibtex: |-
  @phdthesis{heide2026dissertation,
    author = {Heide, A. Leonid},
    title = {Your Dissertation Title Here},
    school = {University of Minnesota},
    year = {2026}
  }
---
