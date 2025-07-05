---
layout: post
title: Keeping up with the technological tide
date: 2025-07-05
description: Setting the stage on what to expect here, in writing. My experience at a workshop covering systems for Machine Learning
tags: Foundational_models, edge_computing, Distributed_Machine_learning, Model_quantisation
categories: technical
featured: true
giscus_comments: true
_styles: |
  .post-content a {
    text-decoration: underline !important;
  }
  .post-content a:hover {
    text-decoration: underline !important;
    opacity: 0.8;
  }
---

I am _happy_ to announce the start of my technical writing journey within the whims and comforts of this rather isolated and cozy part of the internet. In my mind, this is a rough sketch of domains/areas that I would like to bring my perspective towards:

- **Think like a Simulations engineer** – the blogs will revolve around using simulation tools, mathematical methods, and schools of thought to realize robust, stable, and high-fidelity computer simulations.


- Observations from attending technical talks, workshops, and meeting eminent professionals.


- **General robotics commentary** – right from build systems, multiagent frameworks, and learning-based approaches


- My experiments with different reconstruction methods, gradual understanding of computer vision and SLAM


- Unix insider tips, and making the most out of your operating system and build environments. 

Since this is the _first blog_ in this setting, I will _reduce the technical jargon_.

<br>

## Workshop: Systems for Machine Learning - ACM student chapter, IISc
<br>
A visit to **IISc** always reminds me of what Bengaluru used to look like when I was young, and how it should have looked if not for the population influx. _I am part of the influx, so guilty as charged._

<img src="/assets/img/posts/iisc.jpg" style="display: block; margin: 2em auto; max-width: 50%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">

<p style="text-align: center;"><em>IISc being an epitome of poise and beauty :)</em></p>

The premise of the workshop was to _introduce and motivate_ active work towards developing systems that are able to handle **large data workloads in real time**. Imagine being able to run advanced detection models on an edge device which can be slightly bigger than an average fist. 

**Systems design** has always _allured me_, and with the traction rigged towards **machine learning** and **autonomous systems** reaching an all-time high, there was much enthusiasm and curiosity to attend it. 


The series was initiated by talk from [**Dr. Amod**](https://www.linkedin.com/in/ajga2/) from **Harman Automotive**. With multiple large automotive companies under their belt, Harman had a unique position in being able to dictate a standardization on **edge computing development** for autonomous driving. There were several golden nuggets that I derived from his talk, namely:

- The general outlook of moving from **Domain controllers** to **Zonal controllers** in the context of ECU placement in a car. The idea is to simplify wiring, cater to special purpose hardware at specific zones and bring down the general **BoM costs**.


- The general trend in **edge computing devices** and their capabilities – right from **Raspberry Pi Zero** to a **Jetson AGX Orin**. The compute (**FLOPs**), quick access memory and vision accelerator support (Encoder/Decoder support) has expanded tremendously.


- **Driver state detection models** were very interesting indeed. Right from being able to diagnose the state of the driver (_drowsy, alert, non-chalant_) through the movements of their eyelids, body posture and respiratory motions to doing early disease diagnostics. There are enough interesting verticals which can lead to a better driving experience and safety. 


- Also an interesting vertical was the **MLSecOps** and how would the data exchanged locally be secured and not something that can be easily tampered. There is a gradual shift from cloud dependent services to on-device services. 


- There was a sneak peek towards what would turn out to be a hands-on session – **Federated Learning**. 

<br>

Moving on, we had a deep dive session from [**Divij**](https://divijghose.github.io/) who gave a very crisp introduction to **machine learning** and systems developed for machine learning. If you are someone who works in the **CFD** space, you should take a look at their work with **FastVPINNs**. Divij also explained the nature of parallelism that is exploited through **GPUs** – Model and Data parallelism and gave a distinct and clear understanding where one can be leveraged over the other.

As part of my notes was the online textbook – [**MLSysBook**](https://mlsysbook.ai/) which I am yet to read.

<br>

The final session for the day was delivered by **Dr. Alka** who was affiliated to Harman. She walked us through different **quantisation techniques** that can be leveraged in order to obtain optimal outputs with efficiency and reasonable accuracy. I have added some notes from the talk below:

- Need to explore **LiteRT models** to be able to reduce model size and run at a faster inference time. Would be perfect for specific object detection models on **Jetson Nano**. 


- **ONNX alternative – TVM**. There is an option to perform graph rewrite for the specific hardware. ONNX already does a good job for Jetson boards, but it would be necessary to have an optimized graph for **RISC-V** or newer architectures/boards. TVM also has a ML based cost model incorporated which could help calculate the operational costs as and when the model gets deployed.


- Go deeper into Structured Pruning of models based on the understanding of the model parameters and the hardware architectures.


- Look at lighter **GPT implementations** – **SpareGPT**, **DistilGPT** and **Tiny LLAMA** models.


- Take a closer look at **Horovod** which draws several parallels to the good old **MPI distributed computing** method for CPU.


- Understand <u>Paged attention</u> and <u>flash attention</u> models. There seems to be more intricate thought put there to develop mathematically sourced transformer models.
<br>

<br>

I wasn't able to attend the event the following day due to a planned farewell of my manager in Mysore. The final day of the workshop, the day started with a talk from [**Dr.Suparna**](https://www.linkedin.com/in/suparna-bhattacharya-5a7798b/) on <i>Foundational models as an OS</i>.

The idea of having a standalone, specialised **Operating system** which was built and functions for a specific use-case has been an idea which had been on the back burner for me and a couple of friends. The idea of packaging all the essential components of a foundational model into an operating system was perfect and had a very novel viewpoint towards systems design. I had several takeaways from the talk, I will share a few here:

- **Foundational models** stem from the evolution of moving rapidly from task based scheduler to a transfer learned model to a multimodal optimized large language model.


- The idea of having the foundational model as an OS was largely championed by arbiters who kept running into shared memory models or having to move with tweaking priority queues and doing effective resource allocation and tokenisation.


- **Reinforcement learning methods** are data hungry, leading to accurate policies after ingesting billions of datasets with somewhat clear demarcation of the action and reward space. Foundational models were made possible due to availability of well curated and labeled datasets.


- The computational overhead between the nodes, **LLM tokenisation**, keyframe matcher can be translated well into operating system subsystems.


- The common lingo of operating systems have operational equivalence in **Large language models** as well.


- The kernel is largely kept constant, what changes is the software/driver layers that change between operating systems. **Foundational OS** will ride on the same principle.


- I need to dig deeper into **AIOS from Rutgers**.


- There is a lot of potential to bring out a **foundational operating system in the robotics space**. Given the real time kernel-like operational latencies and multimodal data ingestion, the computational overload between different process components can be greatly reduced. 

<br>
<br>

I greatly admire **Dr.Suparna's** works and her journey so far. It was _inspirational_ to hear from a subject matter expert in **Unix systems** on how we could look to the future for operating systems.


We completed the workshop with some thoughts on **distributed machine learning** and **federated learning**. I had come across Federated learning a year ago, when we were discussing AI ethics and privacy conservation of personal/sensitive data with a friend. I was glad to see the progress that has been made so far in this field. 

To better supplement our understanding, we worked on a client dataset which had masked key value pairs. The workshop did _pique my interest_ and helped me think about different verticals that can be incorporated into my work and robotics in general.

<br>

Well, that's about it for my first blog here. The next blog will talk more about a talk I attended in Differential programming, which reminded me of my course on computational/automatic differentiation and work in computational fluid dynamics.


> _Disclaimer: No GPUs were burned towards writing this. All written as an output of my tiny brain :)_