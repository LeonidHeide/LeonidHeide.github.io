---

title: "An optimization framework for analyzing nonlinear stability due to sparse finite-amplitude perturbations"
collection: publications
category: manuscripts
date: 2025-01-02
venue: "Physical Review Fluids"
authors: "<strong>A. Leonid Heide</strong>, Maziar S. Hemati"

tags:
    - Journal
    - Physical Review Fluids
    - Sparse NLOP
    - Nonlinear stability

themes:
    - optimization-control
    - dynamics-phase
    - robustness-uq

paperurl: "https://link.aps.org/doi/10.1103/PhysRevFluids.10.014401"

abstract: >
Recent works have established the utility of sparsity-promoting norms for extracting
spatially-localized instability mechanisms in fluid flows, with possible implications for
flow control. However, these prior works have focused on linear dynamics of infinitesimal
perturbations about a given baseflow. In this paper, we propose an optimization framework
for computing sparse finite-amplitude perturbations that maximize transient growth in
nonlinear systems. A variational approach is used to derive the first-order necessary
conditions for optimality, which form the basis of our iterative direct-adjoint looping
numerical solution algorithm. When applied to a reduced-order model of a sinusoidal shear
flow at Re = 20, our framework demonstrates that energy injection into a single vortical
mode yields comparable energy amplification to the non-sparse optimal solution, which
concentrates 92% of the energy in the same mode. Subsequent analysis of the dynamic response
of the flow establishes that these sparse optimal perturbations trigger many of the same
nonlinear modal interactions that give rise to transient growth when all modes are perturbed
in an optimal manner. It is also observed that as perturbation amplitude is increased, the
maximum transient growth is achieved at an earlier time. Our results highlight the power of
the proposed optimization framework for revealing sparse perturbation mechanisms for transient
growth and instability in fluid flows. We anticipate the approach will be a useful tool in
guiding the design of flow control strategies in the future.

tldr: >
This paper seeks to answer the question: where should we kick a flow or other sensitive nonlinear system to get the biggest bang for
our buck? We develop an optimization framework for finding sparse finite-amplitude perturbations:
targeted disturbances that use limited input energy to produce large transient growth. The results
show that, in a reduced-order shear-flow model, exciting only a small number of dynamically important
modes can reproduce much of the effect of a fully distributed optimal perturbation. This provides
a way to identify the mechanisms and locations that are most promising for future flow-control
strategies.

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
-

