---
title: "Theme Documentation - Mathematics in markdown"
date: 2021-01-29T22:31:15+07:00
math: true
tags: ["hugo"]
categories: ["documentation"]
thumbnail: "/icon/documentation.svg"
---

Mathematical notation in a Hugo project can be enabled by using [third party JavaScript libraries](https://katex.org/docs/browser).

In this example we will be using KaTeX.

- To enable KaTeX globally, set the parameter math to true in a project’s configuration file as follows.

  - config.toml

        [params]
            math = true

  - config.yaml

        params:
            math: true

To enable KaTeX on a per page basis, include the parameter **math: true** in Front Matter of Markdown content file as follows

For example here is the code for a linear time series regression equation:

    $$y_t = \beta_0 + \beta_1 x_t + \epsilon_t$$

These are block equations:

$$y_t = \beta_0 + \beta_1 x_t + \epsilon_t$$
