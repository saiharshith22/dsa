# Time Complexity

## Definition

**Time complexity** measures the **efficiency of an algorithm** in terms of speed **as input size grows**.

> It answers: *If the input becomes very large, how does the algorithm scale?*

---

## Time Complexity vs. Time Taken

- **Time complexity ≠ Time taken by algorithm**
  - Time taken (10ms) depends on hardware specs, language, system
  - Time complexity is a theoretical measure independent of these factors
  - **Big-O focuses on growth rate, not actual execution time**

---

## Why Big-O Matters

- Hardware speed doesn't matter
- Programming language doesn't matter
- **Input size (`n`) does matter**

Big-O helps us compare algorithms logically and choose efficient ones.

---

## What `n` Means

`n` = size of input

Examples:
- Array length
- Number of elements to process
- Number of nodes in a graph

---

## Big-O Complexity Rankings

### Fastest to Slowest

```
O(1)       → Constant time (best)
O(log n)   → Logarithmic time
O(n)       → Linear time
O(n log n) → Linearithmic time
O(n²)      → Quadratic time (slow)
```

---

## Common Big-O Complexities

### O(1) — Constant Time
- Execution time **does not depend on input size**
- Example: Accessing `arr[0]`, hash table lookup
- If n = 10 or 1,000,000 → time is the same

### O(log n) — Logarithmic Time
- Problem size is **divided by 2** each step
- "How many times can I divide n by 2 until it becomes 1?"
- Example: Binary Search
- Very fast even for large inputs

### O(n) — Linear Time
- Time grows **directly with input size**
- Double input → double work
- Example: Single loop through array

```javascript
for (let i = 0; i < n; i++) { }
```

### O(n log n) — Linearithmic Time
- For each of `n` elements, `log n` work is done
- Example: Merge Sort, Quick Sort (average case)
- Happens when: divide the problem, then process all elements at each level

### O(n²) — Quadratic Time
- For each element, you loop over all elements again
- Nested loops
- Becomes slow quickly

```javascript
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++) { }
```

---

## Big-O Rules (Memorize These)

### Rule 1: Ignore Constants
```
O(2n) → O(n)
O(5)  → O(1)
```

### Rule 2: Drop Lower Terms
```
O(n² + n) → O(n²)
```

### Rule 3: Loops Define Time
- 1 loop → O(n)
- Nested loops → O(n²)

### Rule 4: Sequential Code
```
O(n) + O(n) = O(n)
```

---

## Time vs. Space Complexity

**Time Complexity:** How long the algorithm runs

**Space Complexity:** Extra memory used (excluding input)
- New array of size `n` → O(n) space
- Only variables → O(1) space

---

## Worst Case Focus

Big-O usually describes the **worst-case scenario** because:
- Guarantees algorithm performance
- Standard in interviews and system design

---

## Quick Memory Trick

- **O(1)** → Do once
- **O(n)** → Loop once
- **O(log n)** → Divide by 2
- **O(n log n)** → Divide + process all
- **O(n²)** → Nested loops

---

## Key Takeaway

> **Big-O notation describes how an algorithm's time or space grows with input size, ignoring constants and hardware differences.**
