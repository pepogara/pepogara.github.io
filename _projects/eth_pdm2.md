---
layout: page
title: Lane Switching 
description: ETH pdm4ar
img: assets/img/projects/pdm4ar2/hwy.gif
importance: 4
category: fun
---

## Overview

For this project, I built a planning stack for a highway driving agent that must perform safe, efficient lane changes to reach a target lane amid mixed traffic. The car is modeled with kinematic bicycle dynamics and perceives its surroundings through a simulated 2D lidar, so it has to plan and react without knowing the other drivers' exact policies ahead of time — surrounding traffic follows the [Intelligent Driver Model (IDM)](https://mtreiber.de/MicroApplet/IDM.html), a car-following model for longitudinal driving behavior.

Performance is judged first and foremost on collision avoidance and reaching the goal lane, then on secondary factors like risk (time-to-collision), maneuver speed, lane compliance, and ride comfort.

<div class="row justify-content-center mt-3">
    <div class="col-6 col-sm-4">
        {% include figure.liquid path="assets/img/projects/pdm4ar2/lane_changing.gif" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Planned lane change in highway traffic.
</div>
