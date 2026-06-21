---
title: "Layers of the AI Stack"
date: "2026-06-21"
tags: ["AI"]
description: "AI Tech Stack. What are some general terms in this freshly emerged direction?"
---


# Three Layers of the AI Stack

There are three layers to any AI application stack: **application development**, 
"model development", and "infrastructure". One usually starts from top layer 
and moves down: 

- **Application Development**
    This involves providing model with good prompts and necessary context. This
    layer requires a rigorous **evaluation** and good interfaces. 
- **Model Development**
    Provides tooling for developing models, including frameworks for 
    modeling, training, fine-tuning, and inference optimization. It also includes
    dataset engineering. This also requires rigorous evaluation. 
- **Infrastructure**
    At the bottom of the stack is infrastructure, which includes tooling for 
    model serving, managing data, compute and monitoring. 

---

# AI Engineering vs ML Engineering

1. Without foundation models, you have to train your own models for your applications.
   With AI engineering, you use a model someone else has trained for you.
   This means that AI engineering focuses less on modeling and training, and more
   on model adaptation.
2. AI engineering works with models that are bigger, consume more compute
   resources, and incur higher latency than traditional ML engineering. This means
   that there’s more pressure for efficient training and inference optimization. A
   corollary of compute-intensive models is that many companies now need more
   GPUs and work with bigger compute clusters than they previously did, which means 
   there’s more need for engineers who know how to work with GPUs and
   big clusters.
3. AI engineering works with models that can produce open-ended outputs. Open-ended
  outputs give models the flexibility to be used for more tasks, but they are
  also harder to evaluate. This makes evaluation a much bigger problem in AI
  engineering.

---

# Training

- **Pretraining** - Pre-training refers to training a model from scratch—the model weights are randomly
  initialized. For LLMs, pre-training often involves training a model for text
  completion. Out of all training steps, pre-training is often the most resource-intensive
  by a long shot. For the InstructGPT model, pre-training takes up to
  98% of the overall compute and data resources. Pre-training also takes a long
  time to do. A small mistake during pre-training can incur a significant financial
  loss and set back the project significantly. Due to the resource-intensive nature of
  pre-training, this has become an art that only a few practice. Those with expertise
  in pre-training large models, however, are heavily sought after.
- **Finetuning** - Finetuning means continuing to train a previously trained model—the model
  weights are obtained from the previous training process. Because the model
  already has certain knowledge from pre-training, finetuning typically requires
  fewer resources (e.g., data and compute) than pre-training.
- **Post-training** -  Many people use post-training to refer to the process of training a model after the
  pre-training phase. Conceptually, post-training and finetuning are the same and
  can be used interchangeably. However, sometimes, people might use them differently
  to signify the different goals. It’s usually post-training when it’s done by
  model developers. For example, OpenAI might post-train a model to make it
  better at following instructions before releasing it. It’s finetuning when it’s done
  by application developers. For example, you might finetune an OpenAI model
  (which might have been post-trained itself) to adapt it to your needs.

**Note:** if you teach a model what to do via the context
input into the model, you’re doing prompt engineering.




---

# Application Development

- **Evaluation** - Evaluation is about mitigating risks and uncovering opportunities. Evaluation
  is necessary throughout the whole model adaptation process. Evaluation is
  needed to select models, to benchmark progress, to determine whether an application
  is ready for deployment, and to detect issues and opportunities for improvement in
  production.
- **Prompt engineering and context construction** - Prompt engineering is about getting AI
  models to express the desirable behaviors from the input alone, without changing the
  model weights. Prompt engineering is not just about telling a model what to do. It’s also about giving
  the model the necessary context and tools to do a given task. For complex tasks with
  long context, you might also need to provide the model with a memory management
  system so that the model can keep track of its history.
- **AI interface** - AI interface means creating an interface for end users to interact with
  your AI applications.
