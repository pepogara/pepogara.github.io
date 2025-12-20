---
layout: page
title: Computational Physics 
description: PHYS 410 
img: 
importance: 4
category: physics
school: ubc
---

## Course Overview

This course provides a survey of techniques from numerical analysis and computational science applied to complex problems in physics. Through the use of MATLAB, I implemented various algorithms to simulate systems where analytical solutions are unavailable.

The curriculum covered floating-point arithmetic and error analysis, polynomial interpolation, root-finding for nonlinear equations, and finite difference approximations. A major focus was placed on:
* **Differential Equations:** Solving both ODEs and PDEs (Initial Value and Boundary Value problems).
* **Advanced Methods:** Implementing Monte Carlo methods and Fast Fourier Transforms (FFT).
* **Physics Applications:** Modeling systems in classical dynamics, quantum mechanics, and statistical mechanics.

---

## Projects

### Project 1: Galactic Collisions (The Toomre Model)
In this project, I implemented the Toomre Model to simulate the tidal interactions and dynamical evolution of colliding galaxies. By treating galaxies as central potentials surrounded by "test-particle" disks, I visualized the formation of tidal tails and bridge structures resulting from gravitational encounters.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phys410/galaxy.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
    Animation of the galaxy simulation results.
</div>

[Project Report (PDF)](/assets/pdf/phys410/pr1_writeup.pdf){: .btn .btn-sm .z-depth-1 target="_blank"}

### Project 2: Numerical Solutions to the TDSE
I developed a solver for the Time-Dependent Schrödinger Equation (TDSE) in both 1D and 2D. To ensure numerical stability and unitarity, I utilized the Crank-Nicolson scheme. For the 2D case, I implemented the Alternating Direction Implicit (ADI) method to efficiently handle the dimensionality, allowing for the observation of wave packet scattering and tunneling.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="assets/video/phys410/barrier.mp4" class="img-fluid rounded z-depth-1" controls=true %}
    </div>
</div>
<div class="caption">
    Visualizing wave interaction with a barrier.
</div>

[Project Report (PDF)](/assets/pdf/phys410/pr2_writeup.pdf){: .btn .btn-sm .z-depth-1 target="_blank"}

---

## Selected Coursework

While the projects were the highlight, these assignments focused on the rigorous implementation of fundamental algorithms.

* **Homework 1:** Nonlinear Root Finding [[View PDF]({{ '/assets/pdf/phys410/hw1_writeup.pdf' | relative_url}}){:target="_blank"}]

* **Homework 2:** Runge-Kutta Methods [[View PDF]({{ '/assets/pdf/phys410/hw2_writeup.pdf' | relative_url}}){:target="_blank"}]
