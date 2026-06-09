---
title: An optimization framework for analyzing nonlinear stability due to sparse finite-amplitude perturbations
collection: publications
category: manuscripts
date: 2025-01-02
venue: Physical Review Fluids
authors: <strong>A. Leonid Heide</strong>, Maziar S. Hemati
tags:
  - Journal
  - Physical Review Fluids
themes:
  - optimization-control
  - dynamics-phase
  - robustness-uq
paperurl: https://link.aps.org/doi/10.1103/PhysRevFluids.10.014401
abstract: |
  Recent works have established the utility of sparsity-promoting norms for extracting spatially-localized instability mechanisms in fluid flows, with possible implications for flow control. However, these prior works have focused on linear dynamics of infinitesimal perturbations about a given baseflow. In this paper, we propose an optimization framework for computing sparse finite-amplitude perturbations that maximize transient growth in nonlinear systems. A variational approach is used to derive the first-order necessary conditions for optimality, which form the basis of our iterative direct-adjoint looping numerical solution algorithm. When applied to a reduced-order model of a sinusoidal shear flow at Re = 20, our framework demonstrates that energy injection into a single vortical mode yields comparable energy amplification to the non-sparse optimal solution, which concentrates 92% of the energy in the same mode. Subsequent analysis of the dynamic response of the flow establishes that these sparse optimal perturbations trigger many of the same nonlinear modal interactions that give rise to transient growth when all modes are perturbed in an optimal manner. It is also observed that as perturbation amplitude is increased, the maximum transient growth is achieved at an earlier time. Our results highlight the power of the proposed optimization framework for revealing sparse perturbation mechanisms for transient growth and instability in fluid flows. We anticipate the approach will be a useful tool in guiding the design of flow control strategies in the future.
tldr: |-
  -The Problem: Traditional stability analysis can find the "worst-case" disturbances that trigger instability growth in fluid flows by identifying the sensitivities inherent to the system. However, these solutions typically require injecting energy across every single state or physical location of the system simultaneously. In real-world engineering, perturbing a whole system is rarely practical or possible, making this impractical for flow control.

  -The Goal: To find out where we can "kick" a nonlinear dynamical system to get the "biggest bang for our buck". In other words, given a limited energy budget, can we get a large response in the system by targeting only a small number of locations or modes rather than distributing that energy throughout? The goal is then to find a (sparse) subset of states where we can apply a finite-amplitude perturbation such that we use minimal input energy to get the largest possible response.

  -The Outcome: Tested on a fluid shear flow model in "SNLOP_PR_Fluids-7_2.pdf", our framework identified that kicking a small subset (or even just one vortical mode) yielded a similar energy amplification as a fully distributed perturbation. By isolating these highly sensitive single points of failure, the framework provides a roadmap for designing highly efficient, targeted flow-control strategies.
bibtex: |
  @article{heide2025optimization,
  author = {Heide, A. Leonid and Hemati, Maziar S.},
      title = {An optimization framework for analyzing nonlinear stability due to sparse finite-amplitude perturbations},
      journal = {Physical Review Fluids},
      volume = {10},
      number = {1},
      pages = {014401},
      year = {2025},
      doi = {10.1103/PhysRevFluids.10.014401}
  }
---

