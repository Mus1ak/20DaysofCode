###### Days of Code Streak 
## Day 8 : Convenience Store

###### Post
[![Markdown Logo](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/posts/mustbemustak_daysofcode-vitbhopalgaming-20daysofcode-activity-7020664775013449728-fO7L?utm_source=share&utm_medium=member_desktop)

###### Code
[![Markdown Logo](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://github.com/Mus1ak/20DaysofCode/blob/main/Days/Day%208/Day8.js)

**Problem** : Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

```javascript
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
```

```Test Cases```

```python
Input : 
changeEnough([25, 20, 5, 0], 4.25))
changeEnough([100, 20, 5, 0], 50.50))
changeEnough([20, 20, 5, 0], 4.25))
changeEnough([25, 20, 5], 4.25))
changeEnough([25, 20, 5, 0], -5))

Output : 
true
Insufficient funds: you need $23.25 more.
false
true
Invalid input: change array must contain 4 elements in the following order: quarters, dimes, nickels, pennies.
false
Invalid input: amountDue must be a positive number.
false
``` 


