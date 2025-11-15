# The Air Gap is a Myth: 5 Principles for Modern OT Security

For decades, the “air gap” has been the gold standard for securing Operational Technology (OT) environments. The idea was simple: if you physically disconnect your industrial control systems (ICS) from the IT network, then they will be safe from cyberattacks. But in today’s interconnected world, the air gap is a myth. It’s a dangerous and outdated concept that creates a false sense of security and leaves our critical infrastructure dangerously exposed.

This article will debunk the myth of the air gap and present five core principles for a modern, defensible OT security architecture.

## The Broken Myth of the Air Gap

The reality is that the air gap is constantly being bridged, both intentionally and unintentionally. Here are just a few of the ways that the gap is being closed:

*   **USB drives:** A technician needs to update the software on a programmable logic controller (PLC), so they download the update to a USB drive on their IT-connected laptop and then walk it over to the OT network.
*   **Vendor laptops:** A vendor needs to perform maintenance on a piece of industrial equipment, so they connect their laptop, which was just connected to the internet, directly to the OT network.
*   **Remote access:** An engineer needs to troubleshoot a problem at a remote facility, so they use a cellular modem to create a temporary connection to the OT network.

These are not hypothetical scenarios; they are everyday occurrences in the world of OT. The air gap is not a wall; it’s a sieve. And it’s time that we stopped pretending otherwise.

## 5 Principles for Modern OT Security

So, if the air gap is a myth, what’s the alternative? The answer is to embrace a modern, defense-in-depth approach to OT security, one that is based on the principles of Zero Trust. Here are five core principles for a modern OT security architecture:

### 1. Assume Breach

The foundation of modern OT security is to assume that the IT network is already compromised and that attackers will attempt to cross into the OT environment. This means that we can no longer rely on perimeter-based defenses. We must build security into the fabric of our OT network.

### 2. Implement an Industrial DMZ

An Industrial Demilitarized Zone (IDMZ) is a buffer zone that sits between the IT and OT networks. It’s a highly controlled environment where all traffic between the two networks is inspected and filtered. The IDMZ is a critical component of a modern OT security architecture, as it provides a chokepoint where we can enforce our security policies.

### 3. Centralize Policy, Decentralize Enforcement (CeDeSec)

The CeDeSec pattern, which we discussed in a previous article, is a powerful model for achieving centralized governance without creating a bottleneck. In the context of OT, this means that a central security team defines the high-level access policies, but the enforcement of those policies is decentralized and automated, embedded directly into the OT network.

### 4. Enforce Least Privilege

The principle of least privilege is a cornerstone of Zero Trust. It means that every user and device should have only the minimum level of access they need to perform their function. In the OT world, this is especially critical. A compromised user account with broad access to the OT network could have devastating consequences.

### 5. Continuously Monitor

Finally, we must continuously monitor our OT network for any signs of anomalous behavior. This means collecting and analyzing logs from our ICS devices, our network infrastructure, and our security controls. A modern Security Analytics and Intelligence (SAIL) layer can help to automate this process, using machine learning to detect subtle signs of compromise that would be missed by a human analyst.

## Conclusion: Stop Trusting the Gap

The air gap is a relic of a bygone era. It’s a dangerous myth that is holding us back from building a truly defensible OT security architecture. It’s time to stop trusting the gap and start building a modern, defense-in-depth security strategy.

Stop trusting the gap and start building a defensible architecture; assume the breach will cross the IT/OT boundary and design your controls accordingly.
