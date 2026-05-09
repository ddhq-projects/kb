---
source: https://kanbanguides.org/open-guide-to-kanban/
title: "Open Guide to Kanban — In the Context of Knowledge Work (v2025.7)"
date: 2025-07-02
---

# Open Guide to Kanban - In the Context of Knowledge Work

Version: v2025.7 (Latest)
Contributors: John Coleman, Magdalena Firlit, Nigel Thurlow, Jose Casal, Martin Hinshelwood, Andy Carmichael, Jim Benson, Michael Forni, Christian Neverdal, Nader Talai, Steve Tendon

Licensed under CC BY-SA 4.0. Adaptation of Kanban Guide (May 2025) by Orderly Disruption Limited, Daniel S. Vacanti, Inc.

## Definition of Kanban in the Context of Knowledge Work

Kanban is a strategy for optimizing the Flow of Value through a system. It is a signaling system to call for Work or inventory. It comprises the following three practices working in tandem:

- Defining and Visualizing a workflow.
- Actively managing Items in a workflow.
- Improving Flow.

In their implementation, these Kanban practices are collectively called a Kanban system. Those who participate in the Value delivery of a Kanban system are called Kanban system members.

## Why Use Kanban?

Central to the understanding of Kanban is the concept of Flow. In a Kanban system, Flow is the movement of Value through that Kanban system. As most Kanban workflows exist to optimize Value, the strategy of Kanban is to optimize Value by optimizing Flow, which means striving to find the right balance of effectiveness, efficiency, and predictability:

- An effective workflow is one that delivers what stakeholders desire, when they desire it.
- An efficient workflow allocates available capacity optimally to deliver Value.
- A predictable workflow means being able to reasonably forecast Value delivery within an acceptable degree of uncertainty.

The strategy of a Kanban system is to enable Kanban system members to ask the right questions sooner as part of a continuous improvement effort.

Kanban is also a way to reduce overburden (excessive workload) and to manage demand so that Work is delivered optimally given the available capacity.

Side benefits are happier Kanban system members, higher quality, and the ability to adapt to demand. A good Kanban system is self-regulating.

## Kanban Theory

The Kanban system draws on various approaches and understanding including, but not limited to, systems thinking, lean principles, queuing theory (batch size and queue size), variation, and quality control.

## Kanban Practices

### Defining and Visualizing the Workflow

Optimizing Flow requires defining what Flow of Value means in a given context. The explicit shared understanding of Flow among Kanban system members within their context is called a Definition of Workflow.

Minimum elements of Definition of Workflow:

1. **Work Items** — definition of individual units of Value moving through the workflow.
2. **States** — one or more defined states that Work Items Flow through from 'started' to 'finished'. Work Items between 'started' and 'finished' points are considered 'Started but Not Finished Work' (SNFW) or Work in Progress/Process (WIP).
3. **WIP Control** — a definition of how WIP will be controlled from 'started' to 'finished'.
4. **Explicit Policies** — about how Work Items can Flow through each state defect-free.
5. **Service Level Expectation (SLE)** — a forecast of how long it should take a Work Item to Flow from 'started' to 'finished'. Has two parts: a period of elapsed time and a probability (e.g., '85% of Work Items will be finished in eight days or less').
6. **Visualization of SLE** on the Kanban board.

The Visualization of one or more Definitions of Workflow is described as a Kanban board. There are no specific guidelines for how a Visualization should look.

### Actively Managing Items in a Workflow

- Control 'Started but Not Finished Work' (SNFW) or WIP.
- Ensure Work Items do not age unnecessarily, using the SLE as a reference.
- Resolve impediments causing blocked Work or blocked processes.

Key principles:
- Kanban system members should start Work only when there is a clear signal that there is capacity.
- When WIP drops below the control set in the Definition of Workflow, that can be a signal to select new work.
- Refrain from selecting more Work beyond the relevant WIP controls or selecting Work greater than their capacity.
- When needed, Work should be split into smaller yet still potentially valuable Items.
- There is no requirement to have a backlog. A backlog is emergent.
- Ideally, Work should enter the Kanban system guided by policies rather than being assigned to an individual.
- Manage idle work, not idle people: Kanban system members should self-organize around the Work.
- Explicitly prevent Work from being pushed to Kanban system members.
- Beware of re-prioritization of SNFW/WIP, as it causes Items to age and leads to longer Elapsed Times.

