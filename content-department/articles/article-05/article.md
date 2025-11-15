# The Strangler Fig Pattern: How to Evolve Your Legacy Security into a Modern Mesh

As security architects, we are often faced with a daunting challenge: how to modernize a complex, aging security stack without causing major disruption to the business. Many of our security systems are burdened with years of technical debt, making them difficult to integrate and adapt to the modern threat landscape. A recent report found that 74% of industrial control systems, for example, are between 6 and 10 years old [1]. This is a problem that is not going away.

The traditional “rip-and-replace” approach to modernization is often too risky and too slow. It requires a massive upfront investment, a lengthy implementation period, and a high-stakes cutover that can have disastrous consequences if it goes wrong. But what if there was a better way? What if we could evolve our legacy security into a modern, integrated mesh, one piece at a time?

This is where the **Strangler Fig Pattern** comes in. It’s a powerful, proven strategy for incremental modernization that allows you to reduce risk, deliver value quickly, and build a more agile and resilient security architecture.

## What is the Strangler Fig Pattern?

The Strangler Fig Pattern is a concept from the world of software engineering, first articulated by the renowned software architect Martin Fowler [2]. It’s named after the strangler fig, a type of vine that grows on other trees. The fig starts as a small seedling on a branch of the host tree and gradually sends its roots down to the ground. Over time, the fig grows, enveloping the host tree until, eventually, the host tree dies and the fig stands on its own.

In the context of technology, the Strangler Fig Pattern involves building a new system around the edges of a legacy system, gradually intercepting its traffic and functionality until the old system can be safely decommissioned. It’s a powerful metaphor for a strategy that prioritizes evolution over revolution.

## Applying the Strangler Fig Pattern to Cybersecurity

So, how can we apply this pattern to the world of cybersecurity? The principle is the same: instead of trying to replace a legacy security system all at once, we gradually “strangle” it with a new, more modern solution. This allows us to gain the benefits of the new system without the risk and disruption of a full replacement.

Let’s take a common example: a legacy Security Information and Event Management (SIEM) system. Many organizations have a SIEM that is struggling to keep up with the volume and variety of modern security data. It may be expensive to maintain, difficult to use, and lack the advanced analytics capabilities needed to detect modern threats. A “rip-and-replace” of the SIEM is a massive undertaking, but with the Strangler Fig Pattern, we can take a more incremental approach.

Here’s a step-by-step example of how to strangle a legacy SIEM with a modern Security Analytics and Intelligence (SAIL) layer, a key component of a Cybersecurity Mesh Architecture (CSMA):

1.  **Identify a Key Use Case:** Start by identifying a specific use case where the legacy SIEM is failing. This could be the detection of a particular type of threat, the need for better visibility into cloud environments, or the desire to automate a specific security workflow.
2.  **Implement a Modern SAIL:** Deploy a new, cloud-native SAIL and configure it to ingest a subset of the data that is currently being sent to the legacy SIEM. For example, you might start with just your cloud security data.
3.  **Demonstrate Value:** Use the SAIL to deliver a quick win. This could be the creation of a new detection rule that identifies a threat that was missed by the legacy SIEM, or the automation of a manual task that saves the security team a significant amount of time.
4.  **Gradually Expand the Scope:** Once you have demonstrated the value of the SAIL, you can gradually expand its scope, ingesting more and more data sources until it has completely enveloped the functionality of the legacy SIEM.
5.  **Decommission the Legacy System:** Once the SAIL has taken over all of the critical functionality of the legacy SIEM, you can safely decommission the old system, eliminating its associated costs and technical debt.

## The Benefits of an Evolutionary Approach

The Strangler Fig Pattern offers a number of significant benefits over the traditional “rip-and-replace” approach:

*   **Reduced Risk:** By making small, incremental changes, you can minimize the risk of disruption to your security operations.
*   **Faster Time to Value:** You can start delivering value to the business in weeks or months, rather than years.
*   **Continuous Improvement:** The iterative nature of the Strangler Fig Pattern allows you to continuously learn and improve your security architecture over time.
*   **Increased Agility:** This approach allows you to be more agile and responsive to the changing needs of the business and the evolving threat landscape.

## Conclusion: Evolve, Don’t Replace

The modernization of our security stack is one of the most critical challenges we face as security architects. The Strangler Fig Pattern provides a practical and proven strategy for tackling this challenge in a way that is both effective and achievable.

You don’t need to rip-and-replace your entire security stack; the Strangler Fig Pattern provides a practical, incremental path to gracefully evolve from legacy chaos to an integrated mesh.

---

### References

[1] “2023 State of Operational Technology and Cybersecurity Report.” Fortinet. [https://www.fortinet.com/corporate/about-us/newsroom/press-releases/2023/fortinet-global-report-finds-75-percent-ot-organizations-experienced-intrusion-last-year](https://www.fortinet.com/corporate/about-us/newsroom/press-releases/2023/fortinet-global-report-finds-75-percent-ot-organizations-experienced-intrusion-last-year)
[2] “StranglerFigApplication.” Martin Fowler. [https://martinfowler.com/bliki/StranglerFigApplication.html](https://martinfowler.com/bliki/StranglerFigApplication.html)
