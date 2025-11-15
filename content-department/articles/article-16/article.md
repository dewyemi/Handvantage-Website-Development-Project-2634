# The 75% Problem: Why Your IT Network is Your Biggest OT Security Risk

For years, the world of Operational Technology (OT) has been a world apart. The industrial control systems (ICS) that run our factories, power plants, and critical infrastructure were designed with a focus on safety and reliability, not security. They were often air-gapped, physically disconnected from the IT network, and managed by a specialized team of engineers who spoke a different language than their counterparts in IT.

But those days are over. The convergence of IT and OT has created a “superhighway of risk” from the corporate network directly into the industrial control environment. And the data is clear: this convergence is the single biggest threat to the security of our critical infrastructure.

A recent report from Fortinet found that a staggering **75% of OT security incidents originate from the IT network** [1]. This is the 75% problem, and it’s a problem that many organizations are still dangerously unprepared for.

This article will explore the 75% problem, the architectural flaws that create it, and why securing your OT environment doesn’t start on the factory floor, but in your corporate data center.

## The IT/OT Superhighway of Risk

The convergence of IT and OT has been driven by a desire for greater efficiency and visibility. By connecting our industrial control systems to the corporate network, we can gather real-time data on production, optimize our processes, and enable remote monitoring and maintenance. But in our rush to embrace the benefits of convergence, we have often overlooked the security risks.

We have created a digital superhighway that allows data to flow freely between the low-trust IT environment and the high-trust OT environment. And just as a superhighway can be used to transport goods, it can also be used to transport threats. An attacker who gains a foothold in the IT network can now use that access to pivot into the OT environment and cause real-world, physical damage.

## The Stuxnet Lesson: A Decade of Unlearned Lessons

This is not a new problem. The Stuxnet attack, which was discovered over a decade ago, used this exact attack path. The attackers first compromised the IT network of a number of target organizations and then used that access to move laterally into the OT environment, where they were able to manipulate the centrifuges at an Iranian nuclear facility.

The Stuxnet attack was a wake-up call for the industrial control systems community. It demonstrated that even air-gapped systems were not immune to attack and that the IT network was a viable vector for compromising OT systems. And yet, a decade later, we are still struggling to learn the lessons of Stuxnet. The 75% problem is a clear indication that we have not yet solved the fundamental architectural flaw that Stuxnet exploited.

## The Architectural Flaw: A Violation of Zero Trust

The core of the 75% problem is a fundamental architectural flaw: a high-trust relationship between the low-trust IT environment and the high-trust OT environment. We have built a digital bridge between these two worlds, but we have failed to put in place the necessary security controls to protect it.

This is a direct violation of the principles of Zero Trust. A Zero Trust architecture assumes that all networks are hostile, and it requires that we verify every user and device before granting them access to our resources. But in the world of IT/OT convergence, we have often taken the opposite approach. We have trusted the IT network, and we have paid the price.

## Conclusion: Securing the Superhighway

The 75% problem is a stark reminder that the security of our critical infrastructure is only as strong as the security of our IT networks. We can no longer afford to treat OT security as a separate and distinct discipline. We must take a holistic approach to security, one that recognizes the interconnectedness of our IT and OT environments.

Securing your OT environment doesn’t start at the factory floor; it starts in your corporate data center, because that’s where your adversary will.

---

### References

[1] “2023 State of Operational Technology and Cybersecurity Report.” Fortinet. [https://www.fortinet.com/corporate/about-us/newsroom/press-releases/2023/fortinet-global-report-finds-75-percent-ot-organizations-experienced-intrusion-last-year](https://www.fortinet.com/corporate/about-us/newsroom/press-releases/2023/fortinet-global-report-finds-75-percent-ot-organizations-experienced-intrusion-last-year)