**Rightsizing** (optional but recommended): assessing whether Work Items fit the Service Level Expectation, or are too big and require splitting.

**Capacity management** often requires more than WIP control. Any acceptable exceptions should be explicitly stated as part of the Definition of Workflow.

### Improving Flow

Kanban system members' responsibility to continuously improve their Flow by achieving a better balance of effectiveness, efficiency, and predictability.

- Improvements are often just-in-time, not limited by size or scope.
- Kanban favors evolutionary change, but does not prohibit larger, structural changes, informed by evidence.
- Leaders do Genchi Genbutsu (go see, listen, understand) to collect facts.

## Metrics and Measures

### Core metrics (suggested starting point):
- **Service Level Expectation (SLE):** forecast of elapsed time + probability (required for at least one 'started'/'finished' pair)
- **Work Item Age (WIA):** elapsed time for started but not finished items
- **Elapsed Time from 'Started' to 'Finished' (ETSF):** calendar days from start to finish
- **Throughput:** number of Work Items finished per unit of time

### Additional metrics:
- **Blocked Elapsed Time for Finished Items (BETFI):** cumulative time in blocked condition
- **Cumulative Queueing or Buffer Time (CQBT):** time spent in Queueing or Buffer states
- **Flow Distribution:** visualization and analysis of Work Item types finished over time
- **Flow Efficiency:** ratio of active working time to total time (can be misleading)
- **Number of Blockers:** number of impediments at a given point in time
- **Process Cycle Efficiency:** Value-adding time / Time to Market × 100
- **Total Work Item Age (TWIA):** total elapsed time for all in-progress items
- **Time to Market (Customer Lead Time):** elapsed time from stakeholder order to delivery
- **Time to Validated Value:** elapsed time from order to when Value was validated

## Outcomes, Impact, and Value

Kanban system members should regularly look for evidence of outcomes/impact:

- **Customer outcomes:** reduced Failure Demand, cost reduction, addressed customer jobs
- **User outcomes:** changes in user behavior, better usability
- **Product Stakeholder outcomes:** adoption, retention, feature adoption trends
- **Business Stakeholder Impact:** compliance, cost reduction, market share
- **Outcomes for Kanban system members:** improved capability, psychological flow, technical debt

**Failure Demand:** Demand caused by a failure to do something right. Signal for improvement. Highlights wasted capacity.

**Value Validated:** Work Item that reaches 'finished' and delivers intended Value.
**Value Invalidated:** Work Item that fails to deliver intended Value, requiring rework or rejection.

Clarity and understanding of Work Items should happen just-in-time to avoid waste. Avoid excessive focus on outputs and insufficient focus on outcomes.

## Optional Approaches (Appendix)

### WIP Control Methods:
- **CONWIP:** fixed total WIP limit across entire workflow
- **DBR (Drum-Buffer-Rope):** manages Flow Constraint with Buffers
- **Simplified DBR:** simplified scheduling where Throughput sets workflow pace

### Prioritization Techniques:
- **Class of Service:** standard, fixed date, expedite, intangible
- **Cost of Delay:** rate of Value loss per unit time
- **Shortest Job First:** select lowest perceived effort for shorter feedback loops
- **Real Options:** defer commitments until sufficient information
- **Slack:** deliberate unused capacity to absorb variability
- **Random:** can be more effective than other options when effort/Value unknown

## Conventions

Key terms: Buffer, Definition of Workflow, Explicit policy, Finished, Flow, kanban (signboard), Kanban system, Kanban Board, Knowledge Work, Pull, Push, Queue, Work Item, Value, Visualize.

## References

25 academic and professional references including:
- Little's Law (1961)
- Deming, W.E. (1986) Out of the Crisis
- Goldratt, E.M. (1990) Theory of Constraints
- Reinertsen, D.G. (2009) The Principles of Product Development Flow
- Ohno, T. (1988) Toyota Production System
- Vacanti, D.S. (2015, 2023) Actionable Agile Metrics for Predictability
