# React Router Dom v6 Nested Route Path Matching Issue

This repository demonstrates a bug in React Router Dom v6 where nested routes with parameters don't match correctly if their path overlaps with a parent route's path.  The issue stems from the way React Router interprets and prioritizes route matching with nested routes and parameters.

## Problem

The problem arises when you have a nested route with a parameter path segment that is a subset of the parent route's path.  The router incorrectly selects the parent route, causing unexpected routing behavior.

## Solution

The solution involves carefully crafting your routes to avoid path ambiguity.  This might involve modifying the paths of either the parent or child route.  Alternatively, you could use route parameters more strategically to create distinct path segments.

This repository provides a minimal reproducible example demonstrating the bug and its solution.  The `bug.js` file showcases the issue, and `bugSolution.js` illustrates how to resolve it.