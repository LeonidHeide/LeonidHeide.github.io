---
title: Data-driven nonlinear aerodynamics models with certifiably optimal boundedness properties
collection: publications
category: manuscripts
date: 2026-06-10
venue: Journal of Fluid Mechanics
authors: <strong>A. Leonid Heide</strong>, Shih-Chi Liao, Sergio Castiblanco-Ballesteros, Gustaaf B. Jacobs, Peter Seiler, Maziar S. Hemati
tags:
  - Journal
  - JFM
themes:
  - bounded-model-learning
  - rom

paperurl: https://doi.org/10.1017/jfm.2026.11671

abstract: Obtaining predictive low-order models is a central challenge in fluid dynamics. Data-driven frameworks have been widely used to obtain low-order models of aerodynamic systems; yet, resulting models tend to yield predictions that grow unbounded with time. Recently introduced stability-promoting methods can facilitate the identification of bounded models, but tend to require extensive brute-force tuning even in the context of simple academic systems. Here, we show how recent theoretical advances in the long-term boundedness of dynamical systems can be integrated into data-driven modeling frameworks to ensure that resulting models will yield bounded predictions of incompressible flows. Specifically, we propose to solve a particular set of convex semidefinite programming problems to certify whether a system admits a globally attracting bounded set for the chosen modeling parameters and compute a model with the optimal tightest bound on this globally attracting set. We demonstrate the approach via integration within the sparse identification of nonlinear dynamics modeling framework. Application on two low-order benchmark problems establishes the merits of the approach. We then apply our approach to obtain a low-order 6-mode model of unsteady separation over a NACA-65(1)-412 airfoil at Re = 20,000, a flow that has been notoriously difficult to model using data-driven methods. The resulting model accurately predicts the dynamics of unsteady separation, with model predictions remaining bounded indefinitely. We anticipate this work will benefit future efforts in modeling strongly nonlinear flows, especially in settings where physically viable long-term forecasts are paramount.

tldr: |-
  - **The Problem:** Data-driven models of fluid flows often work well for short-term predictions but eventually diverge or predict physically impossible behavior over long periods. Without explicit constraints, standard modeling algorithms tend to produce equations that are mathematically and physically inconsistent with the laws of fluid dynamics.

  - **The Goal:** To combine data-driven modeling with optimization methods to build simplified, nonlinear models that are mathematically guaranteed to stay bounded indefinitely, while maintaining a structure consistent with the governing fluid equations. In other words, we want to build a model that captures the behaviors present in the data while being (provably) physically accurate. 

  - **The Outcome:** We developed a framework that leverages our "Trapping-SDP" approach to enforce strict physical bounds on a model's long-term behavior. We proved its success on a complex, separated airflow over an airfoil, a scenario where standard learned models almost always fail.

bibtex: |
  @article{Heide_Liao_Castiblanco-Ballesteros_Jacobs_Seiler_Hemati_2026, 
       title={Data-driven nonlinear aerodynamics models with certifiably optimal boundedness properties}, 
       volume={1036}, 
       DOI={10.1017/jfm.2026.11671}, 
       journal={Journal of Fluid Mechanics}, 
       author={Heide, A. Leonid and Liao, Shih-Chi and Castiblanco-Ballesteros, Sergio and Jacobs, Gustaaf and  Seiler, Peter and Hemati, Maziar S.}, 
       year={2026}, 
       pages={A63}}
---

