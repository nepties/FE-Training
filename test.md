## Coding Test

Find a local minimum in an array.
Given an array with n integers, the task is to find a local minimum in it.

- What is local minimum? We say that an element arr[x] is a local minimum if it is less than or equal to both of its neighbors.
- For the first and last elements, we consider only a neighbor for comparison.
- We want to find only one of them. Note that there can be multiple ones.
- Output is the index of local minimum.

Examples:
Input: arr[] = [9, 6, 3, 14, 5, 7, 4];
Output: Index of local minimum is 2 (4 is also answer)

Input: arr[] = [23, 8, 15, 2, 3];
Output: Index of local minima is 1

Input: arr[] = [1, 2, 3];
Output: Index of local minima is 0

Input: arr[] = [3, 2, 1];
Output: Index of local minima is 2

Array is Empty -> -1

Array Length === 1 -> 0
