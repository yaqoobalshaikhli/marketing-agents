# What the 300-family simulation says (2026-11-08)

Yaqoob asked for a simulation of 300 families instead of a live pilot, then a straight launch (decision #81). The code is `docs/launch/simulation/queue_sim.py`; rerun it with your own numbers.

## Read this first

- A simulation creates no data. The research found **no Iraqi usage rate, consultation length or time-of-day pattern**, so every input below is a scenario, and the results hold only if the scenario holds. It cannot replace measuring real families.
- **Doctor-hours arithmetic (from your numbers, no simulation needed):** one doctor on duty all day and night is 24 x 30 = 720 hours a month, which is 4.5 doctors at 160 hours. Three doctors on duty at the same moment, round the clock, is 2,160 hours a month, which is 13.5 doctors at 160 hours. Your five doctors at 160 hours give 800 hours: enough for **one doctor on duty at all times, not three**. "3 GPs around the clock" fits only if it means three 8-hour shifts a day (240 hours each, 720 in total). That reading needs your confirmation.
- **What the simulation shows:** at 300 families, capacity is not the limit. One doctor on duty gives short waits unless usage is very high (95th-percentile wait 6.8 minutes at 8 consultations per family per year, 22 minutes at 24). Two or three doctors on duty give almost no waiting. Waiting only becomes a problem past roughly 600 families with one doctor on duty (at 8 a year), about 2,700 with two and about 5,000 with three.
- **Where 300 families does hurt is the money.** 300 families bring 15,000,000 IQD, or 14,850,000 after cards. If the full payroll belongs to the plan: 5 doctors at 500,000 = 30,000,000 a year (a loss of about 15.15 million before advertising); 3 doctors at 750,000 = 27,000,000 (about 12.15 million); 5 doctors at 750,000 = 45,000,000 (about 30.15 million). Break-even is 607, 546 and 910 families. If the doctors are already paid for other work, the plan adds 14.85 million minus advertising, but their time is shared, so capacity for the plan is lower than the tables assume.
- Usage in these tables is heavy-tailed (gamma shape 0.5): the top 10% of families make 47% to 73% of the consultations. That tail is an assumption borrowed from the shape of foreign data, with about 15% confidence that it fits Iraq.

## Results


Setup: 120 simulated months of 30 days per case. Usage per family is gamma-distributed with shape 0.5 (a heavy tail: a few families use far more than the rest). Consultation length is lognormal with the stated mean and a spread (CV) of 0.6. Calls come in an evening-peaked pattern unless stated. Doctors answer first come, first served; the number of doctors is the number on duty at the same moment, all day and night.

**Every input is a scenario, not data.** The research found no Iraqi usage rate, consultation length or time-of-day pattern.

## 1. 300 families (the simulation you asked for), 15-minute consultations

| Case | Consultations a month | Doctor time used | Mean wait (min) | 95th-percentile wait (min) | Wait over 5 min | Wait over 15 min | Share from top 10% of families |
|---|---|---|---|---|---|---|---|
| 1 doctor(s) on duty, 2.4 a family a year | 59 | 2% | 0.3 | 0.3 | 1.7% | 0.7% | 73% |
| 1 doctor(s) on duty, 8 a family a year | 197 | 7% | 1.0 | 6.8 | 6.2% | 2.3% | 55% |
| 1 doctor(s) on duty, 24 a family a year | 582 | 20% | 3.6 | 22.2 | 18.9% | 8.9% | 47% |
| 2 doctor(s) on duty, 2.4 a family a year | 59 | 1% | 0.0 | 0.0 | 0.0% | 0.0% | 73% |
| 2 doctor(s) on duty, 8 a family a year | 197 | 3% | 0.0 | 0.0 | 0.2% | 0.0% | 55% |
| 2 doctor(s) on duty, 24 a family a year | 582 | 10% | 0.2 | 0.0 | 1.5% | 0.3% | 47% |
| 3 doctor(s) on duty, 2.4 a family a year | 59 | 1% | 0.0 | 0.0 | 0.0% | 0.0% | 73% |
| 3 doctor(s) on duty, 8 a family a year | 197 | 2% | 0.0 | 0.0 | 0.0% | 0.0% | 55% |
| 3 doctor(s) on duty, 24 a family a year | 582 | 7% | 0.0 | 0.0 | 0.1% | 0.0% | 47% |

## 2. Growing past 300 families (8 consultations a family a year, 15 minutes)

| Case | Consultations a month | Doctor time used | Mean wait (min) | 95th-percentile wait (min) | Wait over 5 min | Wait over 15 min | Share from top 10% of families |
|---|---|---|---|---|---|---|---|
| 1 doctor(s), 300 families | 197 | 7% | 1.0 | 6.8 | 6.2% | 2.3% | 55% |
| 1 doctor(s), 1,000 families | 654 | 23% | 4.4 | 25.7 | 21.7% | 10.6% | 55% |
| 1 doctor(s), 2,000 families | 1,310 | 45% | 15.8 | 68.6 | 47.5% | 32.5% | 55% |
| 1 doctor(s), 3,000 families | 1,960 | 68% | 48.5 | 172.9 | 71.5% | 60.0% | 55% |
| 1 doctor(s), 5,000 families | 3,275 | 114% | 3094.2 | 5768.1 | 99.6% | 99.4% | 55% |
| 2 doctor(s), 300 families | 197 | 3% | 0.0 | 0.0 | 0.2% | 0.0% | 55% |
| 2 doctor(s), 1,000 families | 654 | 11% | 0.3 | 0.2 | 2.1% | 0.3% | 55% |
| 2 doctor(s), 2,000 families | 1,310 | 23% | 1.1 | 8.6 | 8.1% | 2.1% | 55% |
| 2 doctor(s), 3,000 families | 1,960 | 34% | 3.1 | 18.6 | 18.6% | 7.0% | 55% |
| 2 doctor(s), 5,000 families | 3,275 | 57% | 16.4 | 72.9 | 48.4% | 32.5% | 55% |
| 3 doctor(s), 300 families | 197 | 2% | 0.0 | 0.0 | 0.0% | 0.0% | 55% |
| 3 doctor(s), 1,000 families | 654 | 8% | 0.0 | 0.0 | 0.2% | 0.0% | 55% |
| 3 doctor(s), 2,000 families | 1,310 | 15% | 0.1 | 0.0 | 1.1% | 0.1% | 55% |
| 3 doctor(s), 3,000 families | 1,960 | 23% | 0.4 | 2.9 | 3.5% | 0.4% | 55% |
| 3 doctor(s), 5,000 families | 3,275 | 38% | 2.3 | 14.6 | 15.0% | 4.8% | 55% |

## 3. Stress: heavy use and long consultations at 1,000 families

| Case | Consultations a month | Doctor time used | Mean wait (min) | 95th-percentile wait (min) | Wait over 5 min | Wait over 15 min | Share from top 10% of families |
|---|---|---|---|---|---|---|---|
| 1 doctor(s), 8 a family a year, 8 min | 654 | 12% | 1.0 | 7.4 | 7.6% | 1.4% | 55% |
| 1 doctor(s), 8 a family a year, 25 min | 654 | 38% | 16.3 | 76.7 | 41.3% | 31.2% | 55% |
| 1 doctor(s), 24 a family a year, 15 min | 1,969 | 68% | 47.7 | 170.0 | 71.6% | 60.0% | 48% |
| 1 doctor(s), 24 a family a year, 25 min | 1,969 | 114% | 3159.1 | 5908.0 | 99.4% | 99.3% | 48% |
| 3 doctor(s), 8 a family a year, 8 min | 654 | 4% | 0.0 | 0.0 | 0.0% | 0.0% | 55% |
| 3 doctor(s), 8 a family a year, 25 min | 654 | 13% | 0.1 | 0.0 | 1.0% | 0.3% | 55% |
| 3 doctor(s), 24 a family a year, 15 min | 1,969 | 23% | 0.4 | 2.7 | 3.4% | 0.5% | 48% |
| 3 doctor(s), 24 a family a year, 25 min | 1,969 | 38% | 3.5 | 22.6 | 17.8% | 8.7% | 48% |

## 4. How many families before the 95th-percentile wait passes 15 minutes (15-minute consultations)

| Doctors on duty | 2.4 a family a year | 8 a family a year | 24 a family a year |
|---|---|---|---|
| 1 | about 1,980 | about 600 | about 200 |
| 2 | about 9,030 | about 2,680 | about 890 |
| 3 | about 16,780 | about 5,070 | about 1,720 |

