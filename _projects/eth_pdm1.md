---
layout: page
title: Self Navigating Spaceship
description: ETH pdm4ar
img: assets/img/projects/pdm4ar1/space1.jpg
importance: 4
related_publications: false
---

## Overview

For this project, I built a guidance and control stack to pilot a spaceship to a target position and orientation while avoiding obstacles and respecting fuel, thrust, and timing constraints, across scenarios of increasing difficulty.

The approach centers on **Sequential Convexification (SCvx)**: the nonlinear spacecraft dynamics are linearized around a reference trajectory and solved as a convex subproblem, then the reference is updated and the process repeats until convergence. This is the same class of method [SpaceX used to land Starship on a moving platform](https://arxiv.org/abs/2106.09125).

<div class="row justify-content-center mt-3">
    <div class="col-6 col-sm-4">
        {% include figure.liquid path="assets/img/projects/pdm4ar1/rocket_docking.gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Docking maneuver planned with SCvx.
</div>


