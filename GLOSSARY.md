# DSA Patterns Glossary

Terms in this glossary represent core structures, metrics, and patterns that the user has successfully understood and verified through lessons.

## Core Metrics

**Time Complexity**:
A theoretical measure of the execution time of an algorithm as an algebraic function of its input size ($N$), typically expressed in Big-O notation.

**Space Complexity**:
A measure of the auxiliary (extra) memory space required by an algorithm to run as a function of the input size ($N$).

## Patterns and Paradigms

**Two Pointers (Converging)**:
An algorithmic technique where two indices start at opposite boundaries of a sorted collection and move inward toward each other based on monotonic conditions. Typically reduces pair/search complexity from $O(N^2)$ to $O(N)$.

**Two Pointers (Fast & Slow)**:
A variation where two pointers traverse the collection in the same direction at varying rates. Commonly used for cycle detection (Floyd's algorithm) or in-place array compaction.

**Monotonicity (in Pointer Traversal)**:
The mathematical property where values change in only one direction (always non-decreasing or non-increasing). Sorting establishes monotonicity, which is what guarantees that moving `left++` will never decrease the sum and moving `right--` will never increase it.

