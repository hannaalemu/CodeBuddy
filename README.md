# CodeBuddy

## Problem Domain

### This Alexa skill is meant to help software developers prepare well for the Technical interviews! This can be expanded to other fields that require whiteboarding as well. I decided to make this skill because I found that working on a laptop to practice whiteboarding in ineffective, as they both require different skill sets. Some of the benefits of having someone ask you the questions and you attempting the solutions are…

####  Reading the question on your laptop is easier than listening to the question. In an actual whiteboarding interview, this is likely not the case. By having Alexa ask you the question, you develop your listening skills and train yourself on picking out important hints and details.
#### Most developers recommend practicing with someone else. But sometimes, your friends might not be available! Especially in Seattle weather where you don’t want to leave your house. All you need is Alexa, and a whiteboard(or a paper and pen).



## How is this going to work?

* You can ask Alexa “Alexa, let’s practice whiteboarding.”
* “Alexa, ask me a Linked List question.”
* “Alexa, ask me a whiteboard question asked by Amazon.”

	
## MVP
#### Alexa chooses from a random list of whiteboarding questions and reads it to the user.
#### Alexa sets a timer for 30 mins.

## Stretch goals

1. Divide questions by categories		
 * Level of difficulty 
 * Easy
* Medium
* Hard
2. Topics
* Data Structures like Binary trees, linked lists, and arrays
* Logical thinking and problem solving
* Top questions at companies
* Amazon
* Google
* Microsoft
3. Ask Alexa for hints
 4. Integrate a database to store the data, have Alexa retrieve it from the DB.


### Question Mongoose Model
## Each question is its own javascript object containing many properties.
 ``` Question = {
	_Id: Unique mongoose ID,
	Title: Title of the question = String,
	Description: The question itself = String,
	Hints: Hints to help user solve the problem = Array of strings,
	Solution: Solutions to solve it if any = Array of strings,
	Tags: Categories in which the question may appear in = Array of strings,
}

```

Example :

```
Question = {
	_ID: 143424,
	Title: ‘Merge two sorted arrays’,
	Description: ‘Given two sorted arrays m and n, merge them into one without   creating a new array.’
	Hints: [ ‘use a for loop’, ‘use quicksort algorithm’ ],
	Solutions: [ ‘First, loop over the first array, then loop over second array, then append the second array’s values into the first one. ’ ],
	Tag: 'Arrays'
}

```